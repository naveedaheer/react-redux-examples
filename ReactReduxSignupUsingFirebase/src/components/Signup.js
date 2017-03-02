import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import auth from "../database/dbFirebase"
import { Link } from 'react-router';
import { ref, firebaseAuth } from '../database/dbconfig'

const style = {
  margin: 12,
};


class Register extends Component {
    constructor() {
        super();
        this.handleDataSubmit = this.handleDataSubmit.bind(this);
    }
    handleDataSubmit(data) {
        return firebaseAuth().createUserWithEmailAndPassword(data.email, data.pass)
            .then((user) => {
                return ref.child(`users/${user.uid}`)
                    .set({
                        userFullName: this.userFullName.value,
            email: this.email.value,
            pass: this.pass.value,
            userMobile: this.userMobile.value,
            num: this.num.value
                    })
                    .then(() =>
                        this.props.router.push("/home"),
                    console.log("Yahhooooooooo", user)
                    )
            })
            .catch((error) => alert(error.message))
    }
    render() {
        return (
            <div className='commentBox'>
                <Form getData={this.handleDataSubmit} />
            </div>
        );
    }
}


class Form extends Component {

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
          
          floatingLabelText="Mobile i.e 03001234678" type="number" ref={(userMobile) => this.userMobile = userMobile} /><br />
        <TextField
          //ref="userPassword"
          ref={(pass) => this.pass = pass}
          floatingLabelText="Password" type="password" /><br />
        <RaisedButton type="submit" label="Register" disabled={false} style={style} primary={true} />
</form>
<Link to="/login">Login</Link>
      </div>
    )
  }
}

Register.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Register;
