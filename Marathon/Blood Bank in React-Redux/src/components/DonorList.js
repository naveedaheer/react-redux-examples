import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DBfirebase from "../database/DBfirebase"
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


  
class DonorList extends Component {
    constructor(){
        super();




        this.state = {
            donors: []
        }
    }

Testing(){
const rootRef = firebase.database().ref();
    const bloodRef = rootRef.child('donors').orderByChild('bloodgroup').equalTo('A+').on('value',(data)=>{
 let obj = data.val();
var donors = [];  
 for(var prop in obj){
                donors.push(obj[prop].donor);
               
                // this.setState({
                //     donors: donors
                // })
                  console.log(donors);
            }
    });
//     const filter = bloodRef.on('value', (data)=>{
//          let obj = data.val();
// var donors = [];
//             for(var prop in obj){
//                 donors.push(obj[prop].donor);
               
//                 // this.setState({
//                 //     donors: donors
//                 // })
//                   console.log(donors);
//             }

// }
    }

  
    // componentWillMount(){
    //     var donors = [];
    //     firebase.database().ref('/donors/').on('value', (data) => {
    //         let obj = data.val();

    //         for(var prop in obj){
    //             donors.push(obj[prop].donor);
               
    //             this.setState({
    //                 donors: donors
    //             })
    //              console.log(this.state.donors);
    //         }

    //     })
    // }



//      state = {
//     value: 1,
//   };

//   handleChange = (event, index, value) => this.setState({value});
    
    render() {
        return (
            <div >
                <h1>Donor List</h1>
            <center> 
                 <select 
                        name="bloodgroup"
                        //value={this.props.signUpState.bloodgroup}
                        required
                       // onChange={this.props._inputHandler}
                       >
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
                    <button onClick={this.Testing} > Find </button>
            {/*<SelectField
          floatingLabelText="Blood Group"
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
          name="bloodgroup"
        >
          <MenuItem value={1} primaryText="O+" />
          <MenuItem value={2} primaryText="O-" />
          <MenuItem value={3} primaryText="A+" />
          <MenuItem value={4} primaryText="A-" />
          <MenuItem value={5} primaryText="B+" />
          <MenuItem value={6} primaryText="B-" />
          <MenuItem value={7} primaryText="AB+" />
          <MenuItem value={8} primaryText="AB-" />
         
        </SelectField> <br /><br />*/}
                    </ center>           
                      <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn><b>Blood Group</b></TableHeaderColumn>
        <TableHeaderColumn>Mobile </TableHeaderColumn>
        <TableHeaderColumn>Full Name  </TableHeaderColumn>
        <TableHeaderColumn>Age </TableHeaderColumn>
        <TableHeaderColumn>Address </TableHeaderColumn> 
      </TableRow>
    </TableHeader>
  </Table>
  

{this.state.donors.map((m,i)=>{
                    return(
                        
                      <Table>

    <TableBody>
      <TableRow>
        <TableRowColumn> {m.bloodgroup}</TableRowColumn>
        <TableRowColumn>{m.mobile}</TableRowColumn>
        <TableRowColumn>{m.fullname}</TableRowColumn>
        <TableRowColumn>{m.age}</TableRowColumn>
        <TableRowColumn>{m.address}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
  
  
  )
                })
                  
                }

            </div>
        );
    }
}

export default DonorList;