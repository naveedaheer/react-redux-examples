import * as React from "react";
import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';



export class SigninComponent extends React.Component {


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