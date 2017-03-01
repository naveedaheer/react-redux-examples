import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Header from "./Header"
import Body from "./Body"

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

export default Layout;
