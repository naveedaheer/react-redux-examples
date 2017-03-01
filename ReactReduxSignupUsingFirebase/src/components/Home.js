import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import TextField from 'material-ui/TextField';
//import Signup from "./Signup"
import Header from "./Header"
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Home extends Component {
  render() {
    return (
     <div>
        <Header />
    <center>
          <RaisedButton label="Receiver of Blood" disabled={false} style={style} primary={true} />
           <RaisedButton label="Donor of Blood" disabled={false} style={style} primary={false} secondary={true} />
</center>
     </div>
    )
  }
}

export default Home;
