import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name_box: '',
      number: '',
      confirm: '',
      id: '',
      pw: '',
    };
  }

  handleAllInput = e => {
    this.setState({
      [e.target.name]: 'e.target.value',
    });
  };

  // gotoMain = event => {
  //   fetch('', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: this.state.name_box,
  //       number: this.state.number,
  //       confirm: this.state.confirm,
  //       email: this.state.id,
  //       password: this.state.pw,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.message === '') {
  //         this.props.history.push('/login');
  //         alert('회원가입 완료');
  //       } else {
  //         alert('실패');
  //       }
  //     });
  // };

  render() {
    console.log(this.state.name_box);
    return (
      <div className="sign_up">
        <div className= "signup_form">
        <header>
          <p>Sign Up</p>
        </header>
        <div name="first_content">
          <div className="name_form">
            <label for="user_name">Name</label>
            <br />
            <input
              onChange={this.handleAllInput}
              name="name_box"
              className="name_box"
              type="text"
              placeholder="enter your name"
            />
          </div>
          <div className="phone_number">
            <label for="phone_number">Phone number</label>
            <br />
            <input
              onChange={this.handleAllInput}
              name="number"
              className="number_box"
              type="text"
              placeholder="enter your phone number"
            />
            <button className="send">Send authentication</button>
          </div>
          <div className="confirm_number">
            <input
              onChange={this.handleAllInput}
              name="confirm"
              className="confirm_box"
              type="text"
              placeholder="enter authentication number"
            />
            <button className="confirm">Confirm</button>
          </div>
        </div>

        <div name="second_content">
          <div className="user_id">
            <label for="user_id">ID(EMAIL)</label>
            <br />
            <input
              onChange={this.handleAllInput}
              name="id"
              className="id_box"
              type="text"
              placeholder="enter your id"
            />
          </div>
          <div className="user_pw">
            <label for="user_pw">PASSWORD</label>
            <br />
            <input
              onChange={this.handleAllInput}
              name="pw"
              className="pw_box"
              type="text"
              placeholder="enter your pw"
            />
          </div>
          <div className="user_pw_again">
            <label for="pw_again">CONFIRM PASSWORD</label>
            <br />
            <input
              onChange={this.handleAllInput}
              name="pw_again"
              className="pw_box"
              type="text"
              placeholder="enter your pw"
            />
          </div>
          <div className="agree_all_terms">
            <input name="agree_all" type="checkbox" className="agree_all" />
            <label for="agree_all">AGREE ALL TERMS</label>
          </div>
        </div>
        <div className="third_content">
          <div className="termsview1">
            <input
              name="termsService"
              type="checkbox"
              className="input-checkbox1"
            />
            <label>Agree terms view</label>
            <a href="https://takecareof.com">View Details</a>
          </div>
          <div className="termsview2">
            <input
              name="termsService"
              type="checkbox"
              className="input-checkbox2"
            />
            <label>Agree Privacy Policy</label>
            <a href="https://takecareof.com">View Details</a>
          </div>
          <div className="termsview3">
            <input
              name="termsService"
              type="checkbox"
              className="input-checkbox3"
            />
            <label>Agreeing To Recieve Marketing (optional) </label>
            <a href="https://takecareof.com">View Details</a>
          </div>
        </div>
        <div>
          <button className="signup_btn">
            <span>SignUp</span>
          </button>
        </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
