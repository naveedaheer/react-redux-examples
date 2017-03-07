import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"

function mapStateToProps(state) {
    console.log("mapStateToProps", state);
    return {
        
        // counter - this will be component's property counter and can be accessed
        // as this.props.counter
        // state - this will be the state of redux, whatever value we return from
        // reducer function will be in state, for now we are sending simple numaric
        // value therefore it will be simple integer
        counter: state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({ type: 'INC' }),
        decrement: () => dispatch({ type: 'DEC' }),
        incrementAgain : function (){
          console.log("Incrementing value ");
          // any logic and come here

          // then return dispatch
          return dispatch({ type: 'INC' });
        }
    };
}

class App extends Component {
  render() {
    return(
<div><h1>React Redux App.js </h1>
<h2>{this.props.counter}</h2>
<h3>Events in App.js</h3>
    <button onClick={this.props.increment}>Increment</button><br />
    <button onClick={this.props.decrement}>Decrement</button><br />
    <button onClick={this.props.incrementAgain}>Increment Again</button><br />
</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
