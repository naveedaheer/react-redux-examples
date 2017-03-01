import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { FirebaseService } from '../../config/fierbaseService'

class App extends Component {

    constructor() {
        super();
        this.state = {
            message: "Hello World"
        }

        this.submit = this.submit.bind(this)

    }

    submit() {

        let getInput = {
            name: this.refs.name.value,
            age: this.refs.age.value,
            email: this.refs.email.value,
            pass: this.refs.pass.value
        }
        // console.log(this.refs.name.value)
        // let saveMsg = FirebaseService.ref.child('message/users')
        // saveMsg.set(getInput) // replace itm, 
        // saveMsg.push(getInput)

        FirebaseService.auth.createUserWithEmailAndPassword(getInput.email, getInput.pass)
            .then(function (data) {
                console.log("save success on firebase  ", data);

                let saveMsg = FirebaseService.ref.child(`ordersa/${dgetlocals.idata.uid}`)
                saveMsg.set(getInput)
            }).catch(function (error) {
                console.log("error updating firebase ", error.message);
            });;

        // .then(function (data){
        //   console.log("save success on firebase  ",data);
        // }).catch(function (error){
        //   console.log("error updating firebase ",error);
        // });;

        //Listing to value from firebase
        // saveMsg.on('value', snapshot => {
        //     console.log(snapshot.val())

        //     // this.setState({ message: snapshot.val() });
        // })
    }

    render() {
        return (
            <div className="App">
                {this.state.message}<br />
                <input type="text" ref="name" placeholder="User name" />
                <input type="text" ref="age" defaultValue="23" />
                <input type="text" ref="email" defaultValue="ehsan1@gmail.com" />
                <input type="text" ref="pass" defaultValue="12345" />
                <button onClick={this.submit}> Click me!   </button>

            </div>
        );
    }
}

export default App;
