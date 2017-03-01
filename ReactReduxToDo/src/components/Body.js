import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

const style = {
  marginRight: 20,
  backgroundColor: "purple500"
};

class Body extends Component {
  render() {
    return (
      <div>
        <center>
        <TextField
      hintText="Hint Text"
      floatingLabelText="Write Todo here"
    /><br />
         <FloatingActionButton style={style} disabled={false}>
      <ContentAdd />
    </FloatingActionButton>
        </center>
      </div>
    )
  }
}

export default Body;
