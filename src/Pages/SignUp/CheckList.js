import React, { Component } from 'react';

class CheckList extends Component {
  render() {
    const { content, idx, checked, onClick } = this.props;
    return (
      <div key={idx}>
        <label>
          <input
            checked={checked}
            type="checkbox"
            name={checked}
            onClick={onClick}
          />
          {content}
        </label>
        <a href="https://takecareof.com">View Details</a>
      </div>
    );
  }
}

export default CheckList;
