import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class App extends Component {
  render() {
    return (
        <div>
            <h4>Register</h4>
      <TextField
        ref="userFullName"
      floatingLabelText="Full Name" style={{Color:"#4527A0"}} /><br />
      <TextField
        ref="userEmail"
      floatingLabelText="Email" />
      <br />
      <TextField
        ref="userMobile"
      floatingLabelText="User Mobile i.e 03001234678" type="number" /><br />
      <TextField
        ref="userPassword"
      floatingLabelText="Password" type="password" /><br />
      <RaisedButton label="Register" disabled={false} style={style} primary={true} />
      
      </div>
    )
  }
}

export default App;
