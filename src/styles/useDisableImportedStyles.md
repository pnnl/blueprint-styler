# How to Disable Imported Css files in a React App
primary answer: https://stackoverflow.com/questions/48047362/how-to-remove-imported-css-in-reactjs
other answers:
- https://stackoverflow.com/questions/46835825/conditional-css-in-create-react-app
- https://stackoverflow.com/questions/39406667/how-to-remove-unimport-inline-css-with-webpack
- https://stackoverflow.com/questions/49683571/clear-imported-css
- https://stackoverflow.com/questions/58312066/is-it-possible-to-unload-dynamic-css-imports-in-react
- https://stackoverflow.com/questions/48429004/how-to-remove-imported-css-in-create-react-app

I found a (sort of) reasonable way to do this in React. In short, you can [lazy-load React components](https://reactjs.org/docs/code-splitting.html#reactlazy) that contain the `import './style.css'`, and when it loads, you can capture the imported [StyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet) to toggle its [StyleSheet.disabled](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/disabled) property later.

Here's the main code, with more explanation below. Here's my [Gist](https://gist.github.com/arniebradfo/dc1dcb0793108cfc4cfca).

### `useDisableImportedStyles.tsx`
```ts
import { useEffect } from 'react'

// global list of all the StyleSheets that are touched in useDisableImportedStyles
const switchableGlobalStyleSheets: StyleSheet[] = []

// just to clarify what createUseDisableImportedStyles() returns
type useDisableImportedStyles = () => void

export const createUseDisableImportedStyles = (
    immediatelyUnloadStyle: boolean = true
    // if true: immediately unloads the StyleSheet when the component is unmounted
    // if false: waits to unloads the StyleSheet until another instance of useDisableImportedStyles is called.This avoids a flash of unstyled content
): useDisableImportedStyles => {
    let localStyleSheet: StyleSheet
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
```

**WARNING:** This is pretty finicky. You must set this up exactly or there may be unintended consequences

### Conditions:

1. `createUseDisableImportedStyles` must called in global scope in the same tsx file as the imported css being targeted and the component to be lazy loaded
```tsx
import React from 'react'
import { createUseDisableImportedStyles } from './useDisableImportedStyles'
import './global-styles.css'
const useDisableImportedStyles = createUseDisableImportedStyles()
export const CssComponent: React.FC<{}> = () => {
    useDisableImportedStyles()
    return null
}
export default CssComponent
```

2. A component using this hook *should* be lazy loaded:
```tsx
LazyCssComponent = React.lazy(() => import('./cssComponent'))
...
<React.Suspense fallback={<></>}>
    {condition && <LazyCssComponent/>}
</React.Suspense>
```

3. An exception to lazy loading might be using this in a single, normal, non-lazy component so styles are loaded on first render
- NOTE: the `InitialCssComponent` never needs to actually render, it just needs to be imported
- BUT: this will only work if there is **one single** .css file imported globally, otherwise, I don't know what would happen

```tsx
import InitialCssComponent  from './initialCssComponent'
LazyCssComponent = React.lazy(() => import('./cssComponent'))
//...
{false && <InitialCssComponent/>}
<React.Suspense fallback={<></>}>
    {condition && <LazyCssComponent/>}
</React.Suspense>
```

**GOOD LUCK!**
