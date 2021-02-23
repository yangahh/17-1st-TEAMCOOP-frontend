import React, { Component } from 'react';
import './Question.scss';

class Question5 extends Component {
  constructor() {
    super();
    this.state = {
      workoutLess3hours: false,
      workoutLess6hours: false,
      workoutMore6hours: false,
    };
  }
  handleInputValue = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };
  render() {
    const {
      workoutLess3hours,
      workoutLess6hours,
      workoutMore6hours,
    } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question5</h5>
        <h2 className="qustion-title">How often do you workout in a week?</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={workoutLess3hours}
                defaultChecked={false}
                name="workoutLess3hours"
                onChange={this.handleInputValue}
              />
              less than 3hours
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={workoutLess6hours}
                defaultChecked={false}
                name="workoutLess6hours"
                onChange={this.handleInputValue}
              />
              3~6hours
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={workoutMore6hours}
                defaultChecked={false}
                name="workoutMore6hours"
                onChange={this.handleInputValue}
              />
              more than 6hours
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

export default Question5;
