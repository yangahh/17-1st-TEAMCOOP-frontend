import React, { Component } from 'react';
import './Question.scss';

class Question10 extends Component {
  constructor() {
    super();
    this.state = {
      soy: false,
      nuts: false,
      milk: false,
      wheat: false,
      fish: false,
    };
  }
  handleInputValue = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked,
    });
  };
  render() {
    const { soy, nuts, milk, wheat, fish } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question10</h5>
        <h2 className="qustion-title">Do you have any allergies?</h2>
        <p>Multiple choose</p>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={soy}
                defaultChecked={false}
                name="soy"
                onChange={this.handleInputValue}
              />
              Soy
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={nuts}
                defaultChecked={false}
                name="nuts"
                onChange={this.handleInputValue}
              />
              Nuts
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={milk}
                defaultChecked={false}
                name="milk"
                onChange={this.handleInputValue}
              />
              Milk
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={wheat}
                defaultChecked={false}
                name="wheat"
                onChange={this.handleInputValue}
              />
              Wheat
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={fish}
                defaultChecked={false}
                name="fish"
                onChange={this.handleInputValue}
              />
              Fish
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

export default Question10;
