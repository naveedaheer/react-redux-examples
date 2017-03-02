import React, { Component } from 'react'
import { signIn } from '../store/action/auth'
import { connect } from 'react-redux'
import { DBfirebase } from '../database/DBfirebase'

import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.signin = this.signin.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    signin(e) {
        e.preventDefault()
        DBfirebase.customLogin(this.state)
            .then((user) => {
                this.props.signInUser(user)
                localStorage.setItem('currentUser', user.uid);
                this.context.router.push({
                    pathname: '/home',
                    // state: this.props.user
                })
            })
            .catch((error) => alert(error.message))
        console.log(this.props)
    }
    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <SigninComponent _inputHandler={this.inputHandler} _submit={this.signin} />
            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}
// export default Login;
const mapStateToProps = (state) => { // mapStateToProps ye iska apna function he
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => { // mapDispatchToProps ye iska apna function he
    return {
        signInUser: (data) => {
            dispatch(signIn(data))
        }
    }
}



class SigninComponent extends React.Component {


    render() {
        const center = {
            width: '90%',
            margin: '0 auto'
        }
        return (
            <div style={center}>
                <center>
               <h1>Login</h1>
                <form onSubmit={this.props._submit}>
                    <TextField
                        type="email"
                        hintText="email"
                        name="email"
                         floatingLabelText="Email"
                        onChange={this.props._inputHandler}
                        required
                        /><br />

                    <TextField
                        type="password"
                        hintText="password"
                        name="password"
                        floatingLabelText="Password"
                        onChange={this.props._inputHandler}
                        required
                        /><br />
                    <RaisedButton type="submit" label="Sign in" primary={true} />
                </form>
                <Link to="/" >Create Account</Link>
                
                </center>
            </div>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
