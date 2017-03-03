import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { DBfirebase } from '../database/DBfirebase'
import { signUp } from '../store/action/auth'
//import { SignupComponent } from '../container/signup'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

const DonorDataForSave={};

class RegisterDonor extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            mobile: '',
            address: '',
            age:'',
            bloodgroup:''
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
            mobile: this.state.mobile,
            address: this.state.address,
            age: this.state.age,
            bloodgroup: this.state.bloodgroup
        }

        console.log(newUser)
        DBfirebase.refDonors.push(newUser);
        

        // {(this.state.type === 'donor') ? console.log("Me Donor hn")  : console.log("Me Recipient hn")}
        // console.log(this.state)
        // DBfirebase.customAuth(newUser).then((user) => {
        //     multipath[`users/${user.uid}`] = newUser;
        //     DBfirebase.saveMultipath(multipath)
        //     newUser['uid'] = this.state.uid
        //     this.props.signUp(this.state)
        //     // console.log(user.uid)
        //     localStorage.setItem('currentUser', user.uid);
        //     this.context.router.push({
        //         pathname: "/home/thankyou"
        //     })
        // }).catch((error) => alert(error.message))
    }
  
    render() {
        return (
            <div ><center>
                <SignupComponent signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}

// RegisterDonor.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => { 
//     return {
//         authReducer: state
//     }
// }
// const mapDispatchToProps = (dispatch) => { 
//     return {
//         signUp: (data) => {
//             dispatch(signUp(data))
//         }
//     }
// }




class SignupComponent extends React.Component {

//  state = {
//     value: '',
//   };

//   handleChange = (event, index, value) => this.setState({value});

    render() {
        
        return (
            <div >
              
                <h1>Register as Donor</h1>
                <form onSubmit={this.props._submit} >
                    <TextField
                        hintText="Full Name"
                        name="fullname"
                        value={this.props.signUpState.fullname}
                     floatingLabelText="Full Name"
                        onChange={this.props._inputHandler}
                        /><br />

                    <TextField
                        type="text"
                        hintText="Mobile"
                        name="mobile"
                        value={this.props.signUpState.mobile}
                       floatingLabelText="Mobile"
                        onChange={this.props._inputHandler}
                        /><br />

                    <TextField
                        type="text"
                        hintText="address"
                        name="address"
                        value={this.props.signUpState.address}
                        floatingLabelText="Address"
                        onChange={this.props._inputHandler}
                        /><br />
                        <TextField
                        type="text"
                        hintText="Age"
                        name="age"
                        value={this.props.signUpState.age}
                        floatingLabelText="Age"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />
                        <TextField
                        type="text"
                        hintText="Blood Group"
                        name="bloodgroup"
                        value={this.props.signUpState.bloodgroup}
                        floatingLabelText="Blood Group"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />
{/*<SelectField
          floatingLabelText="Blood Group"
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
          name="bloodgroup"
        >
          <MenuItem value={"o+"} primaryText=" O +" />
          <MenuItem value={2} primaryText=" O -" />
          <MenuItem value={"A+"} primaryText=" A +" />
          <MenuItem value={4} primaryText=" A -" />
          <MenuItem value={5} primaryText=" B +" />
          <MenuItem value={6} primaryText=" B -" />
          <MenuItem value={7} primaryText=" AB +" />
          <MenuItem value={8} primaryText=" AB -" />
         
        </SelectField> */}
        <br /><br />

                    <RaisedButton type="submit" label="Register as Donor" primary={false} secondary={true} /> <br /><br />
                </form>
                
            </div>
        )
    }
}
// SignupComponent.PropTypes = {
//     _inputHandler: React.PropTypes.func.isRequired,
//     _submit: React.PropTypes.func.isRequired

// }

export default RegisterDonor;

//export default connect(mapStateToProps, mapDispatchToProps)(RegisterDonor);
