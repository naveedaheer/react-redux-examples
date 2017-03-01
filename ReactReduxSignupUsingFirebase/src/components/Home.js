import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import TextField from 'material-ui/TextField';
//import Signup from "./Signup"
//import Header from "./Header"
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Home extends Component {
  render() {
    return (
     <div>
        
         <RaisedButton label="Default" style={{margin:12, backgroundColor: "green"}} />
          <RaisedButton label="Register" disabled={false} style={style} primary={true} />
           <RaisedButton label="Register" disabled={false} style={style} primary={true} />

     </div>
    )
  }
}

export default Home;
