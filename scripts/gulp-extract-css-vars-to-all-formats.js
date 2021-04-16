var path = require('path');
var through2 = require('through2');
var File = require('vinyl');

/** pt-dark-border-shadow-opacity => PT_DARK_BORDER_SHADOW_OPACITY */
const convertKebabToScreamingSnakeCase = string => string.toUpperCase().replace(/-/g, '_')

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
const convertJsonToJsObjString = jsonString => jsonString.replace(/"([^"]+)":/g, '$1:')

/** css-var => var(--css-var) */
const cssKebabNameToVarIdentity = string => `var(--${string})`


module.exports = () => through2.obj(function (file, enc, next) {
    const content = file.contents.toString('utf8')

    //#region - Parse CSS key-values out of :root{...} declaration ///////////////////
    // find the block of css vars in the file
    let cssVarsMatch = content.match(/:root[^{]*\{([^\}]*)\}/i); // selector needs to match src/styles/global/root-selector.scss

    if (cssVarsMatch == null) {
        console.log(`>> No --css:vars; in :root{} in ${file.basename}!`);
        next();
        return;
    }

    let cssVars = cssVarsMatch[1];
    // cssVars = cssVars.replace(/\s{2,}/g, '')

    // extract all the vars and values as regex matches
    const jsKeyValMatches = [...cssVars.matchAll(/(--([^:]*):\s?([^;]*);?|\/\*![\s]*(\w*))/ig)];

    //#endregion ////////////////////////////////////////////////////////////////////////////////


    //#region - turn the CSS key-values into parsable objects ///////////////////

    // turn the jsKeyValMatches into an object
    let jsObjIdentity = {}
    let cssObjValues = {}
    let currentCategory = 'Any'
    jsKeyValMatches.forEach(match => {
        // creating these objects also deduplicates css --custom-property declarations
        if (match[4] != null) {
            currentCategory = match[4]
        } else {

            // create a category if it doesn't exist
            if (jsObjIdentity[currentCategory] == null) {
                jsObjIdentity[currentCategory] = {}
            }
            if (cssObjValues[currentCategory] == null) {
                cssObjValues[currentCategory] = {}
            }

            const cssName = match[2];

            // vars equal raw values // CSS_VAR: 24px;
            const cssValue = match[3] // value of the css
                .replace(/[\n\t\r]+/g, '') // replace all newlines, tabs, and line feeds
            cssObjValues[currentCategory][cssName] = cssValue;

            // identity // CssVar: "var(--css-var)",
            const jsValue = cssKebabNameToVarIdentity(cssName) // "var(--css-var)"
            // jsName = convertKebabToScreamingSnakeCase(name) // CSS_VAR
            const jsName = convertKebabToCamelCase(cssName) // CssVar
            jsObjIdentity[currentCategory][jsName] = jsValue;
        }
    });
    //#endregion ////////////////////////////////////////////////////////////////////////////////


    //#region - Process data object into css, less, and scss file strings ///////////////////
    let css = `:root {\n`
    let less = ``
    for (const categoryName in cssObjValues) {
        if (Object.hasOwnProperty.call(cssObjValues, categoryName)) {
            const currentCategory = cssObjValues[categoryName];
            const currentCategoryComment = `\n/*! ${categoryName} */\n`
            css += currentCategoryComment
            less += currentCategoryComment
            for (const varName in currentCategory) {
                if (Object.hasOwnProperty.call(currentCategory, varName)) {
                    const varValue = currentCategory[varName];
                    css += `\t--${varName}: ${varValue};\n` // css contains real value
                    less += `@${varName}: ${cssKebabNameToVarIdentity(varName)};\n` // less an scss are identity
                }
            }
        }
    }
    css += '}'
    const scss = less.replace(/@/g, '$')

    /* // OLD CSS PROCESSING //
    const css = `:root{${cssVars}\n}`;
    // vars equal raw values // @css-var: 24px;
    const customPropPrefixRegex = /\s{2,}--/g
    const less = cssVars.replace(customPropPrefixRegex, `\n@`) // broken
    const scss = cssVars.replace(customPropPrefixRegex, `\n$`) // broken
    // identity // @css-var: var(--css-var);
    const less = cssVars.replace(/\s*--([^:]*):[^;]*;?/gi, (match, propertyName) => `\n@${propertyName}: var(--${propertyName});`)
    const scss = less.replace(/@/g, '$')
    */

    //#endregion ////////////////////////////////////////////////////////////////////////////////


    //#region - Process data object into js, ts, and json - all identity ///////////////////
    const json = JSON.stringify(jsObjIdentity, null, 2)
    let js = ts = '';

    for (const category in jsObjIdentity) {
        if (jsObjIdentity.hasOwnProperty(category)) {
            const set = jsObjIdentity[category];
            const jsObjString = convertJsonToJsObjString(JSON.stringify(set, null, 2))
            js += `\nexports.${category} = ${jsObjString};\n`
            ts += `\nexport const ${category} = ${jsObjString};\n`
        }
    }
    //#endregion ////////////////////////////////////////////////////////////////////////////////


    //#region - Export as files ///////////////////

    const base = path.basename(file.path).split('.')[0]; // return file name as base

    [
        [css, 'css'],
        [less, 'less'],
        [scss, 'scss'],
        [json, 'json'],
        [js, 'js'],
        [ts, 'ts'],
    ].forEach(type => {
        this.push(new File({
            // base: base,
            path: path.join(base, 'variables.' + type[1]),
            contents: new Buffer(type[0])
        }))
    })

    //#endregion ////////////////////////////////////////////////////////////////////////////////


    // completed log
    console.log(`>> Extracted ${jsKeyValMatches.length} vars from ${file.basename}`);
    next();

});
