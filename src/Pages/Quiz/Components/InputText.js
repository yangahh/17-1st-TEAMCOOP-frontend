import React, { Component } from 'react';
import './InputText.scss';

class InputText extends Component {
  handleInputField = event => {
    const { name, value } = event.target;
    const { handleInputValue } = this.props;
    const fieldName = name;
    const fieldValue = value;
    handleInputValue(fieldName, fieldValue);
  };

  render() {
    const { type, name, maxLength, placeholder } = this.props;
    return (
      <div className="InputText">
        <input
          onChange={this.handleInputField.bind(this)}
          name={name}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          required
        />
      </div>
    );
  }
}

export default InputText;
