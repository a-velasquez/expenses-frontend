import React from "react";
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'


class App extends React.Component {

  render() {
    return <div className="App">Accounts Component</div>;
  }
}

export default App;
