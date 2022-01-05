import React from 'react';

export type ComponentLabel = {
    Component: React.LazyExoticComponent<React.FC<{}>>
    label: string
}

export const styleManifest: {
    [key: string]: ComponentLabel
} = {
    DefaultVarsStyles: {
        Component: React.lazy(() => import('./_default-var-styles')),
        label: '--default-vars',
    },
    DefaultStyles: {
        Component: React.lazy(() => import('./_default-styles')),
        label: 'Default',
    },
    PnnlStyles: {
        Component: React.lazy(() => import('./_pnnl-v3-styles')),
        label: 'PNNL v3',
    },
    FlatStyles: {
        Component: React.lazy(() => import('./_flat-styles')),
        label: 'Flat',
    },
    IbmCarbonStyles: {
        Component: React.lazy(() => import('./_ibm-carbon-styles')),
        label: 'IBM Carbon',
    },
    AntdStyles: {
        Component: React.lazy(() => import('./_antd-styles')),
        label: 'Ant Design',
    },
    /* // add new styles here...
    ThemeNameStyles: {
        Component: React.lazy(() => import('./_{theme-name}-styles')),
        label: 'Theme Name',
    },
    */
}
