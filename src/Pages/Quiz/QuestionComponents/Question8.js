import React, { Component } from 'react';
import './Question.scss';

class Question8 extends Component {
  constructor() {
    super();
    this.state = {
      Immunity: false,
      Brain: false,
      Energy: false,
      Eyes: false,
      Heart: false,
      Digestion: false,
      Bones: false,
      Fitness: false,
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
      Immunity,
      Brain,
      Energy,
      Eyes,
      Heart,
      Digestion,
      Bones,
      Fitness,
    } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question8</h5>
        <h2 className="qustion-title">What is your health goal?</h2>
        <p>Choose maximum two</p>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={Immunity}
                defaultChecked={false}
                name="Immunity"
                onChange={this.handleInputValue}
              />
              Immunity
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={Brain}
                defaultChecked={false}
                name="Brain"
                onChange={this.handleInputValue}
              />
              Brain
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={Energy}
                defaultChecked={false}
                name="Energy"
                onChange={this.handleInputValue}
              />
              Energy
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={Eyes}
                defaultChecked={false}
                name="Eyes"
                onChange={this.handleInputValue}
              />
              Eyes
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={Heart}
                defaultChecked={false}
                name="Heart"
                onChange={this.handleInputValue}
              />
              Heart
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={Digestion}
                defaultChecked={false}
                name="Digestion"
                onChange={this.handleInputValue}
              />
              Digestion
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={Bones}
                defaultChecked={false}
                name="Bones"
                onChange={this.handleInputValue}
              />
              Bones
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={Fitness}
                defaultChecked={false}
                name="Fitness"
                onChange={this.handleInputValue}
              />
              Fitness
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

export default Question8;
