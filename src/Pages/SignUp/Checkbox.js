import React, { Component } from 'react';

class CheckList extends Component {
  
  render() {
    const { checked, onClick} = this.props
    return (
        <div className="termsview1">
              <input
                onClick={onClick}
                checked={checked}
                type="checkbox"
                className="input-checkbox1"
              />
              <label for="termsService">Agree terms view</label>
              <a href="https://takecareof.com">View Details</a>
            </div>
    );
  }
}

export default Checkbox;