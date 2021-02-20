import React, { Component } from 'react';
import CheckList from './CheckList';
import './SignUp.scss';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name_box: '',
      number: '',
      id: '',
      pw: '',
      confirm: '',
      allChecked: false,
      checked0: false,
      checked1: true,
      checked2: false,
      checkList:[],
    };
  }

  handleAllInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAllChecked = () => {
    const {allChecked} =this.state;
    this.setState({
      allChecked:!allChecked,
      checked0: !allChecked,
      checked1: !allChecked,
      checked2: !allChecked,
    })
  };

  handleChecked = (idx) => {
    this.setState({
      idx:!this.state[`checked$(idx)`]
    })
console.log(idx);
  }

  // handleChecked = (index) => {
  //   console.log(index);
  //   this.setState({
  //     ['checked$(index)']:!this.state[checked$(index)]
  //   })
  // }

  gotoMain = event => {
    fetch('http://10.58.5.21:8003/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name_box,
        email: this.state.id,
        number: this.state.number,
        password: this.state.pw,
      }),
    })
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
    // console.log(this.state);
    e.preventDefault();

    fetch('http://10.58.5.21:8003/user/sms', {
      method: 'POST',
      body: JSON.stringify({
        phone_number: this.state.number,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        // if (result.message === 'SUCCESS') {
        //   // this.props.history.push('/login');
        //   // alert('회원가입 완료');
        // } else {
        //   alert('실패');
        // }
      });
  }

  checkCode = e => {
    fetch('http://10.58.5.21:8003/user/sms-validation', {
      method: 'POST',
      body: JSON.stringify({
        phone_number: this.state.number,
        auth_number: this.state.confirm,
      }),
    })
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
  }


  render() {
    // console.log(this.state.name_box);
    return (
      
      <div className="sign_up">
        <header>
          <span>Sign Up</span>
        </header>
        <div className="signup_form">
          <div className="first_content">
            <div className="name_form">
              <label>Name</label>
              <input
                onChange={this.handleAllInput}
                name="name_box"
                className="name_box"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="phone_form">
              <label>Phone number</label>
              <div className="with_button">
                <input
                  onChange={this.handleAllInput}
                  name="number"
                  className="number_box"
                  type="text"
                  placeholder="Enter your phone number"
                />
                <button onClick={this.sendSMS} className="send">Send</button>
              </div>
            </div>
            <div className="confirm_form">
              <div className="with_button">
                <input
                  disabled
                  onChange={this.handleAllInput}
                  name="confirm"
                  className="confirm_box"
                  type="text"
                  placeholder="Enter authentication number"
                />
                <button onClick={this.checkCode} className="confirm">Confirm</button>
              </div>
            </div>
          </div>
          <div className="second_content">
            <div className="id_form">
              <label for="user_id">ID (EMAIL)</label>
              <br />
              <input
                onChange={this.handleAllInput}
                name="id"
                className="id_box"
                type="text"
                placeholder="Enter your ID"
              />
            </div>
            <div className="pw_form">
              <label for="user_pw">PASSWORD</label>
              <br />
              <input
                onChange={this.handleAllInput}
                name="pw"
                className="pw_box"
                type="text"
                placeholder="Enter your password"
              />
            </div>
            <div className="pw_again_form">
              <label for="pw_again">CONFIRM PASSWORD</label>
              <br />
              <input
                onChange={this.handleAllInput}
                name="pw_again"
                className="pw_box"
                type="text"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </div>
        <div className="third_content">
          <div className="agree_all_terms">
            <input
              onClick={this.handleAllChecked}
              checked={this.state.allChecked}
              type="checkbox"
              className="agree_all"
              id="agree_all"
            />
            <label for="agree_all">AGREE ALL TERMS</label>
          </div>
          
          <div className="termsview">
          {CHECKLIST_ARR.map((term,idx) => {
                return (
                <CheckList term={term} idx={idx} onClick={this.handleChecked} checked={`this.state.checked${idx}`}/>)
              })}
          </div>
        </div>
        <div>
          <button onClick={this.gotoMain} className="signup_btn">
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

const CHECKLIST_ARR = ["Agree terms view", "Agree Privacy Policy", "Agreeing To Recieve Marketing (optional)"]

export default SignUp;
