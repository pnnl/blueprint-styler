import React from 'react';
// import './App.css';
// import './themes/blueprint-custom-theme.css';
// import './components/components.css';
import { FocusStyleManager } from '@blueprintjs/core';
import { IBlueprintExampleData, reactExamples } from './tags/reactExamples';
import { allExamples } from './all-examples';

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
    const data: IBlueprintExampleData = {
        themeName: ""
    }

    return (
        <div className="App">
        {/* {Object.entries(reactExamples).map(([componentName, renderer]: [string, IExample]) => renderer.render )} // this doesn't work... */ }
          {allExamples.map((ExampleComponent, i)=>(
              <ExampleComponent key={i} id={ExampleComponent.name} data={data}/>
          ))}
    </div>
  );
}

export default App;
