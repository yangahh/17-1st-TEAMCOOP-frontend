import React, { Component } from 'react';

class CheckList extends Component {
  
  render() {
   
    const { term, idx, checked, onClick} = this.props
    return (
   
        <div key={idx}>
              <input
                onClick={()=> onClick(`checked${idx}`)}
               checked = {`checked$(idx)`}
                type="checkbox"
                className="input-checkbox"
                id={`termsService${idx}`}
              />
              <label for={`termsService${idx}`}>{term}</label>
              <a href="https://takecareof.com">View Details</a>
         </div>
    );
  }
}

export default CheckList;