// credit: https://codepen.io/tylergaw/pen/5061057013e6ddef39cf6b54a8d6bc1f

const isStyleRule = (rule: CSSRule) => rule.type === 1;

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
        }, [])
)

export const createDarkMirrorRootRule = (darkMirrorVarNames: string[]) => {

    // very similar to scripts/gulp-extract-css-vars-to-all-formats.js:105
    let cssDarkMirror = `.bp3-dark.bp3-dark {\n` // multiple .bp3-dark to add specificity
    darkMirrorVarNames.forEach(varName => {
        const inverseVarName = varName.replace('dark-', '')
        cssDarkMirror += `\t--${inverseVarName}: var(--${varName});\n`
    })
    cssDarkMirror += '}\n'

    return cssDarkMirror
}

export const addDarkMirrorToStyleSheet = (originStyleSheet: CSSStyleSheet, addToStyleSheet?: CSSStyleSheet) => {
    addToStyleSheet = addToStyleSheet || originStyleSheet;
    const darkMirrorVarNames = getDarkMirrorVarNames(originStyleSheet)
    const darkMirrorRootRule = createDarkMirrorRootRule(darkMirrorVarNames)
    addToStyleSheet.insertRule(darkMirrorRootRule, addToStyleSheet.cssRules.length);
}


// unused

const isSameDomain = (styleSheet: CSSStyleSheet) => {
    if (!styleSheet.href) return true;
    return styleSheet.href.indexOf(window.location.origin) === 0;
};

const getAllStyleSheets = () => Array.from(document.styleSheets).filter(isSameDomain)

export const getAllDarkMirrorVarNames = () => (
    getAllStyleSheets()
        .reduce((accumulator, styleSheet) => accumulator.concat(getDarkMirrorVarNames(styleSheet)), [])
)
