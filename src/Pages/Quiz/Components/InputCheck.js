import { clearConfigCache } from 'prettier';
import React, { Component } from 'react';

class InputCheck extends Component {
  componentDidMount() {
    console.log('cdm');
    const { handleInputValue } = this.props;
    const fieldName = this.props.name;
    handleInputValue([fieldName], false);
  }
  handleInputField = event => {
    const { name, checked } = event.target;
    const { handleInputValue } = this.props;
    const fieldName = name;
    const fieldValue = checked;
    handleInputValue([fieldName], fieldValue);
    // this.props.handleInputValue(event);
    // event.stopPropagation();
  };

  render() {
    const { type, name, value, innerHtml, id, checked } = this.props;
    return (
      <div className="InputCheck">
        <li>
          <label className="checkbox-label">
            <input
              onChange={this.handleInputField}
              id={id}
              type="checkbox"
              defaultChecked={false}
              name={name}
              value={name}
              data-only="null"
              // checked={!name || false}
            />
            {innerHtml}
          </label>
        </li>
      </div>
    );
  }
}

export default InputCheck;
