import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import RaisedButton from 'material-ui/RaisedButton';
import Title from "./Title" 
import AppBar from 'material-ui/AppBar';


class Layout extends Component {
  render() {
    return (
      <div>
        
        <AppBar Title="React-Redux ToDo App" style={{backgroundColor:"#aa00ff" , minHeight:50}} titleStyle={{lineHeight:50}} > <center><h1 style={{color:"white"}}>React-Redux ToDo App</h1></center> </ AppBar>
        <Title />
      </div>
    )
  }
}

export default Layout;
