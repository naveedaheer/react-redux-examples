import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const style = {
  //height: 100,
  //width: 100,
  margin: 20,
 // textAlign: 'center',
  // display: 'inline-block',
    display: 'block-inline',
  height: 'auto',
  width: 'auto',
  padding: 20
  
};

class MissingPeopleList extends Component {
    constructor(){
        super();

        this.state = {
            missingPeopleList: []
        }
       //  this.onSearch = this.onSearch.bind(this)
    }
    
//     //working code
//      onSearch(e) {
//         let _self = this;
//         e.preventDefault()
//        // let ref = DBfirebase.ref.child("/donors");
//         let ref = firebase.database().ref().child('/donors');
//         _self.arr = [];
       
//     // ref.orderByChild(this.refs.selectedBlood.value).equalTo(true).once('value', function (snapshot) {
//        //   ref.orderByChild('bloodgroup').equalTo("A+").once('value', function (snapshot) {

//           ref.orderByChild('bloodgroup').equalTo(this.refs.selectedBlood.value).once('value', function (snapshot) {
                
                         

//             snapshot.forEach(childSnapshot => {

//                 _self.arr.push(childSnapshot.val())
//             })
//             _self.props.findDonor(_self.arr)
//             _self.setState({
//                 arr: _self.props.storeReducer.user
                
//             })
//         });
//   }

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
                <center>
                    <br /><br />


                               <form onSubmit={this.onSearch}>
                     <select name="city"
                       // value={this.props.signUpState.city}
                        required
                      //  onChange={this.props._inputHandler}
                      ref="selectedCity"
                      >
                        <option> City   </option>
                        <option value="California">California</option>
                        <option value="Florida">Florida</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New York">New York</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Texas">Texas</option>
                        <option value="Washington">Washington</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="Oxford">Oxford</option>
                    </select><br /><br />

                    <button onClick={this.onSearch} type="submit" > Find </button>
                      </form><br /><br />
</ center>
               {this.state.missingPeopleList.map((m,i)=>{
                    return(
                      <div>
                    
                        <Paper style={style} zDepth={5} > 
                        >Name: {m.missingPersonName}<br />
                        >City: {m.city}<br /> 
                        >Gender: {m.gender}<br />
                        >Age: {m.age}<br />
                        >Details: {m.missingDetails}<br />
                        >Informer Name: {m.informerName}<br />
                        >Informer Mobile: {m.informerMobile}<br />
                        {/*<mui.RaisedButton type="submit" label="Request Blood" secondary={true} />*/}
                        </Paper>                     
                     </div>
  )
                })
                  
                }

            </div>
        );
    }
}

export default MissingPeopleList;
