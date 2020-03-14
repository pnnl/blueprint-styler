import React from 'react';
import './App.css';
import './themes/blueprint-custom-theme.css';
import './components/components.css';
import { ButtonsExample } from './core-examples';
import { FocusStyleManager } from '@blueprintjs/core';


FocusStyleManager.onlyShowFocusOnTabs();
function App() {
  return (
    <div className="App">
      <ButtonsExample />
    </div>
  );
}

export default App;
