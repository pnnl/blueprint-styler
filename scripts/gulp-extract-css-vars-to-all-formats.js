var path = require('path');
var through2 = require('through2');
var File = require('vinyl');

/** pt-dark-border-shadow-opacity => PT_DARK_BORDER_SHADOW_OPACITY */
// const convertKebabToScreamingSnakeCase = string => string.toUpperCase().replace(/-/g, '_')

/** pt-dark-border-shadow-opacity => PtDarkBorderShadowOpacity */
const convertKebabToCamelCase = (string) => {
    return string
        .toLowerCase()
        .replace(
            /^(\w)|-(\w)/gi,
            (match, firstLetter, otherLetter) => {
                const letter = firstLetter || otherLetter
                return letter.toUpperCase() // CamelCase
                // return firstLetter ? firstLetter.toLowerCase() : otherLetter.toUpperCase() // camelCase
            }
        ).replace(/-/g, '') // just in case
}

/** "PtDarkBorderShadowOpacity": "value", => PtDarkBorderShadowOpacity: "value", */
// const convertJsonToJsObjString = jsonString => jsonString.replace(/"([^"]+)":/g, '$1:')

/** css-var => var(--css-var) */
const cssKebabNameToVarIdentity = string => `var(--${string})`

const darkRegex = /dark-(?!gray)/g


module.exports = () => through2.obj(function (file, enc, next) {
    const content = file.contents.toString('utf8')

    //#region - Parse CSS key-values out of :root{...} declaration ///////////////////
    // find the block of css vars in the file
    let cssVarsMatch = content.match(/:root[^{]*\{([^}]*)\}/i); // selector needs to match src/styles/global/root-selector.scss

    if (cssVarsMatch == null) {
        console.log(`>> No --css:vars; in :root{} in ${file.basename}!`);
        next();
        return;
    }

    let cssVars = cssVarsMatch[1];
    // cssVars = cssVars.replace(/\s{2,}/g, '')

    // extract all the vars and values as regex matches
    const cssVarOrTitleRegex = /(--([^:]*):\s?([^;]*);?|\/\*![\s]*(\w*))/ig
    const jsKeyValMatches = [...cssVars.matchAll(cssVarOrTitleRegex)];

    //#endregion ////////////////////////////////////////////////////////////////////////////////


    //#region - turn the CSS key-values into parsable objects ///////////////////

    // turn the jsKeyValMatches into an object
    let cssObjValues = {
        light: {},
        dark: {}
    }
    let categoryName = 'Any'
    jsKeyValMatches.forEach(match => {
        // creating these objects also deduplicates css --custom-property declarations
        if (match[4] != null) {
            categoryName = match[4]
        } else {

            // create a category if it doesn't exist
            if (cssObjValues.light[categoryName] == null) {
                cssObjValues.light[categoryName] = {}
                cssObjValues.dark[categoryName] = {}
            }

            const varName = match[2];

            // vars equal raw values // CSS_VAR: 24px;
            let varValue = match[3] // value of the css
                .replace(/[\n\t\r]+/ig, '') // replace all newlines, tabs, and line feeds

            // the uri encoded image data doesn't get matched by the original cssVarOrTitleRegex
            if (varValue.includes('url("data:image')) {
                const uriRegex = new RegExp(`${varName}:\\s?([^)]*\\))`)
                varValue = cssVars.match(uriRegex)[1]
            }

            if (varName.search(darkRegex) !== -1) {
                const inverseVarName = varName.replace(darkRegex, '')
                const inverseVarValue = varValue.replace(darkRegex, '')
                cssObjValues.dark[categoryName][inverseVarName] = inverseVarValue
                if (varValue.includes(`--${inverseVarName}`)) {
                    console.log(`>> WARNING: Possible circular dependency! A --dark-var contains its normal --var counterpart in: --${varName}: ${varValue};`);
                }
            } else if (varValue.search(darkRegex) !== -1) {
                console.log(`>> WARNING: Possible circular dependency! A normal --var contains a --dark-var in: --${varName}: ${varValue};`);
            } else {
                cssObjValues.light[categoryName][varName] = varValue;
            }

        }
    });
    //#endregion ////////////////////////////////////////////////////////////////////////////////


    //#region - Process cssObjValues into strings for different formats: css, less, scss, ts, js, json ///////////////////
    let less = '';
    let js = '';
    let ts = '';
    const jsObjIdentity = {};
    const cssThemeStrings = { light: '', dark: '' };
    const cssThemes = ['light', 'dark'];
    cssThemes.forEach(theme => {
        for (const categoryName in cssObjValues[theme]) {
            if (Object.hasOwnProperty.call(cssObjValues[theme], categoryName)) {
                const currentCategory = cssObjValues[theme][categoryName];
                const currentCategoryComment = `\n\t/*! ${categoryName} */\n`
                cssThemeStrings[theme] += currentCategoryComment

                if (theme === 'light') {
                    less += currentCategoryComment
                    js += `\nexports.${categoryName} = {\n`
                    ts += `\nexport const ${categoryName} = {\n`
                    jsObjIdentity[categoryName] = {}
                }

                for (const varName in currentCategory) {
                    if (Object.hasOwnProperty.call(currentCategory, varName)) {
                        const varValue = currentCategory[varName];

                        // css contains real value
                        cssThemeStrings[theme] += `\t--${varName}: ${varValue};\n`

                        // all others are identity
                        if (theme === 'light') {
                            const varIdentityValue = cssKebabNameToVarIdentity(varName)
                            const jsVarName = convertKebabToCamelCase(varName)
                            let jsValue = `\t${jsVarName}: "${varIdentityValue}",\n`
                            // const jsDocsCommentValue = `\t/** \`${varValue}\` */\n` // TODO: calculate raw value?
                            // jsValue = jsDocsCommentValue + jsValue
                            less += `@${varName}: ${varIdentityValue};\n` // less an scss are identity
                            js += jsValue
                            ts += jsValue
                            jsObjIdentity[categoryName][jsVarName] = varIdentityValue
                        }
                    }
                }

                if (theme === 'light') {
                    js += `};\n`
                    ts += `};\n`
                }
            }
        }
    })

    const css = `.bp5-vars, :root {\n${cssThemeStrings.light}}\n\n\n.bp5-dark {\n${cssThemeStrings.dark}}\n`
    const scss = less.replace(/@/g, '$')
    const json = JSON.stringify(jsObjIdentity, null, 2)

    let categories = []
    for (const category in jsObjIdentity) {
        if (jsObjIdentity.hasOwnProperty(category)) {
            categories.push(category);
        }
    }
    const tokens = `Tokens = {\n${categories.map(category => `\t${category}`).join(`,\n`)}\n}`;
    const tokensAll = `TokensAll = {\n${categories.map(category => `\t...${category}`).join(`,\n`)}\n}`;
    ts += `\nexport const ${tokens}\n\nexport const ${tokensAll}\n`;
    // js += `\nexports.${tokens}\n\nexports.${tokensAll}\n`;

    //#endregion ////////////////////////////////////////////////////////////////////////////////


    //#region - Export as files ///////////////////

    const filePath = file.path.substr(0, file.path.lastIndexOf("."));

    [
        [css, 'css'],
        [less, 'less'],
        [scss, 'scss'],
        [json, 'json'],
        [js, 'cjs.js'],
        [ts, 'js'], // ts is really es6 js
        [ts, 'ts'],
    ].forEach(type => {
        const [fileContents, fileType] = type
        this.push(new File({
            base: 'test',
            path: filePath + '.' + fileType,
            contents: new Buffer.from(fileContents)
        }))
    })

    //#endregion ////////////////////////////////////////////////////////////////////////////////

    // completed log
    console.log(`>> Extracted ${jsKeyValMatches.length} vars from ${file.basename}`);
    next();

});
