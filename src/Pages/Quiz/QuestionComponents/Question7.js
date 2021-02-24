import React, { Component } from 'react';
import './Question.scss';

class Question7 extends Component {
  constructor() {
    super();
    this.state = {
      drinkingLess: false,
      drinkingMore: false,
    };
  }
  handleInputValue = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };
  render() {
    const { drinkingLess, drinkingMore } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question7</h5>
        <h2 className="qustion-title">How often do you drink in a week?</h2>
        <p>Choose one</p>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={drinkingLess}
                defaultChecked={false}
                name="drinkingLess"
                onChange={this.handleInputValue}
              />
              Less than once
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={drinkingMore}
                defaultChecked={false}
                name="drinkingMore"
                onChange={this.handleInputValue}
              />
              More than once
            </label>
          </li>
        </ul>
        <button
          type="button"
          className="checkbox-btn"
          onClick={() => handleSubmit(this.state, questionId)}
        >
          NEXT
        </button>
      </div>
    );
  }
}

export default Question7;
