import React, { Component } from 'react';
import './Question.scss';

class Question3 extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
    };
  }
  handleInputValue = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { age } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question3</h5>
        <h2 className="qustion-title">What is your age?</h2>
        <form className="textbox">
          <input
            onChange={this.handleInputValue}
            name="age"
            value={age}
            type="text"
            maxLength="2"
          />
          <button
            type="button"
            onClick={age && (() => handleSubmit(this.state, questionId))}
          >
            NEXT
          </button>
        </form>
      </div>
    );
  }
}

export default Question3;
