const path = require("path");
const loaderUtils = require("loader-utils");

module.exports = function (content) {

    // parse out css vars --whatever:val; using regex
    // save (emitFile) them to variables.scss variables.less and variables.css file

    const varsRegex = /\.bpx-vars\{([^\}]*)\}/i;
    let cssVars = content.match(varsRegex)[1];
    cssVars = cssVars.replace(/;/g, ';\n');

    const css = `:root{\n${cssVars}\n}`;
    const less = cssVars.replace(/--/g, '@') + ';';
    const scss = cssVars.replace(/--/g, '$') + ';';

    let js = {};
    const jsKeyValMatches = [...cssVars.matchAll(/--([^:]*):([^;]*);?/ig)];
    jsKeyValMatches.forEach(match => {
        let name = match[1];
        const value = match[2];
        name = name.toUpperCase().replace(/_/g, '_');
        js[name] = value;
    });
    const json = JSON.stringify(js)
        .replace(/",/g, '",\n  ')
        .replace(/\{  /g, '{\n')
        .replace(/\}/g, '\n}\n')

    const cssUrl = loaderUtils.interpolateName(this, '[name]/variables.css', { context: this.rootContext });
    const lessUrl = loaderUtils.interpolateName(this, '[name]/variables.less', { context: this.rootContext });
    const scssUrl = loaderUtils.interpolateName(this, '[name]/variables.scss', { context: this.rootContext });
    const jsonUrl = loaderUtils.interpolateName(this, '[name]/variables.json', { context: this.rootContext });
    const jsUrl = loaderUtils.interpolateName(this, '[name]/variables.js', { context: this.rootContext });

    this.emitFile(cssUrl, css);
    this.emitFile(lessUrl, less);
    this.emitFile(scssUrl, scss);
    this.emitFile(jsonUrl, json);
    // TODO: emit variables.js somehow?

    return content
}
