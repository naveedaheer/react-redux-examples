import React, { Component } from 'react';

class ListTodo extends Component {

  render() {
    return (
      <div ><hr />
        <div>
           <h4> List Todo : {this.props.counter}  </h4>
        </div>
        <hr />
      </div>
    );
  }
}

export default ListTodo;