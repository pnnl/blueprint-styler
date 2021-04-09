var path = require('path');
var through2 = require('through2');
var File = require('vinyl');

const convertKebabToScreamingSnakeCase = string => string.toUpperCase().replace(/-/g, '_')
const convertKebabToCamelCase = string => { // pt-dark-border-shadow-opacity => PtDarkBorderShadowOpacity
    return string
        .toLowerCase()
        .replace(
            /^(\w)|-(\w)/gi,
            (match, firstLetter, otherLetter) => {
                const letter = firstLetter || otherLetter
                return letter.toUpperCase()
            }
        ).replace(/-/g, '')
}
const convertJsonToJsObjString = jsonString => jsonString.replace(/"([^"]+)":/g, '$1:')

module.exports = () => through2.obj(function (file, enc, next) {
    const content = file.contents.toString('utf8')

    // find the block of css vars in the file
    let cssVarsMatch = content.match(/\.bpx-vars[^{]*\{([^\}]*)\}/i);
    if (cssVarsMatch == null) {
        console.log(`>> No --css: vars; in .bpx-vars{} in ${file.basename}!`);
        next();
        return;
    }
    let cssVars = cssVarsMatch[1];
    // cssVars = cssVars.replace(/\s{2,}/g, '')

    const css = `:root{${cssVars}\n}`;

    // vars equal raw values // @css-var: 24px;
    // const customPropPrefixRegex = /\s{2,}--/g
    // const less = cssVars.replace(customPropPrefixRegex, `\n@`) // broken
    // const scss = cssVars.replace(customPropPrefixRegex, `\n$`) // broken

    // identity // @css-var: var(--css-var);
    const less = cssVars.replace(/\s*--([^:]*):[^;]*;?/gi, (match, propertyName) => `\n@${propertyName}: var(--${propertyName});`)
    const scss = less.replace(/@/g, '$')

    // extract all the vars and values as regex matches
    const jsKeyValMatches = [...cssVars.matchAll(/(--([^:]*):\s?([^;]*);?|\/\*![\s]*(\w*))/ig)];

    // turn the jsKeyValMatches into an object
    let jsObj = {}
    let currentCategory = 'Any'
    jsKeyValMatches.forEach(match => {
        if (match[4] != null) {
            currentCategory = match[4]
        } else {
            if (jsObj[currentCategory] == null) {
                jsObj[currentCategory] = {}
            }
            let name = match[2];

            // vars equal raw values // CSS_VAR: 24px;
            // const value = match[3] // value of the css
            //     .replace(/[\n\t\r]+/g, '') // replace all newlines, tabs, and line feeds
            // name = convertKebabToScreamingSnakeCase(name)

            // identity // CssVar: "var(--css-var)",
            const value = `var(--${name})`
            name = convertKebabToCamelCase(name)

            jsObj[currentCategory][name] = value;
        }
    });

    const json = JSON.stringify(jsObj, null, 2)
    // const jsObjString = convertJsonToJsObjString(json)
    // const js = `module.exports = ${jsObjString};`
    // const ts = `export const Variables = ${jsObjString};`
    let js = ts = '';

    for (const category in jsObj) {
        if (jsObj.hasOwnProperty(category)) {
            const set = jsObj[category];
            const jsObjString = convertJsonToJsObjString(JSON.stringify(set, null, 2))
            js += `\nexports.${category} = ${jsObjString};\n`
            ts += `\nexport const ${category} = ${jsObjString};\n`
        }
    }

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

    console.log(`>> Extracted ${jsKeyValMatches.length} vars from ${file.basename}`);
    next();
});

