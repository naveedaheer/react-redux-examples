import React, { Component } from 'react';

class Counter extends Component {
constructor(){
      super()
      this.state = {
          counterValue: "",
          buttonValue: '',
          buttonState: ""
      }
  }

    changeValue(event){
      this.setState({counterValue: parseInt(event.target.value),
      buttonValue: (event.target.value),
    buttonState: "" })
  }

    updateCounterWithInput(){
    this.props.update(this.state.counterVal);
    //this.props.incrementWithValue(this.state.counterVal);
  }

  updateCounterWithOne(){
    this.props.update(1);
  }

  render() {
    return (
      <div ><hr />
        <div>

           <h4> In Counter.js Mummy Daddy Component </h4>
        </div>
        <div>
           <h5> Counter : {this.props.counter}  </h5>
           <input type="number" onChange={this.changeValue.bind(this)} />
               <button onClick={this.handleClick.bind(this)} disabled={!this.state.counterValue} > Plus {this.state.buttonValue} </button><br />
                   <button onClick={this.props.increment}>Increment 1</button><br />
    <button onClick={this.props.decrement}>Decrement 1</button><br />
        </div>
        <hr />
      </div>
    );
  }
}

export default Counter;
