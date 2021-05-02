'use strict'

const gulp = require('gulp')
const mergeStream = require('merge-stream');

const { postCssConfig, sassConfig } = require('./shared.config')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

const rename = require("gulp-rename")
const postcss = require('gulp-postcss')
const cssBeautify = require('gulp-cssbeautify')
const extractCssVarsToAllFormats = require('./scripts/gulp-extract-css-vars-to-all-formats')

process.env.NODE_ENV = 'production'
const createReactAppWebpackConfigProduction = require('react-scripts/config/webpack.config.js')('production')
const createReactAppPostCssConfig = createReactAppWebpackConfigProduction.module.rules[1].oneOf[6].use[3].options // WOW!
console.log(createReactAppPostCssConfig);
// copy-pasted from ./node_modules/react-scripts/config/webpack.config.js:130



const sassTask = function () {
    // const scssOutput = gulp.src('./src/styles/_flat-styles/*.index.scss')
    const scssOutput = gulp.src('./src/styles/_*-styles/*.index.scss')
        .pipe(sass(sassConfig).on('error', sass.logError))

    const cssOutput = scssOutput
        .pipe(postcss(postCssConfig.plugins))
        .pipe(postcss(postCssConfig.removeNull))
        .pipe(postcss(postCssConfig.removeRoot))
        .pipe(rename(path => {
            path.basename = path.basename.split('.')[0]
            path.dirname = '/' + path.basename
            path.extname = '.min' + path.extname
        }))
        .pipe(gulp.dest('./lib'))
        .pipe(cssBeautify())
        .pipe(rename(path => { path.basename = path.basename.split('.')[0] })) // remove .min
        .pipe(gulp.dest('./lib'))

    const varsOutput = scssOutput
        .pipe(postcss(postCssConfig.varsOutput))
        .pipe(rename(path => {
            path.dirname = '/' + path.basename
        }))
        .pipe(cssBeautify())
        .pipe(extractCssVarsToAllFormats()) // build variable files
        // .pipe(rename(path => { console.log(path) }))
        .pipe(gulp.dest('./lib')) // ???

    return mergeStream(cssOutput, varsOutput)
}

exports.default = sassTask
