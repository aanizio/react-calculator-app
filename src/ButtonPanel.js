import React, { Component } from 'react';
import './ButtonPanel.css';
import Button from './Button';

class ButtonPanel extends Component {
  renderButton(name, featured) {
      return (
        <Button 
          name={name}
          onClick={this.props.onClick}
          featured={featured}
          />
      );
  }

  render() {
    return (
      <div className="button-panel">
        <div className="row">
            {this.renderButton("C")}
            {this.renderButton("+/-")}
            {this.renderButton("%")}
            {this.renderButton("/", true)}
        </div>
        <div className="row">
            {this.renderButton("7")}
            {this.renderButton("8")}
            {this.renderButton("9")}
            {this.renderButton("x", true)}
        </div>
        <div className="row">
            {this.renderButton("4")}
            {this.renderButton("5")}
            {this.renderButton("6")}
            {this.renderButton("-", true)}
        </div>
        <div className="row">
            {this.renderButton("1")}
            {this.renderButton("2")}
            {this.renderButton("3")}
            {this.renderButton("+", true)}
        </div>
        <div className="row">
            {this.renderButton("0")}
            {this.renderButton(".")}
            {this.renderButton("del")}
            {this.renderButton("=", true)}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;