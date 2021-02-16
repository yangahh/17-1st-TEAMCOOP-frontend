import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="sign_up">
        <header>
          <p>Sign Up</p>
        </header>
        <div name="first_content">
          <div className="name_form">
            <label for="user_name">Name</label>
            <br />
            <input
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
              name="number"
              className="number_box"
              type="text"
              placeholder="enter your phone number"
            />
            <button className="send">Send authentication</button>
          </div>
          <div className="confirm_number">
            <input
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
              name="pw"
              className="pw_box"
              type="text"
              placeholder="enter your pw"
            />
          </div>
        </div>
        <div className="third_content">
        <div class="termsview">
          <label for="label-checkbox">
            <input name="termsService" type="checkbox" className="input-checkbox inp-terms" >
              <span>이용 약관 동의</span> 
            </label>
            </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
