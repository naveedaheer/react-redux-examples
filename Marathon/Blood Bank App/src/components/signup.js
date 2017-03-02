import React, { Component } from 'react'
import { ref, firebaseAuth } from '../database/dbconfig'
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
                        email: user.email,
                        uid: user.uid,
                        name: data.username,
                        num: data.num
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
            email: this.email.value,
            //pass: this.pass.value,
            pass: (this.refs.pass).value,
            username: this.username.value,
            num: this.num.value
        })
    }
    render() {
        return (
            <div >
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                       <TextField
          //ref="userEmail"
          defaultValue="abc@gmail.com"
          floatingLabelText="Email" ref={(email) => this.email = email}  />
        <br />
<TextField
          //ref="userPassword"
         // ref="pass"
         ref={(pass) => this.pass = pass}
         //ref ={ (pass)=>this.refs.pass.getValue() = pass}
         defaultValue="12345678"
          floatingLabelText="Password" type="password" /><br />
                    <TextField
          ref="userFullName"
          defaultValue="Aheer"
          floatingLabelText="Full Name" style={{ Color: "#4527A0" }}  ref={(username) => this.username = username} /><br />
                    <TextField
          //ref="userMobile"
          defaultValue="0300123456789"
          floatingLabelText="Mobile i.e 03001234678" ref={(num) => this.num = num} /><br />
                    <RaisedButton label="Register" type="submit" onClick={this.handleSubmit.bind(this)} disabled={false} style={style} primary={true} />
                    {/*<button type="submit" className="btn btn-primary">Register</button>*/}
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
