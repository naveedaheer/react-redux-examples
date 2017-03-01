import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import auth from "../database/dbFirebase"

const style = {
  margin: 12,
};

class App extends Component {

   handleSubmit = (e) => {
        e.preventDefault()
        this.props.getData({
            userFullName: this.userFullName.value,
            email: this.email.value,
            pass: this.pass.value,
            userMobile: this.userMobile.value,
            num: this.num.value
        })}
  
  render() {
    return (
      <div>
        <h4>Register</h4>
        <form onSubmit={this.handleSubmit}>
        <TextField
          ref="userFullName"
          floatingLabelText="Full Name" style={{ Color: "#4527A0" }} ref={(userFullName) => this.userFullName = userFullName} /><br />
        <TextField
          //ref="userEmail"
          floatingLabelText="Email" ref={(email) => this.email = email}  />
        <br />
        <TextField
          //ref="userMobile"
          
          floatingLabelText="User Mobile i.e 03001234678" type="number" ref={(userMobile) => this.userMobile = userMobile} /><br />
        <TextField
          //ref="userPassword"
          ref={(pass) => this.pass = pass}
          floatingLabelText="Password" type="password" /><br />
        <RaisedButton label="Register" disabled={false} style={style} primary={true} />
</form>
      </div>
    )
  }
}

export default App;
