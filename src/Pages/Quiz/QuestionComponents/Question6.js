import React, { Component } from 'react';
import './Question.scss';

class Question6 extends Component {
  constructor() {
    super();
    this.state = {
      yesSmoke: false,
      noSmoke: false,
    };
  }
  handleInputValue = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };
  render() {
    const { yesSmoke, noSmoke } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question6</h5>
        <h2 className="qustion-title">Do you smoke?</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={yesSmoke}
                defaultChecked={false}
                name="yesSmoke"
                onChange={this.handleInputValue}
              />
              YES
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={noSmoke}
                defaultChecked={false}
                name="noSmoke"
                onChange={this.handleInputValue}
              />
              NO
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

export default Question6;
