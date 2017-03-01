import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Title from "./Title" 
import AppBar from 'material-ui/AppBar';
//import RaisedButton from 'material-ui/RaisedButton';

// const style = {
//   margin: 12,
// };

class Layout extends Component {
  render() {
    return (
      <div>
        
        <AppBar Title="React-Redux ToDo App" style={{backgroundColor:"#26A69A" , minHeight:50}} titleStyle={{lineHeight:50}} > <center><h1 style={{color:"white"}}>Aheer Blood Bank</h1></center><h4 style={{color:"white"}}>By Naveed Aheer</h4> 
        Login<br />Signup
        </ AppBar>
        <Title />
      </div>
    )
  }
}

export default Layout;
