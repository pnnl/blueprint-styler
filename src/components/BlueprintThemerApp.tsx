import React, { useState } from 'react';
// import './themes/blueprint-custom-theme.css';
// import './components/components.css';
import { FocusStyleManager, Classes, Button, AnchorButton, Collapse, HTMLSelect, IOptionProps } from '@blueprintjs/core';
import { IBlueprintExampleData } from '../tags/reactExamples';
import { allExamples } from './allExamples';
import { IExampleProps } from '@blueprintjs/docs-theme';
import logo from '../assets/logo.svg';

FocusStyleManager.onlyShowFocusOnTabs();

const DARK_THEME = Classes.DARK;
const LIGHT_THEME = "";
const THEME_LOCAL_STORAGE_KEY = "blueprint-docs-theme";

/** Return the current theme className. */
export function getTheme(): string {
    return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || LIGHT_THEME;
}

/** Persist the current theme className in local storage. */
export function setTheme(themeName: string) {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, themeName);
}

function handleThemeChange(themeState: BbTheme, setThemeState: React.Dispatch<React.SetStateAction<BbTheme>>) {
    setThemeState(themeState === BbTheme.Light ? BbTheme.Dark : BbTheme.Light)

    // document.root
    // const useDark = getTheme() === LIGHT_THEME;
    // const nextThemeName = useDark ? DARK_THEME : LIGHT_THEME;
    // setTheme(nextThemeName);
    // setHotkeysDialogProps({ className: nextThemeName });
    // this.setState({ themeName: nextThemeName });
};


const styleList: IOptionProps[] = [
    {
        value: './default-styles.css',
        label: 'Default Style'
    },
    {
        value: './new-styles.css',
        label: 'New Style!'
    }
]

function addStylerStyleSheet(optionProps: IOptionProps): HTMLLinkElement {
    // https://stackoverflow.com/a/577002/5648839
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = 'stylerStyleSheet';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = optionProps.value as string;
    link.media = 'all';
    head.appendChild(link);
    return link;
}
const stylerStyleSheet = addStylerStyleSheet(styleList[0])

function switchCss(styleSheetHref: string) {
    stylerStyleSheet.href = styleSheetHref
}

enum BbTheme {
    Light,
    Dark
}

function BlueprintThemerApp() {
    // const data: IBlueprintExampleData = { themeName: getTheme() }
    // const useDarkTheme = data.themeName === DARK_THEME;

    const [openIndex, setOpenIndex] = useState(-1)

    const [theme, setTheme] = useState(BbTheme.Light)
    const useDarkTheme = theme === BbTheme.Dark;
    const data: IBlueprintExampleData = { themeName: useDarkTheme ? DARK_THEME : LIGHT_THEME }


    return (
        <div className={["App", data.themeName].join(' ')}>

            <section className="themer-menu">

                <header className="themer-menu__header">

                    <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
                        <img src={logo} style={{ width: 104 }} />
                        <span style={{ marginLeft: 8 }}>
                            Blueprint<br />Themer
                        </span>
                    </h2>

                    <HTMLSelect fill options={styleList} style={{ marginBottom: 8 }} onChange={e => switchCss(e.target.value)} />

                    <Button
                        rightIcon={useDarkTheme ? "flash" : "moon"}
                        text={useDarkTheme ? "Light theme" : "Dark theme"}
                        onClick={e => handleThemeChange(theme, setTheme)}
                        className="bp3-fill"
                        // minimal
                        outlined
                        style={{ justifyContent: 'space-between', marginBottom: 8 }}
                    />

                    <div
                        className="bp3-input-group"
                        style={{ marginBottom: 16 }}
                    >
                        <input type="text" className="bp3-input" placeholder="Search" />
                        <span className="bp3-icon bp3-icon-search"></span>
                    </div>

                </header>

                <nav className="themer-menu__nav">
                    <ul className="bp3-list-unstyled">
                        {allExamples.map(([componentGroupTitle, componentGroup], j: number) => (
                            <li key={j}>
                                <Button
                                    minimal
                                    fill
                                    icon={j === openIndex ? "caret-down" : "caret-right"}
                                    onClick={() => setOpenIndex((j === openIndex ? -1 : j))}
                                    style={{ justifyContent: 'flex-start', marginBottom: 2 }}
                                >
                                    <b>{componentGroupTitle}</b>
                                </Button>
                                <Collapse isOpen={j === openIndex} >
                                    <ul className="bp3-list-unstyled" style={{ paddingLeft: 24 }}>
                                        {componentGroup.map(([componentName, componentExamples], i: number) => (
                                            <li key={i}>
                                                <AnchorButton
                                                    minimal
                                                    fill
                                                    href={'/#' + componentName}
                                                    text={componentName}
                                                    style={{ justifyContent: 'flex-start', marginBottom: 2 }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </Collapse>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* <footer className="themer-menu__footer"></footer> */}

            </section>

            <main className="themer-examples">
                {allExamples.map(([componentGroupTitle, componentGroup], k: number) => (
                    <section key={k}>
                        <h2>{componentGroupTitle}</h2>
                        {componentGroup.map(([componentName, componentExamples], j: number) => (
                            <div id={componentName} key={j}>
                                <h3>{componentName}</h3>
                                {componentExamples.map((
                                    ExampleComponent: React.ComponentClass<IExampleProps<IBlueprintExampleData>>,
                                    i: number
                                ) => (
                                        <ExampleComponent
                                            key={i}
                                            id={componentName + '-' + i}
                                            data={data}
                                        />
                                    ))}
                            </div>
                        ))}
                    </section>
                ))}
            </main>

        </div>
    );
}

export default BlueprintThemerApp;
