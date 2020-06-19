import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import logo from "./logo.svg";
import "./App.css";

import { createStore } from 'redux';

const reducer = (state = { count: 100 }, action) => {
  console.log(action)

  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + action.value
      }
    default:
      return state
  }

}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {

  componentDidMount(){
    store.subscribe(() => this.forceUpdate())
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

const Header = () => {

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  );
}

const renderDescription = () => {
  const count = store.getState().count;
  const remainder = count % 5;
  const upToNext = 5 - remainder;
  return `The current count is less than ${count + upToNext}`;
};

const Counter = () => {
  return (
    <div className="Counter">
      <h3> {store.getState().count} </h3>
      <h3> {renderDescription()} </h3>
      <button onClick={() => store.dispatch({ type: 'ADD', value: -1 })} id='-1'> - </button>
      <button onClick={() => store.dispatch({ type: 'ADD', value: 1 })} id='+1'> + </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
