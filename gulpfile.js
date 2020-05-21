'use strict';

const gulp = require('gulp');
// const sassCustomFunctions = require('./scripts/sass-custom-functions');
// const jsonImporter = require('node-sass-json-importer');
const { sassConfig, postCssConfig } = require('./shared.config')
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const rename = require("gulp-rename");
const importCss = require('gulp-import-css');
const postcss = require('gulp-postcss');
const cssBeautify = require('gulp-cssbeautify');
const transform = require('gulp-transform'); // remove
const { generateVars } = require('./scripts/custom-gulp')

const sassTask = function () {

    return gulp.src('./src/_*-styles/*.index.scss')
        .pipe(sass(sassConfig).on('error', sass.logError))
        // .pipe(importCss()) // no need?
        .pipe(postcss(postCssConfig.plugins))
        .pipe(rename(path => {
            // console.log(path);
            path.basename = path.basename.split('.')[0]
            path.dirname = '/' + path.basename
            path.extname = '.min' + path.extname
        }))
        .pipe(gulp.dest('./lib'))
        .pipe(cssBeautify())
        .pipe(rename(path => { path.basename = path.basename.split('.')[0] }))
        .pipe(gulp.dest('./lib'))
        .pipe(generateVars())
        // .pipe(rename(path => { console.log(path) }))
        .pipe(gulp.dest('.')) // ???
};



// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

exports.default = sassTask;
