import React, { Component } from 'react';
import './Question.scss';

class Question11 extends Component {
  constructor() {
    super();
    this.state = {
      arthritis: false,
      diabetes: false,
      menstrualIrregularity: false,
      liverDisease: false,
      osteoporosis: false,
    };
  }
  handleInputValue = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };
  render() {
    const {
      arthritis,
      diabetes,
      menstrualIrregularity,
      liverDisease,
      osteoporosis,
    } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question11</h5>
        <h2 className="qustion-title">Do you have any diseases?</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={arthritis}
                defaultChecked={false}
                name="arthritis"
                onChange={this.handleInputValue}
              />
              Arthritis
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={diabetes}
                defaultChecked={false}
                name="diabetes"
                onChange={this.handleInputValue}
              />
              Diabetes
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={menstrualIrregularity}
                defaultChecked={false}
                name="menstrualIrregularity"
                onChange={this.handleInputValue}
              />
              Menstrual irregularity
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={liverDisease}
                defaultChecked={false}
                name="liverDisease"
                onChange={this.handleInputValue}
              />
              Liver disease
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={osteoporosis}
                defaultChecked={false}
                name="osteoporosis"
                onChange={this.handleInputValue}
              />
              Osteoporosis
            </label>
          </li>
        </ul>
        <button
          type="button"
          className="checkbox-btn"
          onClick={() => handleSubmit(this.state, questionId)}
        >
          NEXT
        </button>
      </div>
    );
  }
}

export default Question11;
