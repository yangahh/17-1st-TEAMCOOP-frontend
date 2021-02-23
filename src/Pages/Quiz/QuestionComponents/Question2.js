import React, { Component } from 'react';
import './Question.scss';

class Question2 extends Component {
  constructor() {
    super();
    this.state = {
      female: false,
      male: false,
    };
  }
  handleInputValue = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };
  render() {
    const { female, male } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question2</h5>
        <h2 className="qustion-title">What is your gender?</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={female}
                defaultChecked={false}
                name="female"
                onChange={this.handleInputValue}
              />
              Female
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={male}
                defaultChecked={false}
                name="male"
                onChange={this.handleInputValue}
              />
              Male
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

export default Question2;
