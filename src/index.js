import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "/src/app";

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename="/stage" forceRefresh={true} >
        <App/>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);