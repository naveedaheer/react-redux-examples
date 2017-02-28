import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from "./store/store"
import {Provider} from "react-redux"
import ActionTypes from "./store/actionTypes"

function handleIncrement(){
  store.dispatch(ActionTypes.incrementWithValue(5))
} 

function handleDecrement(){
  store.dispatch(ActionTypes.decrementWithValue(2))
} 

ReactDOM.render(

  //Wraping up in Provider
  <Provider store={store}>
  <div>
    <App/>
    <div>
      <h3>Events in Index.js</h3>
      <button onClick={()=>store.dispatch(ActionTypes.increment())} > PLUS 1</button><br />
      <button onClick={()=>store.dispatch(ActionTypes.decrement()) } > MINUS 1 </button><br />
      <button onClick={handleIncrement} > PLUS 5 with Handler</button><br />
      <button onClick={handleDecrement} > MINUS 2 with Handler</button><br />
    </div>
  </div>
  </Provider>
  ,
  document.getElementById('root')
);
