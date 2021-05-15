import { OptionProps } from '@blueprintjs/core';
import React from 'react'
import FallbackStylesComponent from './_fallback-styles' // the scss in this one for the default

export type ComponentLabel = {
    Component: React.LazyExoticComponent<React.FC<{}>>
    label: string
}

export const styleSwitcherConfig: {
    [key: string]: ComponentLabel
} = {
    // add new styles here...
    DefaultStyleVars:{
        Component: React.lazy(() => import('./_default-var-styles')),
        label: '--default-vars',
    },
    DefaultVars:{
        Component: React.lazy(() => import('./_default-styles')),
        label: 'Default',
    },
    FlatStyles:{
        Component: React.lazy(() => import('./_flat-styles')),
        label: 'Flat',
    },
    IbmCarbonStyles:{
        Component: React.lazy(() => import('./_ibm-carbon-styles')),
        label: 'IBM Carbon',
    },
    AntdStyles:{
        Component: React.lazy(() => import('./_antd-styles')),
        label: 'Ant Design',
    },
}

// this must match the FallbackStylesComponent imported scss in ./_fallback-styles/styler-styles.scss
export const styleSwitcherConfigInitial = styleSwitcherConfig.DefaultStyleVars

export let styleSwitcherOptionProps: OptionProps[] = []
for (const [styleSetName, styleSet] of Object.entries(styleSwitcherConfig)) {
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
