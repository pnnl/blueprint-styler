import React from 'react';
import './App.css';
import './themes/blueprint-custom-theme.css';
import './components/components.css';
import Buttons from './components/Buttons';

import { FocusStyleManager } from "@blueprintjs/core";
FocusStyleManager.onlyShowFocusOnTabs();

function App() {
  return (
    <div className="App ">
      <Buttons />
    </div>
  );
}

export default App;
