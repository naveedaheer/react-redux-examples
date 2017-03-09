import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Crimes extends Component {
    constructor(){
        super();

        this.state = {
            crimeList: []
        }
    }
    

    componentWillMount(){
        var crimes = [];
        firebase.database().ref('/crimeList/').on('value', (data) => {
            let obj = data.val();

            for(var prop in obj){
                crimes.push(obj[prop].crime);
               
                this.setState({
                    crimeList: crimes
                })
                 console.log(this.state.crimeList);
            }

        })
    }
    
    render() {
        return (
            <div >                     
                      <Table>
    <TableHeader>
      <TableRow>
              <TableHeaderColumn>Name </TableHeaderColumn>
        <TableHeaderColumn><b>Crime</b></TableHeaderColumn>
        <TableHeaderColumn>City </TableHeaderColumn>
        <TableHeaderColumn>Informer Mobile </TableHeaderColumn>
    
      </TableRow>
    </TableHeader>
  </Table>
  

{this.state.crimeList.map((c,i)=>{
                    return(
                        
                      <Table>

    <TableBody>
      <TableRow>
            <TableRowColumn>{c.informerName}</TableRowColumn>
        <TableRowColumn> {c.crime}</TableRowColumn>
        <TableRowColumn>{c.city}</TableRowColumn>
        <TableRowColumn>{c.informerMobile}</TableRowColumn>
      
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

export default Crimes;
