import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class MissingPeopleList extends Component {
    constructor(){
        super();

        this.state = {
            missingPeopleList: []
        }
    }
    

    componentWillMount(){
        var missingPeople = [];
        firebase.database().ref('/missingPeople/').on('value', (data) => {
            let obj = data.val();

            for(var prop in obj){
                missingPeople.push(obj[prop].missingPerson);
               
                this.setState({
                    missingPeopleList: missingPeople
                })
                 console.log(this.state.missingPeopleList);
            }

        })
    }
    
    render() {
        return (
            <div >                     
                      <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn><b>Missing Person Name</b></TableHeaderColumn>
        <TableHeaderColumn>City </TableHeaderColumn>
        <TableHeaderColumn>Gender</TableHeaderColumn>
        <TableHeaderColumn>Age </TableHeaderColumn>
        <TableHeaderColumn>Missing Details</TableHeaderColumn>
        <TableHeaderColumn>Informer Name</TableHeaderColumn>
        <TableHeaderColumn>Informer Mobile </TableHeaderColumn>
      </TableRow>
    </TableHeader>
  </Table>
  

{this.state.missingPeopleList.map((m,i)=>{
                    return(
                        
                      <Table>

    <TableBody>
      <TableRow>
        <TableRowColumn> {m.missingPersonName}</TableRowColumn>
        <TableRowColumn>{m.city}</TableRowColumn>
        <TableRowColumn>{m.gender}</TableRowColumn>
        <TableRowColumn>{m.age}</TableRowColumn>
        <TableRowColumn>{m.missingDetails}</TableRowColumn>
        <TableRowColumn>{m.informerName}</TableRowColumn>
        <TableRowColumn>{m.informerMobile}</TableRowColumn>
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

export default MissingPeopleList;
