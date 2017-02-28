import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div >
        <div>
           <h4> In Counter.js </h4>
        </div>
        <div>
           <h5> Counter --> {this.props.counter}  </h5>
        </div>
      </div>
    );
  }
}

export default Counter;
