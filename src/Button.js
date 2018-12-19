import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleInnerClick = this.handleInnerClick.bind(this);
    }

    handleInnerClick = function() {
        this.props.onClick(this.props.name)
    }

    render() {
        return (
            <button
              onClick={this.handleInnerClick}
              className={`btn ${this.props.featured ? "btn-color--orange" : ""}`}>
              {this.props.name}
            </button>
        );
    }
}

export default Button;