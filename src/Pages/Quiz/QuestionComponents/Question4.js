import React, { Component } from 'react';
import './Question.scss';

class Question4 extends Component {
  constructor() {
    super();
    this.state = {
      height: '',
      weight: '',
    };
  }
  handleInputValue = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { height, weight } = this.state;
    const bmi = { bmi: Math.round(weight / ((height / 100) * (height / 100))) };
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question4</h5>
        <h2 className="qustion-title">What is your height, weight?</h2>
        <form className="two-textbox">
          <label>
            <input
              onChange={this.handleInputValue}
              placeholder="Please enter your height"
              name="height"
              value={height}
              type="text"
              maxLength="3"
            />
          </label>
          <label>
            <input
              onChange={this.handleInputValue}
              placeholder="Please enter your weight"
              name="weight"
              value={weight}
              type="text"
              maxLength="3"
              required
            />
          </label>
          <button type="button" onClick={() => handleSubmit(bmi, questionId)}>
            NEXT
          </button>
        </form>
      </div>
    );
  }
}

export default Question4;
