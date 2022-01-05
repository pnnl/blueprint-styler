import { OptionProps } from '@blueprintjs/core';
import React from 'react'
import FallbackStylesComponent from './_fallback-styles' // the scss in this one for the default
import { ComponentLabel, styleManifest } from './style-manifest';

export * from './style-manifest';

// this must match the FallbackStylesComponent imported scss in ./_fallback-styles/styler-styles.scss
export const styleSwitcherConfigNameInitial: keyof typeof styleManifest = 'DefaultStyleVars'

export let styleSwitcherOptionProps: OptionProps[] = []
for (const [styleSetName, styleSet] of Object.entries(styleManifest)) {
    styleSwitcherOptionProps.push({
        value: styleSetName,
        label: styleSet.label
    })
}

// https://prawira.medium.com/react-conditional-import-conditional-css-import-110cc58e0da6
export type StyleSwitcherProps = {
    currentStyleSwitcherConfig?: ComponentLabel
}
export const StyleSwitcher: React.FC<StyleSwitcherProps> = ({ currentStyleSwitcherConfig: currentStyleConfig }) => {
    const CurrentStyleComponent: React.FC = currentStyleConfig?.Component
    return (<>
        {/* just importing FallbackStylesComponent is good enough, even if it never actually renders */}
        {currentStyleConfig == null && <FallbackStylesComponent />}
        <React.Suspense fallback={<></>}>
            {currentStyleConfig != null && <CurrentStyleComponent />}
        </React.Suspense>
    </>)
}
