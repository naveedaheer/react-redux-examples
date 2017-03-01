import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Header from "./Header"
import Body from "./Body"
import ActionTypes from "../store/ActionTypes"
import {connect} from ""


function mapStateToProps(state) {
    return {
        todoState: state.Reducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (todoText) => dispatch(ActionTypes.addTodo(todoText))
    };
}

class Layout extends Component {
  render() {
    return (
      <div>
       <Header />
       <Body />
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);
