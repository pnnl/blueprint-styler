import React from 'react';
// import './App.css';
// import './themes/blueprint-custom-theme.css';
// import './components/components.css';
import { FocusStyleManager } from '@blueprintjs/core';
import { IBlueprintExampleData, reactExamples } from './tags/reactExamples';
import { allExamples } from './all-examples';
import { IExample, ReactExampleTagRenderer, IExampleProps } from '@blueprintjs/docs-theme';
// import { ButtonsExample } from './examples/core-examples';
import { getTheme } from './components/blueprintDocs';
import * as CoreExamples from "./examples/core-examples";


FocusStyleManager.onlyShowFocusOnTabs();

const reactExample = new ReactExampleTagRenderer(reactExamples);


function App() {
    const data: IBlueprintExampleData = {
        themeName: getTheme()
    }
    return (
        <div className="App">
          {allExamples.map((ExampleComponent:React.ComponentClass<IExampleProps<IBlueprintExampleData>>, i:number)=>(
              <ExampleComponent key={i} id={ExampleComponent.name} data={data}/>
          ))}
    </div>
  );
}

export default App;
