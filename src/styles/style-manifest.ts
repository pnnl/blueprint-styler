import { OptionProps } from '@blueprintjs/core';
import { addDarkMirrorToStyleSheet, getAllStyleSheets } from './createDarkMirrorStyles';
import '../styles/_blueprint/styler-styles.scss';
import '../styles/_flat/styler-styles.scss';
import '../styles/_carbon/styler-styles.scss';
import '../styles/_antd/styler-styles.scss';
import '../styles/_fluent/styler-styles.scss';
import '../styles/_pnnl/styler-styles.scss';
import '../styles/_bpv3/styler-styles.scss';
import '../styles/static/styler-styles.scss';

export const styleManifest = {
    'bpx-default': { label: 'Blueprint Default', link: 'https://blueprintjs.com/docs/#blueprint' },
    'bpx-flat': { label: 'Flat', link: undefined },
    'bpx-carbon': { label: 'IBM Carbon', link: 'https://carbondesignsystem.com/components/overview/' },
    'bpx-antd': { label: 'Ant Design', link: 'https://ant.design/components/overview/' },
    'bpx-fluent': { label: 'Microsoft Fluent (beta)', link: 'https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html' },
    'bpx-pnnl': { label: 'PNNL v3 (beta)', link: 'https://forgedev.pnnl.gov/prc3/' },
    'bpx-bpv3': { label: 'Blueprint v3', link: 'https://blueprintjs.com/docs/versions/3/' },
    'bpx-static': { label: 'Static (original css)', link: 'https://blueprintjs.com/docs/#blueprint' },
}
export const defaultStyleName: keyof typeof styleManifest = 'bpx-default';
export const styleOptions: OptionProps[] = Object.entries(styleManifest).map(([styleName, config]) => ({ label: config.label, value: styleName }))

export const changeStyle = (newStyleName: string = defaultStyleName) => {
    styleOptions.forEach(({ value: styleName }) => {
        document.documentElement.classList.remove(styleName as string)
    })
    document.documentElement.classList.add(newStyleName)
}

export const createDarkMirrors = () => {
    // Array.from(document.styleSheets)
    getAllStyleSheets()
        .forEach((styleSheet, i) => {
            // console.log(styleSheet.ownerNode);

            const ownerNode = styleSheet.ownerNode as HTMLStyleElement
            const styleClassName = `bpx-style-${i + 1}`;
            ownerNode.classList.add(styleClassName, 'bpx-original-style')

            // create a new styleSheet for dark mirror
            const darkMirrorStyleElement = document.createElement('style')
            darkMirrorStyleElement.classList.add(styleClassName, `bpx-dark-mirror`); // [`dark-mirror`, styleClassName].join(' ')
            document.head.appendChild(darkMirrorStyleElement)
            // const darkMirrorStyleSheet = darkMirrorStyleElement.sheet

            const updateDarkMirrorStyleSheet = () => {
                // add .bpx-dark { --all-the-vars: var(--all-the-dark-vars); }
                addDarkMirrorToStyleSheet(styleSheet, darkMirrorStyleElement)
            }
            updateDarkMirrorStyleSheet()
            const observer = new MutationObserver(updateDarkMirrorStyleSheet)
            observer.observe(styleSheet.ownerNode, { childList: true })
        })
}

createDarkMirrors()
