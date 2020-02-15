import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: ''
    };
  }

   onIncrement = () => {
      this.setState({ counter: this.state.counter + 1, message: '' });

    }

   onDecrement = (state) => {
      if (state === 0) {
        this.setState({ message: "The counter can't go below 0" });
        return;
      } else {
        this.setState({ counter: this.state.counter - 1 });
        this.setState({ message: "" });
      }
  }
  
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button data-test="increment-button" onClick={this.onIncrement}>
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => this.onDecrement(this.state.counter)}
        >
          Decrement counter
        </button>
        <div data-test="error-message">{this.state.message}</div>
      </div>
    );
  }
}

export default App;
