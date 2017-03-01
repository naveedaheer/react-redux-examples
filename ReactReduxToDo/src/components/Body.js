import React, { Component } from 'react';
//import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import ListTodo from "./ListTodo"

const style = {
  marginRight: 20,
  backgroundColor: "purple500"
};

class Body extends Component {
  
  constructor(){
    super();
    this.state = {
      todoItem : ""
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(){
    console.log(this.refs.todoText.value);
    this.props.addTodoEvent(this.refs.todoText.value);
  }

  render() {
    return (
      <div>
        <center>
        <TextField
        ref="todoText"
      floatingLabelText="Write Todo here" />
         <FloatingActionButton style={style} disabled={false}  onClick={this.addTodo} >
      <ContentAdd />
    </FloatingActionButton>
    <ListTodo />
        </center>
      </div>
    )
  }
}

export default Body;
