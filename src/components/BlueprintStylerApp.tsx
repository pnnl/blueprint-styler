import React, { useEffect, useMemo, useState } from 'react';
import { FocusStyleManager, Classes, Button, AnchorButton, Collapse, HTMLSelect, Icon } from '@blueprintjs/core';
import { Link, useSearchParams } from "react-router-dom";
import { IBlueprintExampleData } from '../tags/types';
import { allExamples } from './allExamples';
import logo from '../assets/logo.svg';
import { changeStyle, defaultStyleName, styleManifest, styleOptions } from '../styles';
// import { styleSwitcherOptionProps, StyleSwitcher, ComponentLabel, styleManifest, styleSwitcherConfigNameInitial } from '../styles';


FocusStyleManager.onlyShowFocusOnTabs();

const DARK_THEME = Classes.DARK;
const LIGHT_THEME = "bp4-light"; // not a cannon blueprint class
const THEME_LOCAL_STORAGE_KEY = "blueprint-docs-theme";

/** Return the current theme className. */
export function getTheme(): string {
    return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || LIGHT_THEME;
}

/** Persist the current theme className in local storage. */
export function setTheme(theme: string) {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
}

function handleThemeChange(isDarkTheme: boolean, setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>) {
    setIsDarkTheme(!isDarkTheme)
    setTheme(isDarkTheme ? LIGHT_THEME : DARK_THEME)
};

function BlueprintStylerApp() {

    // nav
    const [openIndex, setOpenIndex] = useState(-1)

    // theme
    const [isDarkTheme, setIsDarkTheme] = useState(getTheme() === DARK_THEME) // isDarkTheme
    const data: IBlueprintExampleData = useMemo(() => ({ themeName: isDarkTheme ? DARK_THEME : LIGHT_THEME }), [isDarkTheme]) // { themeName: getTheme() }

    // style
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentStyle, setCurrentStyle] = useState<string>(styleManifest[defaultStyleName])
    useEffect(() => {
        const currentStyleName = searchParams.get('style') || defaultStyleName
        changeStyle(currentStyleName)
        setCurrentStyle(currentStyleName)
    }, [searchParams])

    return (
        <div className={["app-wrapper", data.themeName].join(' ')}>
            <div className="app">

                {/* <StyleSwitcher currentStyleSwitcherConfig={currentStyleSwitcherConfig} /> */}

                <section className="styler-menu">

                    <header className="styler-menu__header">

                        <h4
                            className={Classes.HEADING}
                            style={{ marginBottom: 32 }}
                        >
                            <a
                                href={'#'}
                                onClick={e => setSearchParams({})}
                                className="styler-menu__title-link"
                            >
                                <img src={logo} style={{ width: 80 }} alt="Blueprint Styler Logo" />
                                <span style={{ marginLeft: 16 }}>
                                    Blueprint<br />Styler
                                </span>
                            </a>
                        </h4>

                        <HTMLSelect
                            options={styleOptions}
                            onChange={e => setSearchParams({ style: e.target.value })}
                            value={currentStyle}
                            style={{ marginBottom: 8 }}
                            fill
                        />

                        <Button
                            rightIcon={isDarkTheme ? "flash" : "moon"}
                            text={isDarkTheme ? "Light theme" : "Dark theme"}
                            onClick={() => handleThemeChange(isDarkTheme, setIsDarkTheme)}
                            style={{ justifyContent: 'space-between', marginBottom: 8 }}
                            fill
                        />

                        {/* <div className="bp4-input-group" style={{ marginBottom: 16 }} >
                            <Icon icon="search" />
                            <input type="text" className="bp4-input" placeholder="Search" />
                        </div> */}

                    </header>

                    <nav className="styler-menu__nav">
                        <ul className={Classes.LIST_UNSTYLED}>
                            {allExamples.map(([componentGroupTitle, componentGroup], j: number) => (
                                <li key={j}>
                                    <Button
                                        icon={j === openIndex ? "caret-down" : "caret-right"}
                                        onClick={() => setOpenIndex((j === openIndex ? -1 : j))}
                                        className="styler-menu__group-button"
                                        text={componentGroupTitle}
                                        minimal
                                        fill
                                    />
                                    <Collapse isOpen={j === openIndex} >
                                        <ul className={Classes.LIST_UNSTYLED} style={{ paddingLeft: 24 }}>
                                            {componentGroup.map(([componentName, componentExamples], i: number) => (
                                                <li key={i}>
                                                    <AnchorButton
                                                        href={'#' + nameToId(componentName)}
                                                        text={componentName}
                                                        style={{ justifyContent: 'flex-start', marginBottom: 2 }}
                                                        minimal
                                                        fill
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
                            <strong>
                                <span>Produced by</span>{' '}
                                <a href={'https://www.pnnl.gov/'} {...linkProps} >
                                    PNNL
                                </a>
                                <span>{' '}&amp;{' '}</span>
                                <a href={'https://www.energy.gov/'} {...linkProps} >
                                    DOE
                                </a>
                            </strong>
                            <br />
                            <span>
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
                    <section>
                        <h1 className={`styler-section-header ${Classes.HEADING}`}>
                            Blueprint Styler
                        </h1>
                        <p>
                            Create custom global styles for{' '}
                            <a href="https://blueprintjs.com/docs/" {...linkProps} >
                                Blueprint js Components
                            </a>{' '}
                            using css{' '}
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" {...linkProps} >
                                <code>--custom-properties</code>
                            </a>
                        </p>
                        <p>
                            <a href={'https://github.com/pnnl/blueprint-styler'} {...linkProps} >
                                GitHub Repo
                            </a>
                            {' | '}
                            <a href={'https://www.npmjs.com/package/blueprint-styler'} {...linkProps} >
                                npm
                            </a>
                        </p>
                    </section>
                    {allExamples.map(([componentGroupTitle, componentGroup]) => (
                        <section key={componentGroupTitle}>
                            <h3 className={`styler-section-header ${Classes.HEADING}`}>
                                {componentGroupTitle}
                            </h3>
                            {componentGroup.map(([componentName, componentExamples]) => (
                                <div key={componentName} className="styler-component">
                                    <h4 id={nameToId(componentName)} className={`styler-component-header ${Classes.HEADING}`} >
                                        <Icon icon={"link"} />
                                        <a href={'#' + nameToId(componentName)} >{componentName}</a>
                                    </h4>
                                    {componentExamples.map(([ExampleComponent, exampleComponentClassName], i) => (
                                        <ExampleComponent
                                            key={exampleComponentClassName}
                                            id={exampleComponentClassName}
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

const nameToId = (name: string) => name.toLowerCase().replaceAll(/\s+/ig, '-')

export default BlueprintStylerApp;
