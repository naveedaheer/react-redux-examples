import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"

function mapStateToProps(state) {
    return {
        // counter - this will be component's property counter and can be accessed
        // as this.props.counter
        // state - this will be the state of redux, whatever value we return from
        // reducer function will be in state, for now we are sending simple numaric
        // value therefore it will be simple integer
        counter: state,
    };
}

class App extends Component {
  render() {
    return(
<div><h1>React Redux App.js </h1>
<h2>{this.props.counter}</h2></div>
    );
  }
}

export default connect(mapStateToProps)(App);
