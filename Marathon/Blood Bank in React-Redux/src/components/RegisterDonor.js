import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { DBfirebase } from '../database/DBfirebase'
import { signUp } from '../store/action/auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as mui from 'material-ui';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            mobile: '',
            address: '',
            age:'',
            bloodgroup:'',
           // possibleBloodGroups:[]
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
            
        })
    }
    
    submit(e) {
        var that = this;
        let possibleGroups=[]
        e.preventDefault();
        let multipath = {};
bloodgroup: this.state.bloodgroup
// if(this.state.bloodgroup == "A+" || this.state.bloodgroup == "A-"){
//     let possibleGroups = ["A+", "A-", "O+", "O-", "AB+", "AB-"];
    
//     this.setState({
        
//         possibleBloodGroups: ["A+", "A-", "O+", "O-", "AB+", "AB-"]
            
//     },setTimeout(()=>{
//         console.log("state",that.state);
//     },20))
    
// }

if(this.state.bloodgroup == "A+" || this.state.bloodgroup == "A-"){
     possibleGroups = ["A+", "A-", "O+", "O-", "AB+", "AB-"];  
}


else if(this.state.bloodgroup == "B+" || this.state.bloodgroup == "B-"){
    possibleGroups = ["O+", "O-", "AB+", "AB-", "B+", "B-"];  
}
else if(this.state.bloodgroup == "AB+" || this.state.bloodgroup == "AB-"){
    possibleGroups = ["O+", "O-", "AB+", "AB-", "B+", "B-","A+","A-"];
    
}
else if(this.state.bloodgroup == "O+" || this.state.bloodgroup == "O-"){
    possibleGroups = ["O+", "O-", "AB+", "AB-", "B+", "B-","A+","A-"];
    
}

        let donor = {
            fullname: this.state.fullname,
            mobile: this.state.mobile,
            address: this.state.address,
            age: this.state.age,
            bloodgroup: this.state.bloodgroup,
            possibleBloodGroups: possibleGroups
        }

//   DBfirebase.customAuth(newUser).then((user) => {
//             multipath[`users/${user.uid}`] = newUser;
//             DBfirebase.saveMultipath(multipath)
//             newUser['uid'] = this.state.uid
//             this.props.signUp(this.state)
//             localStorage.setItem('currentUser', user.uid);
//             this.context.router.push({
//                 pathname: "/donorList"
//             })
//         }).catch((error) => alert(error.message))

    
       DBfirebase.refDonor.push(donor);
       this.context.router.push({
                pathname: "/home/donorList"
            })
   console.log(donor)

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

Register.contextTypes = {
    router: React.PropTypes.object.isRequired
}


class SignupComponent extends React.Component {

//  state = {
//     value: 1,
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

                         {/*<TextField
                        type="text"
                        hintText="Blood Group"
                        name="bloodgroup"
                        value={this.props.signUpState.bloodgroup}
                        floatingLabelText="Blood Group"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />*/}
{/*<SelectField
          floatingLabelText="Blood Group"
          //value={this.state.value}
          value={this.props.signUpState.bloodgroup}
          onChange={this.props._inputHandler}
          autoWidth={true}
          name="bloodgroup"
        >
          <MenuItem value={1} primaryText=" O+" />
          <MenuItem value={2} primaryText=" O-" />
          <MenuItem value={3} primaryText=" A+" />
          <MenuItem value={4} primaryText=" A-" />
          <MenuItem value={5} primaryText=" B+" />
          <MenuItem value={6} primaryText=" B-" />
          <MenuItem value={7} primaryText=" AB+" />
          <MenuItem value={8} primaryText=" AB-" />
         
        </SelectField> <br /><br />*/}

        <select 
                        name="bloodgroup"
                        value={this.props.signUpState.blood}
                        required
                        onChange={this.props._inputHandler}>
                        <option>Blood Type   </option>
                        <option value="A+">A+   </option>
                        <option value="B+">B+   </option>
                        <option value="O+">O+   </option>
                        <option value="AB+">AB+</option>
                        <option value="A-">A-   </option>
                        <option value="B-">B-   </option>
                        <option value="O-">O-   </option>
                        <option value="AB-">AB-</option>
                    </select>
                    <br />
                    <br />

                 <RaisedButton type="submit" label="Register as Donor" primary={false} secondary={true} /> <br /><br />
                </form>
                
            </div>
        )
    }
}
SignupComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

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
export default connect(mapStateToProps, mapDispatchToProps)(Register);
