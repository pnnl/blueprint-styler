import React from 'react';
// import './App.css';
// import './themes/blueprint-custom-theme.css';
// import './components/components.css';
import { FocusStyleManager } from '@blueprintjs/core';
import { IBlueprintExampleData } from './tags/reactExamples';
import { allExamples } from './all-examples';


FocusStyleManager.onlyShowFocusOnTabs();

function App() {
    const data: IBlueprintExampleData = {
        themeName: ""
    }
    return (
      <div className="App">
          {allExamples.map((ExampleComponent, i)=>(
              <ExampleComponent key={i} id={ExampleComponent.name} data={data}/>
          ))}
    </div>
  );
}

export default App;
