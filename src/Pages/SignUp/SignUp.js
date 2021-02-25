import React, { Component } from 'react';
import CheckList from './CheckList';
import './SignUp.scss';
import { signupAPI, smsAPI, checkAPI } from '../../config';
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name_box: '',
      number: '',
      id: '',
      pw: '',
      confirm: '',
      confirmNum: true,
      pw_again: '',
      pwAlert: true,
      numberValid: true,
      checkList: [],
      allChecked: false,
      check0: false,
      check1: false,
      check2: false,
    };
  }

  handleAllChecked = () => {
    const {allChecked} = this.state;

    if(allChecked === false) {
      this.setState({
        allChecked:true,
        check0: true,
        check1: true,
        check2: true,
      })
    } else {
      this.setState({
        allChecked:false,
        check0: false,
        check1: false,
        check2: false,
      })
    }
  };

  handleChecked =(idx) => {
    this.setState({
      [`check${idx}`]: !this.state[`check${idx}`],
    },() => {
      this.setState({
        allChecked: this.state.check0 && this.state.check1 && this.state.check2
      })
    })
  }


  handleInputValue = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    const { number } = this.state;
    const checkNumber = !isNaN(number) && number.length >= 9;

    this.setState({
      numberValid: checkNumber ? false : true,
    });
  };

  isAllValid = event => {
    fetch(
      { signupAPI },
      {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name_box,
          email: this.state.id,
          number: this.state.number,
          password: this.state.pw,
        }),
      },
    )
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/login');
          alert('회원가입 완료');
        } else {
          alert('실패');
        }
      });
  };

  sendSMS = e => {
    e.preventDefault();
    this.setState({
      confirmNum: !this.state.confirmNum,
    });

    fetch(
      { smsAPI },
      {
        method: 'POST',
        body: JSON.stringify({
          phone_number: this.state.number,
        }),
      },
    )
      .then(response => response.json())
      .then(result => {
        alert('SMS sent!');
        // if (result.message === 'SUCCESS') {
        //   // this.props.history.push('/login');
        //   // alert('회원가입 완료');
        // } else {
        //   alert('실패');
        // }
      });
  };

  checkCode = e => {
    fetch(
      { checkAPI },
      {
        method: 'POST',
        body: JSON.stringify({
          phone_number: this.state.number,
          auth_number: this.state.confirm,
        }),
      },
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // if (result.message === 'SUCCESS') {
        //   this.props.history.push('/login');
        //   alert('회원가입 완료');
        // } else {
        //   alert('실패');
        // }
      });
  };

  isValidPw = e => {
    e.preventDefault();
    const { pw, pw_again } = this.state;
    const checkPwSame = pw === pw_again;

    this.setState({
      pwAlert: checkPwSame ? true : false,
    });
  };

  
  render() {
    const { pwAlert, numberValid, allChecked } = this.state;

    return (
      <div className="SignUp">
        <header>
          <title>Sign Up</title>
        </header>
        <div className="signup_form">
          <div className="first_content">
            <form className="name_form">
              <label>Name</label>
              <input
                onChange={this.handleInputValue}
                name="name_box"
                className="name_box"
                type="text"
                placeholder="Enter your name"
                required
              />
            </form>
            <form className="phone_form">
              <label>Phone number</label>
              <div className="with_button">
                <input
                  onKeyPress={this.handleInputValue}
                  name="number"
                  className="number_box"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
                <button
                  disabled={numberValid}
                  onClick={this.sendSMS}
                  className="send"
                >
                  Send
                </button>
              </div>
            </form>
            <form className="confirm_form">
              <div className="with_button">
                <input
                  disabled={this.state.confirmNum}
                  onChange={this.handleInputValue}
                  name="confirm"
                  className="confirm_box"
                  type="text"
                  placeholder="Enter authentication number"
                />
                <button onClick={this.checkCode} className="confirm">
                  Confirm
                </button>
              </div>
            </form>
          </div>
          <div className="second_content">
            <form className="id_form">
              <label for="user_id">ID (EMAIL)</label>
              <br />
              <input
                onChange={this.handleInputValue}
                name="id"
                className="id_box"
                type="text"
                placeholder="Enter your ID"
              />
            </form>
            <form className="pw_form">
              <label for="user_pw">PASSWORD</label>
              <br />
              <input
                onChange={this.handleInputValue}
                name="pw"
                className="pw_box"
                type="text"
                placeholder="Enter your password"
              />
            </form>
            <form className="pw_again_form">
              <label for="pw_again">CONFIRM PASSWORD</label>
              <br />
              <input
                onChange={this.handleInputValue}
                onKeyUp={this.isValidPw}
                name="pw_again"
                className="pw_box"
                type="text"
                placeholder="Enter your password"
              />
              <span className={pwAlert ? 'pw_confirm' : 'pw_not_confirm'}>
                Different password.
              </span>
            </form>
          </div>
        </div>
        <div className="third_content">
          <div className="agree_all_terms">
            <input
              onClick={this.handleAllChecked}
              // onChange={this.handleAllChecked}
              checked={this.state.allChecked}
              type="checkbox"
              className="agree_all"
              id="agree_all"
              // name="allChecked"
            />
            <label for="agree_all">AGREE ALL TERMS</label>
          </div>

          <div className="termsview">
            {CHECKLIST_ARR.map((checkBox, idx) => {
              return (
                <CheckList
                  content={checkBox.content}
                  key={idx}
                  checked={this.state[checkBox.name]}
                  onClick={()=> this.handleChecked(idx)}
                />
              );
            })}
          </div>
        </div>
        <div>
          <button disabled={!this.state.allChecked} onClick={this.isAllValid} className="signup_btn">
            <span>Sign Up</span>
          </button>
        </div>
        <div className="copyright">
          &copy; Carewith Inc. All Rights Reserved.
        </div>
      </div>
    );
  }
}
const CHECKLIST_ARR = [
  { content: 'Agree terms view', name: 'check0' },
  { content: 'Agree Privacy Policy', name: 'check1' },
  { content: 'Agreeing To Recieve Marketing (optional)', name: 'check2' },
];
export default SignUp;
