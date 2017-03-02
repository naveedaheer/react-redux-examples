import React, { Component } from 'react'
import { signIn } from '../store/action/auth'
import { connect } from 'react-redux'
import { DBfirebase } from '../database/DBfirebase'
import { SigninComponent } from '../container/signIn'


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
export default connect(mapStateToProps, mapDispatchToProps)(Login);