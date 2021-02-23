import React, { Component } from 'react';
import './Question.scss';

class Question4 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    const { name, age } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question3</h5>
        <h2 className="qustion-title">what</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <input
              onChange={this.handleInputValue}
              name="age"
              value={age}
              type="text"
              maxLength="3"
              required="true"
            />
          </li>
        </ul>
        <button onClick={() => handleSubmit(this.state, questionId)}>
          NEXT
        </button>
      </div>
    );
  }
}

export default Question4;
