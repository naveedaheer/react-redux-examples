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
            <h4>Login</h4>
      <TextField
        ref="userEmail"
      floatingLabelText="Email" />
      <br />
      <TextField
        ref="userPassword"
      floatingLabelText="Password" type="password" /><br />
      <RaisedButton label="Login" disabled={false} style={style} primary={true} />
      
      </div>
    )
  }
}

export default App;
