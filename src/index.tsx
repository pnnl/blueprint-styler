import { HotkeysProvider } from '@blueprintjs/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BlueprintStylerApp from './components/BlueprintStylerApp';
import reportWebVitals from './reportWebVitals';

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <HotkeysProvider>
            <BrowserRouter>
                <BlueprintStylerApp />
            </BrowserRouter>
        </HotkeysProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReactDOM.render(
//     <BlueprintStylerApp />,
//     // <BlueprintDocs defaultPageId="blueprint" docs={docsData} tagRenderers={tagRenderers} useNextVersion={false} />,
//     document.querySelector("#blueprint-styler"),
// );
