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
        require("cssnano")({
            preset: "default",
            // colormin: false, // prevent color transformations
            // calc: false // prevent pre-calc
        }),
        // require('postcss-combine-duplicated-selectors')({
            // removeDuplicatedProperties: true // this is broken in v10 :(
        // }),
        // require('postcss-remove-null'),
        require("autoprefixer"),
    ],
    // NOTE:
    // `removeDuplicatedProperties: true` followed by postcss-remove-null will allow the targeted removal of properties
}
