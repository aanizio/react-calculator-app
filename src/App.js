import React, { Component } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
    };
  }

  handleClick(button) {
    let total = (this.state.total || "");
    if (button === "del") {
      let newTotal = "";
      for (let i = 0; i < total.length-1; i++) {
        newTotal += total[i];
      }
      total = newTotal;
    } else if (!this.state.total && button === ".") {
      total = "0."
    } else {
      total += button;
    }
    this.setState({
      next: button,
      total: total,
    });
  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.total || "0"} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
