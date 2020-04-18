import React from 'react';
// import './themes/blueprint-custom-theme.css';
// import './components/components.css';
import { FocusStyleManager, Classes, Button, AnchorButton, Collapse } from '@blueprintjs/core';
import { IBlueprintExampleData } from './tags/reactExamples';
import { allExamples } from './all-examples';
import { IExampleProps } from '@blueprintjs/docs-theme';
import { NavHeader } from './components/navHeader';
import logo from './assets/logo.svg'; // setup TS import of svg

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

function handleToggleDark() {
    const useDark = getTheme() === LIGHT_THEME;
    const nextThemeName = useDark ? DARK_THEME : LIGHT_THEME;
    setTheme(nextThemeName);
    // setHotkeysDialogProps({ className: nextThemeName });
    // this.setState({ themeName: nextThemeName });
};

function App() {
    const data: IBlueprintExampleData = { themeName: getTheme() }
    const useDarkTheme = data.themeName === DARK_THEME;
    return (
        <div className={["App", data.themeName].join(' ')}>

            <section className="themer-menu">

                <img src={logo} />

                <header className="themer-menu__header">
                    BlueprintJS Themer
                     <Button
                        icon={useDarkTheme ? "flash" : "moon"}
                        text={useDarkTheme ? "Light theme" : "Dark theme"}
                        onClick={handleToggleDark}
                    />
                </header>

                <nav className="themer-menu__nav">
                    <ul className="bp3-list-unstyled">
                        {allExamples.map(([componentGroupTitle, componentGroup], j: number) => (
                            <li key={j}>
                                <Button minimal rightIcon="caret-down" onClick={e => console.log(e)}>
                                    <b>{componentGroupTitle}</b>
                                </Button>
                                <Collapse isOpen={true} >
                                    <ul className="bp3-list-unstyled">
                                        {componentGroup.map(([componentName, componentExamples], i: number) => (
                                            <li key={i}>
                                                <AnchorButton minimal href={'/#' + componentName} text={componentName} />
                                            </li>
                                        ))}
                                    </ul>
                                </Collapse>
                            </li>
                        ))}
                    </ul>
                </nav>

                <footer className="themer-menu__footer">

                </footer>

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

export default App;
