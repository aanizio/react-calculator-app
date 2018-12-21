import React, { Component } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from './logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      firstValue: null,
      secondValue: null,
      operation: null,
    };
  }

  handleClick(button) {
    this.setState(calculate(button, this.state));
  }

  render() {
    const { firstValue, secondValue, operation } = this.state;
    let displayValue = (secondValue || firstValue || "0");
    if (!secondValue)
      displayValue += (operation || "");
    return (
      <div className="App">
        <Display value={displayValue} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
