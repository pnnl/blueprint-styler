// credit: https://codepen.io/tylergaw/pen/5061057013e6ddef39cf6b54a8d6bc1f

const isSameDomain = (styleSheet: CSSStyleSheet) => {
    if (!styleSheet.href) return true;
    return styleSheet.href.indexOf(window.location.origin) === 0;
};

const isStyleRule = (rule: CSSRule) => rule.type === 1;

const getAllStyleSheets = () => Array.from(document.styleSheets).filter(isSameDomain)

export const getDarkMirrorCssCustomProps = () => (
    getAllStyleSheets()
        .reduce((accumulator, styleSheet) => accumulator.concat(getDarkMirrorVarNames(styleSheet)), [])
)

export const getDarkMirrorVarNames = (styleSheet: CSSStyleSheet) => (
    Array.from(styleSheet.cssRules)
        .filter(isStyleRule)
        .reduce((accumulator: string[], rule) => {

            if (!rule.cssText.startsWith(':root'))
                return accumulator

            const darkPropNames = Array.from(rule.cssText.matchAll(/--([\w\-]*):/ig))
                .filter(varNameMatch => varNameMatch[1]?.search(/dark-(?!gray)/ig) !== -1)
                .map(varNameMatch => varNameMatch[1])

            return accumulator.concat(darkPropNames)
        },
            []
        )
)

export const createDarkMirrorRootRule = (darkMirrorVarNames: string[]) => {

    // very similar to scripts/gulp-extract-css-vars-to-all-formats.js:105
    let cssDarkMirror = `.bp3-dark {\n`
    darkMirrorVarNames.forEach(varName => {
        const inverseVarName = varName.replace('dark-', '')
        cssDarkMirror += `\t--${inverseVarName}: var(--${varName});\n`
    })
    cssDarkMirror += '}\n'

    return cssDarkMirror
}

export const addDarkMirrorToStyleSheet = (styleSheet: CSSStyleSheet) => {
    const darkMirrorVarNames = getDarkMirrorVarNames(styleSheet)
    const darkMirrorRootRule = createDarkMirrorRootRule(darkMirrorVarNames)
    styleSheet.insertRule(darkMirrorRootRule, styleSheet.cssRules.length);
}
