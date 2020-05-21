var path = require('path');
var through2 = require('through2');
var File = require('vinyl');


exports.generateVars = function () {
    'use strict';
    return through2.obj(function (file, enc, next) {
        const content = file.contents.toString('utf8')

        let cssVars = content.match(/\.bpx-vars\s?\{([^\}]*)\}/i)[1];

        cssVars = cssVars.replace(/[\n\r]$/g, ';\n')

        const css = `:root{${cssVars}}`;

        // cssVars = cssVars.replace(/\s{2,}/g, '')
        const less = cssVars.replace(/--/g, '@')
        const scss = cssVars.replace(/--/g, '$')

        let jsObj = {};
        const jsKeyValMatches = [...cssVars.matchAll(/--([^:]*):([^;]*);?/ig)];
        jsKeyValMatches.forEach(match => {
            let name = match[1];
            const value = match[2]
                .replace(/[\n\t\r]+/g, '') // replace all newlines and linefeeds
                .replace(/^\s/g, '') // replace all starting spaces
            name = name.toUpperCase().replace(/-/g, '_');
            jsObj[name] = value;
        });
        const json = JSON.stringify(jsObj, null, 2)

        const jsObjString = json.replace(/"([^"]+)":/g, '$1:')
        const js = `module.exports = ${jsObjString};`
        const ts = `export const Variables = ${jsObjString};`

        // const base = file.path;
        // const base = path.join(file.path, '..');
        const base = path.dirname(file.path);

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

        next();
    });
}
