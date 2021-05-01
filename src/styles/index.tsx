import { OptionProps } from '@blueprintjs/core';
import React from 'react'

export type ComponentLabel = {
    Component: React.LazyExoticComponent<React.FC<{}>>
    label: string
}

export const styleSetConfig: {
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

export let styleOptionProps: OptionProps[] = []
for (const [styleSetName, styleSet] of Object.entries(styleSetConfig)) {
    styleOptionProps.push({
        value: styleSetName,
        label: styleSet.label
    })
}
