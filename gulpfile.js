const gulp = require('gulp')

const sass = require('gulp-sass')(require('node-sass'))
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
const extractCssVarsToAllFormats = require('./scripts/gulp-extract-css-vars-to-all-formats');
const blueprintName = 'blueprint'
const dirname = (styleName)=> styleName === blueprintName ? '/base' : `/overrides/${styleName.split('.')[0]}`

/*
// RETRIEVE POSTCSS CONFIG FROM CREATE REACT APP //
// this seems like it takes a long time?
process.env.NODE_ENV = 'production'
const createReactAppWebpackConfigProduction = require('react-scripts/config/webpack.config.js')('production')
const createReactAppPostCssConfig = createReactAppWebpackConfigProduction.module.rules[1].oneOf[6].use[2].options // WOW! // needs update
const createReactAppPostCssPlugins = createReactAppPostCssConfig.plugins()
// copy-paste from ./node_modules/react-scripts/config/webpack.config.js:130 might be more consistent?
// console.log(createReactAppPostCssConfig.plugins());
 */

const scssOutput = () => (
    // gulp.src('./src/styles/_blueprin*/index.scss') // for testing
    gulp.src('./src/styles/_*/index.scss')
        .pipe(sass(sassConfig).on('error', sass.logError))
        .pipe(rename(path => {
            const styleName = path.dirname.split('/')[0].substring(1);
            path.basename = styleName
        }))
    // .pipe(postcss(createReactAppPostCssPlugins)) // make sure we are consistent with create-react-app?
)


const compileStylesheetTask = function (cb) {
    scssOutput()
        .pipe(postcss([
            // require('postcss-combine-duplicated-selectors'), // ...could change cascade order...
            // require('postcss-custom-properties'), // fallback values for --vars // this is already coming from createReactAppPostCssPlugins?
            require('postcss-remove-root'), // remove :root{} with --vars
            require('cssnano')({
                preset: ['default', {
                    colormin: false, // keep hsl color formats
                    discardComments: {
                        removeAll: true,
                    },
                }]
            }),
        ]))
        .pipe(cssBeautify())
        .pipe(rename(path => {
            path.dirname = dirname(path.basename)
            path.basename = path.basename === blueprintName ? 'blueprint' : 'override';
        }))
        .pipe(gulp.dest('./'))
        .pipe(rename(path => { console.log(`>> Saved ${path.dirname}/${path.basename}${path.extname}`); }))
    cb();
}

const compileVarsTask = function (cb) {
    scssOutput()
        .pipe(postcss([
            require('cssnano'), // not sure we need this
            require('postcss-combine-duplicated-selectors') // combine :root{}
        ]))
        .pipe(cssBeautify())
        .pipe(extractCssVarsToAllFormats()) // build variable files
        .pipe(rename(path => {
            if (path.basename.includes('.')) { // fix multiple extensions, ie .cjs.js
                path.extname = path.basename.substring(path.basename.indexOf('.')) + path.extname
                path.basename = path.basename.split('.')[0]
            }
            path.dirname = dirname(path.basename)
            if (path.extname === '.css') {
                path.basename = path.basename === blueprintName ? 'blueprint-tokens' : 'override-tokens';
            } else {
                path.basename = path.basename === blueprintName ? 'tokens' : 'custom-tokens';
            }
        }))
        .pipe(gulp.dest('./'))
    cb();
}

exports.styles = compileStylesheetTask
exports.vars = compileVarsTask

exports.default = gulp.series(compileStylesheetTask, compileVarsTask)
