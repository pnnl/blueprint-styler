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

export const styleManifest: Record<string, string> = {
    'Blueprint Default': 'bpx-default',
    'Flat': 'bpx-flat',
    'IBM Carbon': 'bpx-carbon',
    'Ant Design': 'bpx-antd',
    'Microsoft Fluent (beta)': 'bpx-fluent',
    'PNNL v3 (beta)': 'bpx-pnnl',
    'Blueprint v3': 'bpx-bpv3',
    'Static (original css)': 'bpx-static',
}
export const defaultStyleName: keyof typeof styleManifest = 'Default';
export const styleOptions: OptionProps[] = Object.entries(styleManifest).map(([label, value]) => ({ label, value }))

export const changeStyle = (styleName: string = defaultStyleName) => {
    styleOptions.forEach(({ value }) => {
        document.documentElement.classList.remove(value as string)
    })
    document.documentElement.classList.add(styleName)
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
            const darkMirrorStyleSheet = darkMirrorStyleElement.sheet

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
