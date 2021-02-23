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
    const { name } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question1</h5>
        <h2 className="qustion-title">What is your name?</h2>
        <form className="textbox">
          <input
            onChange={this.handleInputValue}
            name="name"
            value={name}
            type="text"
            maxLength="4"
            required
          />
          <button
            type="button"
            onClick={() => handleSubmit(this.state, questionId)}
          >
            NEXT
          </button>
        </form>
      </div>
    );
  }
}

export default Question1;
