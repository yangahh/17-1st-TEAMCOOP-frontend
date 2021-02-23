import React, { Component } from 'react';
import './Question.scss';

class Question6 extends Component {
  constructor() {
    super();
    this.state = {
      skin: '',
      eye: '',
    };
  }
  handleInputValue = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };
  render() {
    const { skin, eye } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question2</h5>
        <h2 className="qustion-title">what</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={skin}
                defaultChecked={false}
                name="skin"
                onChange={this.handleInputValue}
              />
              skin
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={eye}
                defaultChecked={false}
                name="eye"
                onChange={this.handleInputValue}
              />
              eye
            </label>
          </li>
        </ul>
        <button onClick={() => handleSubmit(this.state, questionId)}>
          NEXT
        </button>
      </div>
    );
  }
}

export default Question6;
