const path = require("path");
const loaderUtils = require("loader-utils");


module.exports = function (content) {

    // parse out css vars --whatever:val; using regex
    // save (emitFile) them to variables.scss variables.less and variables.css file

    const varsRegex = /\:root\{([^\}]*)\}/i;
    const cssVars = content.match(varsRegex)[1];

    const css = `:root{${cssVars}}`;
    const less = cssVars.replace(/--/g, '@') + ';';
    const scss = cssVars.replace(/--/g, '$') + ';';

    const cssUrl = loaderUtils.interpolateName(this, '[name]/variables.css', { context: this.rootContext });
    const lessUrl = loaderUtils.interpolateName(this, '[name]/variables.less', { context: this.rootContext });
    const scssUrl = loaderUtils.interpolateName(this, '[name]/variables.scss', { context: this.rootContext });

    this.emitFile(cssUrl, css);
    this.emitFile(lessUrl, less);
    this.emitFile(scssUrl, scss);

    return content
}
