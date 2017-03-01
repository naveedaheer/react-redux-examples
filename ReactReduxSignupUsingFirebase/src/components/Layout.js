import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import TextField from 'material-ui/TextField';
import Signup from "./Signup"
import Header from "./Header"

class App extends Component {
  render() {
    return (
     <div>
         <Header />
         <center>
<Signup />
</ center>
     </div>
    )
  }
}

export default App;
