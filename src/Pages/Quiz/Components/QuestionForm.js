import React, { Component } from 'react';
import InputText from '../Components/InputText';
import InputCheck from '../Components/InputCheck';
import Button from '../Components/Button';
import './QuestionForm.scss';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    this.handleInputValue;
  }

  handleInputValue = (name, value) => {
    // const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  render() {
    const { QuestionData, questionId, handleSubmit } = this.props;
    // console.log(this.props);
    return (
      <div className="QuestionForm">
        <h5 className="question-count">Question{QuestionData.count}</h5>
        <h2 className="qustion-title">{QuestionData.title}</h2>
        <p>{QuestionData.chooseCount}</p>
        {QuestionData.inputData.length === 1 &&
        QuestionData.inputData[0].type === 'text' ? (
          <form className="textbox">
            {QuestionData.inputData.map((data, index) => {
              return (
                <InputText
                  key={index}
                  type={data.type}
                  name={data.name}
                  value={data.value}
                  maxLength={data.maxLength}
                  handleInputValue={this.handleInputValue.bind(this)}
                />
              );
            })}
            <Button
              type="button"
              handleSubmit={handleSubmit}
              questionId={questionId}
              answer={this.state}
            >
              NEXT
            </Button>
          </form>
        ) : (
          ''
        )}

        {QuestionData.inputData.length === 2 &&
        QuestionData.inputData[0].type === 'text' ? (
          <form className="two-textbox">
            {QuestionData.inputData.map((data, index) => {
              return (
                <InputText
                  key={index}
                  type={data.type}
                  name={data.name}
                  value={data.value}
                  maxLength={data.maxLength}
                  placeholder={data.placeholder}
                  handleInputValue={this.handleInputValue.bind(this)}
                />
              );
            })}
            <Button
              type="button"
              handleSubmit={handleSubmit}
              questionId={questionId}
              answer={this.state}
            >
              NEXT
            </Button>
          </form>
        ) : (
          ''
        )}

        {QuestionData.inputData[0].type === 'checkbox' ? (
          <div>
            <ul className="qustion-answer-wrap">
              {QuestionData.inputData.map((data, index) => {
                return (
                  <InputCheck
                    key={index}
                    type={data.type}
                    name={data.name}
                    value={data.value}
                    innerHtml={data.innerHtml}
                    handleInputValue={this.handleInputValue.bind(this)}
                  />
                );
              })}
            </ul>
            <Button
              type="button"
              handleSubmit={handleSubmit}
              questionId={questionId}
              answer={this.state}
            >
              NEXT
            </Button>
          </div>
        ) : (
          ''
        )}

        {/* <Button
          type="button"
          onClick={() => handleSubmit(this.state, questionId)}
        >
          NEXT
        </Button> */}
      </div>
    );
  }
}

export default QuestionForm;
