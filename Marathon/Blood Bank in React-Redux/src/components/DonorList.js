import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DBfirebase from "../database/DBfirebase"
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import * as mui from "material-ui"
import { FindDonors } from '../store/action/auth'
import { connect } from 'react-redux'


const style = {
  //height: 100,
  //width: 100,
  margin: 20,
  textAlign: 'center',
  // display: 'inline-block',
    display: 'block-inline',
  height: 'auto',
  width: 'auto',
  padding: 20
  
};

     const table = {
  height: 190,
  width: 280,
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
   background : 'wheat',
   color : '#009999'
};
  
class DonorList extends Component {
    constructor(){
        super();
        this.state = {
            donors: [],
            arr: []
        }

         this.onSearch = this.onSearch.bind(this)
    }
    //  selectedblood={sb:this.refs.selectedBlood.value}
    //  console.log("selected blood", selectedblood)

//      onSearch(e) {
//         let _self = this;
//         e.preventDefault()
//        // let ref = DBfirebase.ref.child("/donors");
//         let ref = firebase.database().ref().child('/donors');
//         _self.arr = [];
//         ref.orderByChild(this.refs.selectedBlood.value).equalTo(true).once('value', function (snapshot) {
//        //   ref.orderByChild('donor').equalTo("A+").once('value', function (snapshot) {

//          // console.log("selected blood", ref.orderByChild(this.refs.selectedBlood.value)
//             snapshot.forEach(childSnapshot => {
//                 _self.arr.push(childSnapshot.val())
//             })
//             _self.props.findDonor(_self.arr)
//             _self.setState({
//                 arr: _self.props.storeReducer.user
                
//             })
//         });
//   }

  
  onSearch(e) {
      var donors = [];
        //let _self = this;
        e.preventDefault()
       // let ref = DBfirebase.ref.child("/donors");
        let ref = firebase.database().ref().child('/donors');
       // _self.arr = [];
        ref.orderByChild(this.refs.selectedBlood.value).equalTo(true).once('value', (data) => {
       //   ref.orderByChild('donor').equalTo("A+").once('value', function (snapshot) {

         // console.log("selected blood", ref.orderByChild(this.refs.selectedBlood.value)
             let obj = data.val();
console.log(obj)
for(var prop in obj){
                donors.push(obj[prop].donor);
               
                this.setState({
                    arr: donors
                })
                 console.log(this.state.donors);
            }


            // snapshot.forEach(childSnapshot => {
            //     _self.arr.push(childSnapshot.val())
            // })
            // _self.props.findDonor(_self.arr)
            // _self.setState({
            //     arr: _self.props.storeReducer.user
                
          //  })
        });
  }


// Testing(){
// const rootRef = firebase.database().ref();
//     const bloodRef = rootRef.child('donors').orderByChild('bloodgroup').equalTo('A+').on('value',(data)=>{
//  let obj = data.val();
// var donors = [];  
//  for(var prop in obj){
//                 donors.push(obj[prop].donor);
               
//                 // this.setState({
//                 //     donors: donors
//                 // })
//                   console.log(donors);
//             }
//     });
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
   // }

  
    componentWillMount(){
        // var donors = [];
        // firebase.database().ref('/donors/').on('value', (data) => {
        //     let obj = data.val();

        //     for(var prop in obj){
        //         donors.push(obj[prop].donor);
               
        //         this.setState({
        //             donors: donors
        //         })
        //          console.log(this.state.donors);
        //     }

        // })


    }



//      state = {
//     value: 1,
//   };

//   handleChange = (event, index, value) => this.setState({value});
    
    render() {
        return (
            <div >
                <h1>Donor List</h1>
            <center> 
               <form onSubmit={this.onSearch}>
                 <select 
                        name="bloodgroup"
                        //value={this.props.signUpState.bloodgroup}
                        required
                        ref="selectedBlood"
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
                    <button onClick={this.onSearch} type="submit" > Find </button>
                      </form>
                    <br />
                    <br />
                    
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
                         {/*<Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn><b>Blood Group</b></TableHeaderColumn>
        <TableHeaderColumn>Mobile </TableHeaderColumn>
        <TableHeaderColumn>Full Name  </TableHeaderColumn>
        <TableHeaderColumn>Age </TableHeaderColumn>
        <TableHeaderColumn>Address </TableHeaderColumn> 
      </TableRow>
    </TableHeader>
  </Table>*/}
  

{this.state.donors.map((m,i)=>{
                    return(
                      <div>
                    
                        <Paper style={style} zDepth={5} > 
                        >Bloog: {m.bloodgroup}<br />
                        >Mobile: {m.mobile}<br /> 
                        >Name: {m.fullname}<br />
                        >Age: {m.age}<br />
                        >Address: {m.address}<br />
                        <mui.RaisedButton type="submit" label="Request Blood" secondary={true} />
                        </Paper>

                      
                     </div>
                    /*<Table>
    <TableBody>
      <TableRow>
        <TableRowColumn> {m.bloodgroup}</TableRowColumn>
        <TableRowColumn>{m.mobile}</TableRowColumn>
        <TableRowColumn>{m.fullname}</TableRowColumn>
        <TableRowColumn>{m.age}</TableRowColumn>
        <TableRowColumn>{m.address}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>*/
     
  )
                })
                  
                }



 {this.state.arr.map((v, i) => {
                    return (
                <div>
                    <Paper style={table} zDepth={2}>

                    <table key={i}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>
                            {v.firstname } {v.lastname} </td>
                            <hr/>
                            </tr> <hr/>
                            <tr>
                                <th>Email</th>
                                <td>
                            {v.email} </td>
                            </tr>
                            <hr/>
                            <tr>
                                <th>Age</th>
                                <td>
                            {v.age} </td>
                            </tr>
                            <hr/>
                            <tr>
                                <th>Blood Group</th>
                                    <td>
                            {v.blood} </td>
                            </tr>
                        </tbody>
                    </table>
                    </Paper>
                </div>
                    )
                })
                }




            </div>
        );
    }
}

const mapStateToProps = (state) => { // mapStateToProps ye iska apna function he
     console.log(state.UserReducer)
    return {
        storeReducer: state.UserReducer
    }
}
const mapDispatchToProps = (dispatch) => { // mapDispatchToProps ye iska apna function he
    return {
        findDonor: (data) => {
            console.log(data)
            dispatch(FindDonors(data))
        }
    }
}

//export default DonorList;
export default connect(mapStateToProps, mapDispatchToProps)(DonorList);