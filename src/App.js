import React from 'react';
import './App.css';
import './themes/blueprint-custom-theme.css';
import { Button } from '@blueprintjs/core'

function App() {
  return (
    <div className="App">
      <Button text="Hello World" />
      <Button text="Hello World" intent="primary" />
      <Button text="Hello World" minimal />
      <Button text="Hello World" intent="primary" minimal />
    </div>
  );
}

export default App;
