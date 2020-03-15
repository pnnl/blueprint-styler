import React from 'react';
// import './App.css';
// import './themes/blueprint-custom-theme.css';
// import './components/components.css';
import { FocusStyleManager, Classes, Button } from '@blueprintjs/core';
import { IBlueprintExampleData } from './tags/reactExamples';
import { allExamples } from './all-examples';
import { IExampleProps } from '@blueprintjs/docs-theme';
import { NavHeader } from './components/navHeader';

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

            {/* <NavHeader
                onToggleDark={this.handleToggleDark}
                useDarkTheme={this.state.themeName === DARK_THEME}
                useNextVersion={}
                packageData={this.getNpmPackage("@blueprintjs/core")}x
            /> */}
            <section>
                <header>
                    BlueprintJS Themer
                     <Button
                        icon={useDarkTheme ? "flash" : "moon"}
                        text={useDarkTheme ? "Light theme" : "Dark theme"}
                        onClick={handleToggleDark}
                    />
                </header>

                <nav>

                </nav>

                <footer>

                </footer>
            </section>
            <main className="examples-container">
                {allExamples.map((ExampleComponent: React.ComponentClass<IExampleProps<IBlueprintExampleData>>, i: number) => (
                    <ExampleComponent key={i} id={ExampleComponent.name} data={data} />
                ))}
            </main>
        </div>
    );
}

export default App;
