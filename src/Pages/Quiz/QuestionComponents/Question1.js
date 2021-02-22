import React, { Component } from 'react';
import './Question.scss';

class Question1 extends Component {
  render() {
    const { name, age, handleInputValue } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question1</h5>
        <h2 className="qustion-title">what</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <input
              onChange={handleInputValue}
              value={name}
              type="text"
              maxLength="5"
              // required="true"
            />
          </li>
          <li>
            <input
              onChange={() => handleInputValue()}
              value={age}
              type="text"
              maxLength="3"
              required="true"
            />
          </li>
        </ul>
        <button>NEXT</button>
      </div>
    );
  }
}

export default Question1;
