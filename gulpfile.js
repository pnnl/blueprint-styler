'use strict';

const gulp = require('gulp');
// const sassCustomFunctions = require('./scripts/sass-custom-functions');
// const jsonImporter = require('node-sass-json-importer');
const { sassConfig } = require('./shared.config')
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const sassTask = function () {
    return gulp.src('./src/_default-styles/index.scss')
        .pipe(sass(sassConfig).on('error', sass.logError))
        .pipe(gulp.dest('./lib'));
};

// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

exports.default = sassTask;
