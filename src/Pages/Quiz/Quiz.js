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
import Question11 from './QuestionComponents/Question11';
import SimilarProduct from './SimilarProduct/SimilarProduct';

import QuestionForm from './Components/QuestionForm';
import QuestionData from './QuestionData';

import './Quiz.scss';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionId: 1,
      answer: [],
      similarProduct: [],
    };
  }

  componentDidUpdate() {
    const { questionId, answer, similarProduct } = this.state;
    if (questionId === 12 && similarProduct.length === 0) {
      fetch('http://10.58.6.165:8000/recommendation', {
        method: 'POST',
        headers: {
          Authorization: sessionStorage.getItem('access_token'),
        },
        body: JSON.stringify({
          answer: answer,
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log('similar', res);
          this.setState({
            similarProduct: res.data,
          });
        });
    }
  }

  handleSubmit = (data, questionId) => {
    const { answer } = this.state;

    if (answer.length === 0) {
      this.setState({
        answer: answer.concat({ id: questionId, ...data }),
      });
    } else {
      for (let i in answer[answer.length - 1]) {
        delete data[i];
      }
      this.setState({ answer: answer.concat({ id: questionId, ...data }) });
    }

    this.handleNextQuestion(questionId);
  };

  handleNextQuestion = id => {
    this.setState({ questionId: id + 1 });
  };

  // handleInputValue = (name, value) => {
  //   // const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  //   console.log(this.state);
  // };

  render() {
    console.log(this.state);
    const { questionId, similarProduct } = this.state;
    const quiz_obj = {
      // 1: <Question1 questionId={questionId} handleSubmit={this.handleSubmit} />,
      1: (
        <QuestionForm
          QuestionData={QuestionData.Question1}
          questionId={questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      // 2: <Question2 questionId={questionId} handleSubmit={this.handleSubmit} />,
      2: (
        <QuestionForm
          QuestionData={QuestionData.Question2}
          questionId={questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      3: (
        <QuestionForm
          QuestionData={QuestionData.Question3}
          questionId={questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      4: (
        <QuestionForm
          QuestionData={QuestionData.Question4}
          questionId={questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      5: (
        <QuestionForm
          QuestionData={QuestionData.Question5}
          questionId={questionId}
          handleSubmit={this.handleSubmit}
        />
      ),
      6: <Question6 questionId={questionId} handleSubmit={this.handleSubmit} />,
      7: <Question7 questionId={questionId} handleSubmit={this.handleSubmit} />,
      8: <Question8 questionId={questionId} handleSubmit={this.handleSubmit} />,
      9: <Question9 questionId={questionId} handleSubmit={this.handleSubmit} />,
      10: (
        <Question10 questionId={questionId} handleSubmit={this.handleSubmit} />
      ),
      11: (
        <Question11 questionId={questionId} handleSubmit={this.handleSubmit} />
      ),
      12: <SimilarProduct similarProduct={similarProduct} />,
    };

    return (
      <div className="Quiz">
        <div className="quiz-container">
          {/* <h1>Quiz</h1> */}
          {quiz_obj[questionId]}
        </div>
      </div>
    );
  }
}

export default Quiz;
