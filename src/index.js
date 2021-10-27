import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./components/home/Home";

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename="/stage" forceRefresh={true} >
        <App/>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);