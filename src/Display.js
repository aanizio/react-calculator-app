import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="display">
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Display;