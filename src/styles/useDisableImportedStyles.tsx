import { useEffect } from 'react'
import { addDarkMirrorToStyleSheet } from './createDarkMirrorStyles'

// global list of all the StyleSheets that are touched in useDisableImportedStyles
export const switchableGlobalStyleSheets: CSSStyleSheet[] = []
export const switchableDarkMirrorStyleSheets: CSSStyleSheet[] = []

// just to clarify what createUseDisableImportedStyles() returns
type useDisableImportedStyles = () => void

// WARNING: this thing kinda crazy. More info in ./useDisableImportedStyles.md
export const createUseDisableImportedStyles = (
    immediatelyUnloadStyle: boolean = false
    // if true: immediately unloads the StyleSheet when the component is unmounted
    // if false: waits to unloads the StyleSheet until another instance of useDisableImportedStyles is called.This avoids a flash of unstyled content

): useDisableImportedStyles => {

    // if there are no stylesheets, you did something wrong...
    if (document.styleSheets.length < 1)
        return() => { useEffect(() => { }, []) }

    // set the localStyleSheet to the newest stylesheet added
    const localStyleSheet = document.styleSheets[document.styleSheets.length - 1]

    // create a new styleSheet for dark mirror
    const darkMirrorStyleElement = document.createElement('style')
    darkMirrorStyleElement.className = 'dark-mirror'
    document.head.appendChild(darkMirrorStyleElement)
    const darkMirrorStyleSheet = darkMirrorStyleElement.sheet

    // add .bpx-dark { --all-the-vars: var(--all-the-dark-vars); }
    addDarkMirrorToStyleSheet(localStyleSheet, darkMirrorStyleSheet)

    // add it to the globally accessible list
    switchableGlobalStyleSheets.push(localStyleSheet)
    switchableDarkMirrorStyleSheets.push(darkMirrorStyleSheet)

    return () => {
        useEffect(() => {

            // if we are switching StyleSheets, disable all switchableGlobalStyleSheets
            if (!immediatelyUnloadStyle) {
                switchableGlobalStyleSheets.forEach(styleSheet => styleSheet.disabled = true)
                switchableDarkMirrorStyleSheets.forEach(styleSheet => styleSheet.disabled = true)
            }

            // enable our StyleSheet!
            localStyleSheet.disabled = false
            darkMirrorStyleSheet.disabled = false

            // if we are NOT switching StyleSheets, disable this StyleSheet when the component is unmounted
            if (immediatelyUnloadStyle) return () => {
                if (localStyleSheet != null) localStyleSheet.disabled = true
                if (darkMirrorStyleSheet != null) darkMirrorStyleSheet.disabled = true
            }

        })
    }
}
