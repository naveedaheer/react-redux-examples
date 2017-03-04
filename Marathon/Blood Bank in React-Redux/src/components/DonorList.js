import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DBfirebase from "../database/DBfirebase"
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class DonorList extends Component {
    constructor(){
        super();

        this.state = {
            donors: []
        }
    }
    

    componentWillMount(){
        var donors = [];
        firebase.database().ref('/donors/').on('value', (data) => {
            let obj = data.val();

            for(var prop in obj){
                donors.push(obj[prop].newUser);
               
                this.setState({
                    donors: donors
                })
                 console.log(this.state.donors);
            }

        })
    }
    
    render() {
        return (
            <div >
                <h1>Donor List</h1>
             
                                 
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
