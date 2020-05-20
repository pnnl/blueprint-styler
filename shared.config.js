exports.sassConfig = {
    includePaths: ['node_modules'],
    functions: require('./scripts/sass-custom-functions'),
    importer: [
        require('node-sass-json-importer')(),
        require('node-sass-tilde-importer')
    ]
    // outputStyle: 'compressed'
}
