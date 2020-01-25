import React from 'react';
import './App.css';
import './themes/blueprint-custom-theme.css';
import './components/components.css';
import { FocusStyleManager } from "@blueprintjs/core";
import Buttons from './components/Buttons';
import Callouts from './components/Callouts';
import Typography from './components/Typography';


FocusStyleManager.onlyShowFocusOnTabs();
function App() {
  return (
    <div className="App">
      <Buttons />
      <Callouts />
      <Typography />
    </div>
  );
}

export default App;
