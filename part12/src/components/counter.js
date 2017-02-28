import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div ><hr />
        <div>

           <h4> In Counter.js Mummy Daddy Component </h4>
        </div>
        <div>
           <h5> Counter : {this.props.counter}  </h5>
        </div>
        <hr />
      </div>
    );
  }
}

export default Counter;
