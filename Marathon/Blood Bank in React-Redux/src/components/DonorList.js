import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DBfirebase from "../database/DBfirebase"

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
                {this.state.donors.map((m,i)=>{
                    return(
                        
                    <table>
                        <br />
                        <tr><td>Full Name:{m.fullname}</td></tr>
                        <tr><td>Mobile:{m.mobile}</td></tr>
                        <tr><td>Age:{m.age}</td></tr>
                        <tr><td>Address:{m.address}</td></tr>
                        <tr><td>Blood Group: {m.bloodgroup}</td></tr>
                    </table>)
                })
                  
                }
            </div>
        );
    }
}

export default DonorList;
