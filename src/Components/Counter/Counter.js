import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    function increment() {
      // this.setState({ counter: this.state.counter++ });
    }

    function decrement() {
      // this.setState({ counter: this.state.counter-- });
    }
    return (
      <div>
        <input type="button" onClick={increment} value="+" />

        <input type="button" onClick={decrement} value="-" />
        {this.state.counter}
      </div>
    );
  }
}
