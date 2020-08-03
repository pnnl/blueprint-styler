exports.styleSetConfig = [
    // add new styles here...
    {
        slug: 'default-styles',
        name: 'Default'
    },
    {
        slug: 'flat-styles',
        name: 'Flat'
    },
    {
        slug: 'antd-styles',
        name: 'Ant Design'
    },
]

exports.styleSetAsEntry = function (styleSetConfig = []) {
    const entry = {}
    styleSetConfig.forEach(style => entry[style.slug] = `./src/styles/_${style.slug}/styler-styles.scss`);
    return entry
}
