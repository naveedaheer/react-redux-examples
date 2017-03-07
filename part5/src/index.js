import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from "./store/store"
import {Provider} from "react-redux"

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INC' })
// // 1
// store.dispatch({ type: 'INC' })
// // 2
// store.dispatch({ type: 'DEC' })
// // 1
// store.dispatch({ type: 'INC' })
// store.dispatch({ type: 'DEC' })

// function handleIncrement(){
//   store.dispatch({type: "INC"})
// } 

ReactDOM.render(

  //Wraping up in Provider
  <Provider store={store}>
  <div>
    <App/>
    {/*<div>
      <h3>Events in Index.js</h3>
      <button onClick={()=>store.dispatch({type: "INC"})} > PLUS 1</button><br />
      <button onClick={()=>store.dispatch({type: "DEC"}) } > MINUS 1 </button><br />
      <button onClick={handleIncrement} > PLUS with Handler</button><br />
    </div>*/}
  </div>
  </Provider>
  ,
  document.getElementById('root')
);
