import React, { Component } from 'react';
import './Question.scss';

class Question9 extends Component {
  constructor() {
    super();
    this.state = {
      vegan: false,
      vegetarian: false,
      nonVegetarian: false,
    };
  }
  handleInputValue = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };
  render() {
    const { vegan, vegetarian, nonVegetarian } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question9</h5>
        <h2 className="qustion-title">Are you Vegetarian?</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={vegan}
                defaultChecked={false}
                name="vegan"
                onChange={this.handleInputValue}
              />
              Vegan
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={vegetarian}
                defaultChecked={false}
                name="vegetarian"
                onChange={this.handleInputValue}
              />
              Vegetarian
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={nonVegetarian}
                defaultChecked={false}
                name="nonVegetarian"
                onChange={this.handleInputValue}
              />
              Non-Vegetarian
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

export default Question9;
