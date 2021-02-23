import React, { Component } from 'react';
import Question1 from './QuestionComponents/Question1';
import Question2 from './QuestionComponents/Question2';
import Question3 from './QuestionComponents/Question3';
import Question4 from './QuestionComponents/Question4';
import Question5 from './QuestionComponents/Question5';
import Question6 from './QuestionComponents/Question6';
import Question7 from './QuestionComponents/Question7';
import Question8 from './QuestionComponents/Question8';
import Question9 from './QuestionComponents/Question9';
import Question10 from './QuestionComponents/Question10';

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

    this.handleNextQuestion(questionId);
  };

  // handlePreviousQuestion = id => {
  //   this.setState({ questionId: id - 1 });
  // };

  handleNextQuestion = id => {
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
      3: (
        <Question3
          questionId={this.state.questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      4: (
        <Question4
          questionId={this.state.questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      5: (
        <Question5
          questionId={this.state.questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      6: (
        <Question6
          questionId={this.state.questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      7: (
        <Question7
          questionId={this.state.questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      8: (
        <Question8
          questionId={this.state.questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      9: (
        <Question9
          questionId={this.state.questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      10: (
        <Question10
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
