import React, { useEffect, useMemo, useState } from 'react';
import { FocusStyleManager, Classes, Button, AnchorButton, Collapse, HTMLSelect, Dialog, Divider } from '@blueprintjs/core';
import { IBlueprintExampleData } from '../tags/types';
import { allExamples } from './allExamples';
import logo from '../assets/logo.svg';
import { styleSwitcherOptionProps, StyleSwitcher, ComponentLabel, styleManifest, styleSwitcherConfigInitial } from '../styles';

FocusStyleManager.onlyShowFocusOnTabs();

const DARK_THEME = Classes.DARK;
const LIGHT_THEME = "bp3-light"; // not a cannon blueprint class
const THEME_LOCAL_STORAGE_KEY = "blueprint-docs-theme";

/** Return the current theme className. */
export function getTheme(): string {
    return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || LIGHT_THEME;
}

/** Persist the current theme className in local storage. */
export function setTheme(theme: string) {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
}

function handleThemeChange(themeState: string, setThemeState: React.Dispatch<React.SetStateAction<string>>) {
    const setToTheme = themeState === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    setThemeState(setToTheme)
    setTheme(setToTheme)
};

function BlueprintStylerApp() {

    // nav
    const [openIndex, setOpenIndex] = useState(-1)

    // theme
    const [theme, setTheme] = useState(getTheme())
    const useDarkTheme = theme === DARK_THEME;
    const data: IBlueprintExampleData = useMemo(() => ({ themeName: useDarkTheme ? DARK_THEME : LIGHT_THEME }), [useDarkTheme]) // { themeName: getTheme() }
    useEffect(() => {
        const notThemeName = data.themeName === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
        document.documentElement.classList.add(data.themeName)
        document.documentElement.classList.remove(notThemeName)
    }, [data])

    // style
    const [currentStyleSwitcherConfig, setCurrentStyleSwitcherConfig] = useState<ComponentLabel>(styleSwitcherConfigInitial)

    return (
        <div className={["app-wrapper", data.themeName].join(' ')}>
            <div className="app">

                <StyleSwitcher currentStyleSwitcherConfig={currentStyleSwitcherConfig} />

                <section className="styler-menu">

                    <header className="styler-menu__header">

                        <h3
                            className={Classes.HEADING}
                            style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
                            <img src={logo} style={{ width: 80 }} alt="Blueprint Styler Logo" />
                            <span style={{ marginLeft: 16 }}>
                                Blueprint<br />Styler
                            </span>
                        </h3>

                        <HTMLSelect
                            options={styleSwitcherOptionProps}
                            onChange={e => setCurrentStyleSwitcherConfig(styleManifest[e.target.value])}
                            style={{ marginBottom: 8 }}
                            fill
                            minimal
                        />

                        <Button
                            rightIcon={useDarkTheme ? "flash" : "moon"}
                            text={useDarkTheme ? "Light theme" : "Dark theme"}
                            onClick={() => handleThemeChange(theme, setTheme)}
                            style={{ justifyContent: 'space-between', marginBottom: 8 }}
                            fill
                            minimal
                        />

                        {/* <div
                            className="bp3-input-group"
                            style={{ marginBottom: 16 }}
                        >
                            <Icon icon="search" />
                            <input type="text" className="bp3-input" placeholder="Search" />
                        </div> */}

                    </header>

                    <nav className="styler-menu__nav">
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
                                                        href={'#' + componentName}
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

                    <footer className="styler-menu__footer">
                        <small>
                            <span>Produced by</span>{' '}
                            <a href={'https://www.pnnl.gov/'} {...linkProps} >
                                PNNL
                            </a>
                            <span>{' '}&amp;{' '}</span>
                            <a href={'https://www.energy.gov/'} {...linkProps} >
                                DOE
                            </a>
                            <br />
                            <span className="styler-menu__footer-references">
                                <a href={'https://github.com/pnnl/blueprint-styler'} {...linkProps} >
                                    GitHub
                                </a>
                                {' | '}
                                <a href={'https://blueprintjs.com/docs'} {...linkProps} >
                                    Blueprint Docs
                                </a>
                            </span>
                        </small>
                    </footer>

                </section>

                <main className="styler-examples">
                    {allExamples.map(([componentGroupTitle, componentGroup]) => (
                        <section key={componentGroupTitle}>
                            <h3 className={`styler-section-header ${Classes.HEADING}`}>
                                {componentGroupTitle}
                            </h3>
                            {componentGroup.map(([componentName, componentExamples]) => (
                                <div key={componentName} className="styler-component">
                                    <h4 id={componentName} className={`styler-component-header ${Classes.HEADING}`} >
                                        {componentName}
                                    </h4>
                                    {componentExamples.map((ExampleComponent, i) => (
                                        <ExampleComponent
                                            key={componentName + '-' + i}
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
        </div >
    );
}

const linkProps = {
    target: "_blank",
    rel: "noreferrer onopener",
}

export default BlueprintStylerApp;
