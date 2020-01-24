import React from 'react';
import './App.css';
import './themes/blueprint-custom-theme.css';
import './components/components.css';
import Buttons from './components/Buttons';

import { FocusStyleManager } from "@blueprintjs/core";
import Callouts from './components/Callouts';
FocusStyleManager.onlyShowFocusOnTabs();

function App() {
  return (
    <div className="App ">
      <Buttons />
      <Callouts />
    </div>
  );
}

export default App;
