import React, { Component } from 'react';
import './Question.scss';

class Question1 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
        <h5 className="question-count">Question1</h5>
        <h2 className="qustion-title">what</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <input
              onChange={this.handleInputValue}
              name="name"
              value={name}
              type="text"
              maxLength="5"
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

export default Question1;
