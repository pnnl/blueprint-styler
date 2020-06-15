'use strict'

const gulp = require('gulp')

const { sassConfig, postCssConfig } = require('./shared.config')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

const rename = require("gulp-rename")
const postcss = require('gulp-postcss')
const cssBeautify = require('gulp-cssbeautify')
const extractCssVarsToAllFormats = require('./scripts/gulp-extract-css-vars-to-all-formats')

const sassTask = function () {
    return gulp.src('./src/_*-styles/*.index.scss')
        .pipe(sass(sassConfig).on('error', sass.logError))
        .pipe(postcss(postCssConfig.plugins))
        .pipe(rename(path => {
            path.basename = path.basename.split('.')[0]
            path.dirname = '/' + path.basename
            path.extname = '.min' + path.extname
        }))
        .pipe(gulp.dest('./lib'))
        .pipe(cssBeautify())
        .pipe(rename(path => { path.basename = path.basename.split('.')[0] }))
        .pipe(gulp.dest('./lib'))
        .pipe(extractCssVarsToAllFormats())
        // .pipe(rename(path => { console.log(path) }))
        .pipe(gulp.dest('.')) // ???
}

exports.default = sassTask
