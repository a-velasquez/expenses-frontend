import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-redux';
import { Provider } from 'react-redux';


// set up store

import App from "./App";


ReactDOM.render(
    <App />,
  document.getElementById("root")
);