import { OptionProps } from '@blueprintjs/core';
import '../styles/_static-styles/styler-styles.scss';
import '../styles/_default-var-styles/styler-styles.scss';
import '../styles/_flat-styles/styler-styles.scss';
import '../styles/_ibm-carbon-styles/styler-styles.scss';
import '../styles/_antd-styles/styler-styles.scss';
// import '../styles/_fluent-styles/styler-styles.scss';
// import '../styles/_pnnl-v3-styles/styler-styles.scss';
import { addDarkMirrorToStyleSheet, getAllStyleSheets } from './createDarkMirrorStyles';

export const styleManifest: Record<string, string> = {
    'Default': 'bpx-default',
    'Flat': 'bpx-flat',
    'IBM Carbon': 'bpx-carbon',
    'Ant Design': 'bpx-antd',
    // 'Microsoft Fluent (beta)': 'bpx-fluent',
    // 'PNNL v3 (beta)': 'bpx-pnnl',
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
    getAllStyleSheets()
        // Array.from(document.styleSheets)
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
