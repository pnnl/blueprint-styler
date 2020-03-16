import React from 'react';
// import './themes/blueprint-custom-theme.css';
// import './components/components.css';
import { FocusStyleManager, Classes, Button, AnchorButton } from '@blueprintjs/core';
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

            <section className="themer-menu">

                <header>
                    BlueprintJS Themer
                     <Button
                        icon={useDarkTheme ? "flash" : "moon"}
                        text={useDarkTheme ? "Light theme" : "Dark theme"}
                        onClick={handleToggleDark}
                    />
                </header>

                <nav>
                    {allExamples.map((ExampleComponent: React.ComponentClass<IExampleProps<IBlueprintExampleData>>, i: number) => (
                        <AnchorButton minimal key={i} href={'/#' + ExampleComponent.name} text={ExampleComponent.name} />
                    ))}
                </nav>

                <footer>

                </footer>

            </section>

            <main className="themer-examples">
                {allExamples.map((ExampleComponent: React.ComponentClass<IExampleProps<IBlueprintExampleData>>, i: number) => (
                    <div id={ExampleComponent.name}>
                        <h3>{ExampleComponent.name}</h3>
                        <ExampleComponent key={i} id={ExampleComponent.name} data={data} />
                    </div>
                ))}
            </main>

        </div>
    );
}

export default App;
