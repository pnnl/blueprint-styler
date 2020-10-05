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
        require("autoprefixer"),
        require("cssnano")({ preset: "default" }),
        require('postcss-combine-duplicated-selectors')({
            removeDuplicatedProperties: true // this is broken in v10 :(
        }),
        require('postcss-remove-null'),
    ],
    // NOTE:
    // `removeDuplicatedProperties: true` followed by postcss-remove-null will allow the targeted removal of properties
}
