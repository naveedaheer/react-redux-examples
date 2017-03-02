import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { DBfirebase } from '../database/DBfirebase'
import { signUp } from '../store/action/auth'
//import { SignupComponent } from '../container/signup'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            email: '',
            password: ''
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let multipath = {};
        let newUser = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password
        }
        // {(this.state.type === 'donor') ? console.log("Me Donor hn")  : console.log("Me Recipient hn")}
        // console.log(this.state)
        DBfirebase.customAuth(newUser).then((user) => {
            multipath[`users/${user.uid}`] = newUser;
            DBfirebase.saveMultipath(multipath)
            newUser['uid'] = this.state.uid
            this.props.signUp(this.state)
            // console.log(user.uid)
            localStorage.setItem('currentUser', user.uid);
            this.context.router.push({
                pathname: "/home"
            })
        }).catch((error) => alert(error.message))
    }
    render() {
        return (
            <div className='commentBox'>
                <SignupComponent signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
                Already have an account? <br /><Link to="/login"><RaisedButton label="Login" primary={false} /></Link>
            </div>
        );
    }
}
Register.contextTypes = {
    router: React.PropTypes.object.isRequired
}
const mapStateToProps = (state) => { // mapStateToProps ye iska apna function he
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => { // mapDispatchToProps ye iska apna function he
    return {
        signUp: (data) => {
            dispatch(signUp(data))
        }
    }
}




class SignupComponent extends React.Component {

    render() {
        
        return (
            <div >
                <h1>Register</h1>
                <form onSubmit={this.props._submit} >
                    <TextField
                        hintText="Full Name"
                        name="fullname"
                        value={this.props.signUpState.fullname}
                     floatingLabelText="Full Name"
                        onChange={this.props._inputHandler}
                        /><br />

                    <TextField
                        type="email"
                        hintText="email"
                        name="email"
                        value={this.props.signUpState.email}
                       floatingLabelText="Email"
                        onChange={this.props._inputHandler}
                        /><br />

                    <TextField
                        type="password"
                        hintText="Password"
                        name="password"
                        value={this.props.signUpState.password}
                        floatingLabelText="Password"
                        onChange={this.props._inputHandler}
                        /><br />
                    <RaisedButton type="submit" label="Sign up" primary={true} /> <br />
                </form>
            </div>
        )
    }
}
SignupComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}

export default connect(mapStateToProps, mapDispatchToProps)(Register);