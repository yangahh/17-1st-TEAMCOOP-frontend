import React, { Component } from 'react';

class CheckList extends Component {

  render() {
    console.log(this.state);

    const { content, idx, checked, name, handleClick} = this.props;
    return (
      <div key={idx}>
        <label>
          <input
        //  checked={`this.state.check${idx}`}
         checked={checked}
         type="checkbox"
         name={name}
         onClick={handleClick}
          />
          {content}
        </label>
        <a href="https://takecareof.com">View Details</a>
      </div>
    );
  }
}

export default CheckList;
