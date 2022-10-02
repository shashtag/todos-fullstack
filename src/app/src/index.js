import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import UIProvider from "./Context/UIContext";

ReactDOM.render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

