import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from "redux";
import {Provider} from "react-redux"


function counter(value = 0, action) {
  switch (action.type) {
  case 'INC':
    return value + 1
  case 'DEC':
    return value - 3
  default:
    return value
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


function handleIncrement(){
  store.dispatch({type: "INC"})
} 

ReactDOM.render(

  //Wraping up in Provider
  <Provider store={store}>
  <div>
    <App/>
    <div>
      <button onClick={()=>store.dispatch({type: "INC"})} > PLUS </button><br />
      <button onClick={()=>store.dispatch({type: "DEC"}) } > MINUS </button><br />
      <button onClick={handleIncrement} > PLUS with Handler</button><br />
    </div>
  </div>
  </Provider>
  ,
  document.getElementById('root')
);
