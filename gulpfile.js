'use strict'

const gulp = require('gulp')
const mergeStream = require('merge-stream');

const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const sassConfig = {
    includePaths: ['node_modules'],
    // functions: require('./scripts/sass-custom-functions'), // svg-icon()
    importer: [
        require('node-sass-tilde-importer')
    ],
    // outputStyle: 'compressed',
}

const rename = require("gulp-rename")
const postcss = require('gulp-postcss')
const cssBeautify = require('gulp-cssbeautify')
const extractCssVarsToAllFormats = require('./scripts/gulp-extract-css-vars-to-all-formats')


// RETRIEVE POSTCSS CONFIG FROM CREATE REACT APP //
// this seems like it takes a long time?
process.env.NODE_ENV = 'production'
const createReactAppWebpackConfigProduction = require('react-scripts/config/webpack.config.js')('production')
const createReactAppPostCssConfig = createReactAppWebpackConfigProduction.module.rules[1].oneOf[6].use[2].options // WOW!
const createReactAppPostCssPlugins = createReactAppPostCssConfig.plugins()
// copy-paste from ./node_modules/react-scripts/config/webpack.config.js:130 might be more consistent?
// console.log(createReactAppPostCssConfig.plugins());


const compileLibsTask = function () {
    // const scssOutput = gulp.src('./src/styles/_default-var-styles/*.index.scss')
    const scssOutput = gulp.src('./src/styles/_*-styles/*.index.scss')
        .pipe(sass(sassConfig).on('error', sass.logError))
        .pipe(postcss(createReactAppPostCssPlugins)) // make sure we are consistent with create-react-app


    const cssOutput = scssOutput
        .pipe(postcss([
            require('postcss-combine-duplicated-selectors'), // ...could change cascade order...
            require('postcss-custom-properties'), // fallback values for --vars
            require('postcss-remove-root'), // remove :root{} with --vars
            require('cssnano')({
                preset: ['default', {
                    colormin: false, // keep hsl color formats
                }]
            }),
        ]))
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
        .pipe(postcss([
            require('cssnano'), // not sure we need this
            require('postcss-combine-duplicated-selectors') // combine :root{}
        ]))
        .pipe(rename(path => {
            path.dirname = '/' + path.basename
        }))
        .pipe(cssBeautify())
        .pipe(extractCssVarsToAllFormats()) // build variable files
        // .pipe(rename(path => { console.log(path) }))
        .pipe(gulp.dest('./lib')) // ???


    return mergeStream(cssOutput, varsOutput)
}

exports.default = compileLibsTask
