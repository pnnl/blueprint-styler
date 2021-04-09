'use strict'

const gulp = require('gulp')
const mergeStream = require('merge-stream');

const { sassConfig, postCssConfig } = require('./shared.config')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

const rename = require("gulp-rename")
const postcss = require('gulp-postcss')
const postcssCssNano = require("cssnano")
const cssBeautify = require('gulp-cssbeautify')
const extractCssVarsToAllFormats = require('./scripts/gulp-extract-css-vars-to-all-formats')

const sassTask = function () {
    // const scssOutput = gulp.src('./src/styles/_default-var-styles/*.index.scss')
    const scssOutput = gulp.src('./src/styles/_*-styles/*.index.scss')
        .pipe(sass(sassConfig).on('error', sass.logError))
        .pipe(postcss(postCssConfig.plugins))

    const cssOutput = scssOutput
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
        // .pipe(postcss([
        //     postcssCssNano // combines :root{} into a single block
        // ]))
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
