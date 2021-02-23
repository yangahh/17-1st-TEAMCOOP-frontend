import React, { Component } from 'react';
import Question1 from './QuestionComponents/Question1';
import Question2 from './QuestionComponents/Question2';

import './Quiz.scss';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionId: 1,
      answer: [],
    };
  }

  handleSubmit = (data, questionId) => {
    const { answer } = this.state;
    this.setState({
      answer: answer.concat({ id: questionId, ...data }),
    });

    this.handleQuestionId(questionId);
  };

  handleQuestionId = id => {
    this.setState({ questionId: id + 1 });
  };

  render() {
    console.log(this.state);
    const { questionId } = this.state;
    const quiz_obj = {
      1: (
        <Question1
          questionId={this.state.questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      2: (
        <Question2
          questionId={this.state.questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
    };

    return (
      <div className="Quiz">
        <div className="quiz-container">Quiz{quiz_obj[questionId]}</div>
      </div>
    );
  }
}

export default Quiz;
