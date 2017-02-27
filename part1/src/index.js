import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
  case 'INC':
    return state + 1
  case 'DEC':
    return state - 3
  default:
    return state
  }
}

let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INC' })
// 1
store.dispatch({ type: 'INC' })
// 2
store.dispatch({ type: 'DEC' })
// 1
store.dispatch({ type: 'INC' })
store.dispatch({ type: 'DEC' })


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
