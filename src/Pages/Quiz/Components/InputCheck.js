import { clearConfigCache } from 'prettier';
import React, { Component } from 'react';

class InputCheck extends Component {
  componentDidMount() {
    // console.log('CDM');
  }

  handleInputField = event => {
    const { name, checked } = event.target;
    const { handleInputValue } = this.props;
    const fieldName = name;
    const fieldValue = checked;
    handleInputValue(fieldName, fieldValue);
    // console.log('ddddd', checked);
  };

  render() {
    const { type, name, value, innerHtml } = this.props;
    return (
      <div className="InputCheck">
        <li>
          <label className="checkbox-label">
            <input
              type={type}
              defaultChecked={false}
              name={name}
              // value={value}
              // checked={value}
              onChange={this.handleInputField}
            />
            {innerHtml}
          </label>
        </li>
      </div>
    );
  }
}

export default InputCheck;
