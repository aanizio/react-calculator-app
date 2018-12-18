import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    handleInnerClick = () => {
        this.props.onClick(this.props.name);
    };

    render() {
        return (
            <button onClick={this.handleInnerClick}>{this.props.name}</button>
        );
    }
}

export default Button;