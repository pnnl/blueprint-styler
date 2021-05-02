exports.sassConfig = {
    includePaths: ['node_modules'],
    // functions: require('./scripts/sass-custom-functions'),
    importer: [
        require('node-sass-tilde-importer')
    ],
    // outputStyle: 'compressed',
}

exports.postCssConfig = {
    plugins: [
        require('cssnano'),
        require('postcss-combine-duplicated-selectors')({
            removeDuplicatedProperties: true
            // ^^^ this thing strips /*! CommentsThatWeNeed */ to output variables.css
            // don't call it pre-varsOutput
        }),
        // require('autoprefixer'), // gets deleted anyways
    ],
    removeNull: [
        /**
         * removeDuplicatedProperties:true followed by postcss-remove-null will allow the targeted removal of properties
         * HOWEVER: postcss-combine-duplicated-selectors.removeDuplicatedProperties always runs at the end of the post css process
         * SO: this needs to be in a different postcss call or it won't run in the correct order (apparently)
         * NOTE: This extra step is not necessary for the css to function, but it does cleanup and validate final output
        */
        require('postcss-remove-null'),
        require('cssnano') // nano again to delete .empty-blocks{}
    ],
    removeRoot: [
        require('postcss-custom-properties'),
        require('postcss-remove-root'),
    ],
    varsOutput: [
        require('cssnano'),
        require('postcss-combine-duplicated-selectors') // combine :root{}
    ]
}
