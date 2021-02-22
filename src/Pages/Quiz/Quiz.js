import React, { Component } from 'react';
import Question1 from './QuestionComponents/Question1';
import Question2 from './QuestionComponents/Question2';

import './Quiz.scss';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      question1: false,
      question2: false,
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
    console.log(name, age);
    return (
      <div className="Quiz">
        <div className="quiz-container">
          <Question1
            handleInputValue={this.handleInputValue}
            name={name}
            age={age}
          />
          <Question2 />
        </div>
      </div>
    );
  }
}

export default Quiz;
