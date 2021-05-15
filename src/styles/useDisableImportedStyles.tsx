import { useEffect } from 'react'
import { addDarkMirrorToStyleSheet } from './createDarkMirrorStyles'

// global list of all the StyleSheets that are touched in useDisableImportedStyles
export const switchableGlobalStyleSheets: CSSStyleSheet[] = []

// just to clarify what createUseDisableImportedStyles() returns
type useDisableImportedStyles = () => void

/**
 * Conditionally apply imported .css files
 * WARNING: This is pretty finicky. You must set this up exactly or there may be unintended consequences
 *
 * ## Conditions:
 *
 * 1. `createUseDisableImportedStyles` must called in global scope in the same tsx file as the imported css being targeted and the component to be lazy loaded
 * ```tsx
 * import React from 'react'
 * import { createUseDisableImportedStyles } from './useDisableImportedStyles'
 * import './global-styles.css'
 * const useDisableImportedStyles = createUseDisableImportedStyles()
 * export const CssComponent: React.FC<{}> = () => {
 *     useDisableImportedStyles()
 *     return null
 * }
 * export default CssComponent
 * ```
 *
 * 2. A component using this hook *should* be lazy loaded:
 * ```tsx
 * LazyCssComponent = React.lazy(() => import('./cssComponent'))
 * ...
 * <React.Suspense fallback={<></>}>
 *   {condition && <LazyCssComponent/>}
 * </React.Suspense>
 * ```
 * - An exception to lazy loading might be using this in a single, normal, non-lazy component so styles are loaded on first render
 * - NOTE: the `InitialCssComponent` never needs to actually render, it just needs to be imported
 * - BUT: this will only work if there is **one single** .css file imported globally, otherwise, I don't know what would happen
 * ```tsx
 * import InitialCssComponent  from './initialCssComponent'
 * LazyCssComponent = React.lazy(() => import('./cssComponent'))
 * ...
 * {false && <InitialCssComponent/>}
 * <React.Suspense fallback={<></>}>
 *   {condition && <LazyCssComponent/>}
 * </React.Suspense>
 * ```
 *
 * @param {boolean} immediatelyUnloadStyle
 * if true: immediately unloads the StyleSheet when the component is unmounted
 * if false: waits to unloads the StyleSheet until another instance of useDisableImportedStyles is called. This avoids a flash of unstyled content
 *
 */
export const createUseDisableImportedStyles = (
    immediatelyUnloadStyle: boolean = false
    // if true: immediately unloads the StyleSheet when the component is unmounted
    // if false: waits to unloads the StyleSheet until another instance of useDisableImportedStyles is called.This avoids a flash of unstyled content

): useDisableImportedStyles => {
    let localStyleSheet: CSSStyleSheet

    // if there are no stylesheets, you did something wrong...
    if (document.styleSheets.length < 1) return

    // set the localStyleSheet to the newest stylesheet added
    localStyleSheet = document.styleSheets[document.styleSheets.length - 1]

    // add .bpx-dark { --all-the-vars: var(--all-the-dark-vars); }
    addDarkMirrorToStyleSheet(localStyleSheet)

    // add it to the globally accessible list
    switchableGlobalStyleSheets.push(localStyleSheet)

    return () => {
        useEffect(() => {

            // if we are switching StyleSheets, disable all switchableGlobalStyleSheets
            if (!immediatelyUnloadStyle) {
                switchableGlobalStyleSheets.forEach(styleSheet => styleSheet.disabled = true)
            }

            // enable our StyleSheet!
            localStyleSheet.disabled = false

            // if we are NOT switching StyleSheets, disable this StyleSheet when the component is unmounted
            if (immediatelyUnloadStyle) return () => {
                if (localStyleSheet != null) localStyleSheet.disabled = true
            }

        })
    }
}
