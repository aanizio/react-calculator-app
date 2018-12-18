import React, { Component } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      next: null
    };
  }

  handleClick(button) {
    this.setState({
      next: button
    });
  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.next || "0"} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
