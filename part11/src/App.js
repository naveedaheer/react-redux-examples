import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import ActionTypes from "./store/actionTypes"
import Counter from "./components/counter"

function mapStateToProps(state) {
    return {
        // counter - this will be component's property counter and can be accessed
        // as this.props.counter
        // state - this will be the state of redux, whatever value we return from
        // reducer function will be in state, for now we are sending simple numaric
        // value therefore it will be simple integer
        //counter: state,
        plusCounter: state.incrementCounter.incrementState,
        minusCounter: state.decrementCounter.decrementState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(ActionTypes.increment()),
        decrement: () => dispatch(ActionTypes.decrement()),
        //plusWithValue: ()=> dispatch({type: "PLUS_WITH_VALUE", val:10}),
        minusWithValue: ()=> dispatch(ActionTypes.decrementWithValue(5)),

        plusWithValue: function(value){
            return dispatch(ActionTypes.incrementWithValue(value))
        },

        plusWithValue10: function(){
            return dispatch(ActionTypes.incrementWithValue(10))
        }

        // incrementAgain : function (){
        //   console.log("Incrementing value ");
        //   // any logic and come here

        //   // then return dispatch
        //   return dispatch({ type: 'INC' });
        // }

    };
}

class App extends Component {
  constructor(){
      super()
      this.state = {
          counterValue: "",
          buttonValue: '',
          buttonState: ""
      }
      this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event){
      this.setState({counterValue: parseInt(event.target.value),
      buttonValue: (event.target.value),
    buttonState: "" })
  }

  handleClick(){
      this.props.plusWithValue(this.state.counterValue)
  }

  render() {
    return(
<div><hr /><h1>React Redux App.js </h1>
<Counter counter={this.props.plusCounter + this.props.minusCounter} /><hr />
<h2>{this.props.plusCounter + this.props.minusCounter}</h2><hr /><hr />
<h3>Events in App.js</h3>
<input type="number" onChange={this.changeValue} />
    <button onClick={this.handleClick.bind(this)} disabled={!this.state.counterValue} > Plus {this.state.buttonValue} </button><br />
    <button onClick={this.props.increment}>Increment 1</button><br />
    <button onClick={this.props.decrement}>Decrement 1</button><br />
    <button onClick={this.props.plusWithValue10} >Increment 10</button><br />
    <button onClick={this.props.minusWithValue}>Decrement 5</button><br />
    {/*<button onClick={this.props.incrementAgain}>Increment Again</button><br />*/}
<hr /></div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
