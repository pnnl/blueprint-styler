exports.styleSetConfig = [
    // add new styles here...
    {
        slug: 'ibm-carbon-styles',
        name: 'IBM Carbon'
    },
    {
        slug: 'default-styles',
        name: 'Default'
    },
    {
        slug: 'new-styles',
        name: 'Flat'
    },
    {
        slug: 'antd-like-styles',
        name: 'Ant Design'
    },
]

exports.styleSetAsEntry = function (styleSetConfig = []) {
    const entry = {}
    styleSetConfig.forEach(style => entry[style.slug] = `./src/styles/_${style.slug}/styler-styles.scss`);
    return entry
}
