exports.sassConfig = {
    includePaths: ['node_modules'],
    functions: require('./scripts/sass-custom-functions'),
    importer: [
        require('node-sass-tilde-importer')
    ],
    // outputStyle: 'compressed',
}

exports.postCssConfig = {
    plugins: [
        require('postcss-combine-duplicated-selectors')({
            // removeDuplicatedProperties: true // this is broken :(
        }),
        require("autoprefixer"),
        require("cssnano")({ preset: "default" }),
    ],
}
