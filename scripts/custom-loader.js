const path = require("path");
const loaderUtils = require("loader-utils");


module.exports = function (content) {

    // parse out css vars --whatever:val; using regex
    // save (emitFile) them to variables.scss variables.less and variables.css file

    const url = loaderUtils.interpolateName(
        this,
        'test.txt',
        {
            context: this.rootContext,
            // content: content,
        }
    );

    fileContents = 'test';

    this.emitFile(url, fileContents);
    return content
}
