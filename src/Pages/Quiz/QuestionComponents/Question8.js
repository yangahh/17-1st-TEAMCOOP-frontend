import React, { Component } from 'react';
import './Question.scss';

class Question8 extends Component {
  constructor() {
    super();
    this.state = {
      immunity: false,
      brain: false,
      energy: false,
      eyes: false,
      heart: false,
      digestion: false,
      bones: false,
      fitness: false,
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
      immunity,
      brain,
      energy,
      eyes,
      heart,
      digestion,
      bones,
      fitness,
    } = this.state;
    const { questionId, handleSubmit } = this.props;
    return (
      <div className="Question">
        <h5 className="question-count">Question8</h5>
        <h2 className="qustion-title">What is your health goal?</h2>
        <ul className="qustion-answer-wrap">
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={immunity}
                defaultChecked={false}
                name="immunity"
                onChange={this.handleInputValue}
              />
              Immunity
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={brain}
                defaultChecked={false}
                name="brain"
                onChange={this.handleInputValue}
              />
              Brain
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={energy}
                defaultChecked={false}
                name="energy"
                onChange={this.handleInputValue}
              />
              Energy
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={eyes}
                defaultChecked={false}
                name="eyes"
                onChange={this.handleInputValue}
              />
              Eyes
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={heart}
                defaultChecked={false}
                name="heart"
                onChange={this.handleInputValue}
              />
              Heart
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={digestion}
                defaultChecked={false}
                name="digestion"
                onChange={this.handleInputValue}
              />
              Digestion
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={bones}
                defaultChecked={false}
                name="bones"
                onChange={this.handleInputValue}
              />
              Bones
            </label>
          </li>
          <li>
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={fitness}
                defaultChecked={false}
                name="fitness"
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
