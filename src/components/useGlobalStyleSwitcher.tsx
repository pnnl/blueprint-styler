import React, { useEffect } from 'react'

// GLOBAL
const switchableGlobalStyleSheets: StyleSheet[] = []

/**
 * Conditionally apply imported .css files
 * WARNING: This is pretty finicky. You must set this up exactly or there may be unintended consequences
 *
 * Conditions:
 * 1. A component using this hook *should* be lazy loaded:
 * ```tsx
 * LazyCssComponent = React.lazy(() => import('./cssComponent'))
 * ...
 * <React.Suspense fallback={<></>}>
 *   {condition && <LazyCssComponent/>}
 * </React.Suspense>
 * ```
 * An exception to this might be using this in a single, normal, non-lazy component so styles are loaded on first render.
 *
 * 2. `createUseGlobalStyleSwitcher` must called in global scope in the same tsx file as the imported css being targeted and the component to be lazy loaded
 * ```tsx
 * import React from 'react'
 * import { createUseGlobalStyleSwitcher } from './useGlobalStyleSwitcher'
 * import './global-styles.css'
 * const useGlobalStyleSwitcher = createUseGlobalStyleSwitcher()
 * export const CssComponent: React.FC<{}> = () => {
 *     useGlobalStyleSwitcher()
 *     return null
 * }
 * export default CssComponent
 * ```
 *
 * @param {boolean} immediatelyUnloadStyle
 * if true: immediately unloads the StyleSheet when the component is unmounted
 * if false: waits to unloads the StyleSheet until another instance of useGlobalStyleSwitcher is called. This avoids a flash of unstyled content
 */
export const createUseGlobalStyleSwitcher = (
    immediatelyUnloadStyle: boolean = false
) => {
    let localStyleSheet: StyleSheet
    console.log('initialized createUseGlobalStyleSwitcher')
    return () => {
        useEffect(() => {

            // if there are no stylesheets, you did something wrong...
            if (document.styleSheets.length < 1) return

            // set the localStyleSheet if this is the first time this instance of this useEffect is called
            if (localStyleSheet == null) {
                localStyleSheet = document.styleSheets[document.styleSheets.length - 1]
                switchableGlobalStyleSheets.push(localStyleSheet)
            }

            // if we are switching StyleSheets, disable all switchableGlobalStyleSheets
            if (!immediatelyUnloadStyle) {
                console.log('removed all StyleSheets')
                switchableGlobalStyleSheets.forEach(styleSheet => styleSheet.disabled = true)
            }

            // enable our StyleSheet!
            console.log('enable our StyleSheet!')
            localStyleSheet.disabled = false

            // if we are NOT switching StyleSheets, disable this StyleSheet when the component is unmounted
            if (immediatelyUnloadStyle) return () => {
                console.log('removed a StyleSheet')
                if (localStyleSheet != null) localStyleSheet.disabled = true
            }

        })
    }
}
