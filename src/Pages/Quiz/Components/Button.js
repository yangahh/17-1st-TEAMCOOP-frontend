import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { handleSubmit, questionId, answer, handleResetState } = this.props;
    return (
      <div className="Button">
        <button
          onClick={() => {
            handleSubmit(answer, questionId);
            handleResetState();
          }}
          type="button"
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
