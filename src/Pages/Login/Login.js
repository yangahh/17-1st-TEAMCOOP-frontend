import React, { Component } from 'react';
import { SERVER } from '../../config';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isValid: true,
    };
  }

  handleAllInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //   gotoMain = () => {
  //    if(this.state.id.includes("@") && this.state.pw.length >=8){
  //   fetch("http://10.58.5.21:8003/user/login" , {
  //     method:"POST",
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       password: this.state.pw,
  //     })
  //     .then ()
  //   })
  // }}

  gotoMain = () => {
    if (this.state.id.includes('@') && this.state.pw.length >= 8) {
      fetch(`${SERVER}/user/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.pw,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            sessionStorage.setItem('access_token', result.access_token);
            this.props.history.push('/');
            alert('로그인 성공');
          } else {
            alert('로그인 실패');
          }
        });
    }
  };

  isValidIdPw = e => {
    const { id, pw } = this.state;
    const validIdPw = id.includes('@') && pw.length >= 6;

    this.setState({
      isValid: validIdPw,
    });
  };

  render() {
    const { isValid } = this.state;
    return (
      <div className="Login">
        <header>
          <div className="existing_customer">
            <span>LOGIN AS EXISTING CUSTOMER</span>
          </div>
        </header>
        <div className="login_form">
          <span className={isValid ? 'valid' : 'Invalid'}>
            Invalid email or password.
          </span>
          <div className="id_form">
            <label>
              EMAIL
              <input
                type="text"
                onKeyUp={this.isValidIdPw}
                onChange={this.handleAllInput}
                name="id"
                className="id_box"
              />
            </label>
          </div>
          <div className="pw_form">
            <label>
              PASSWORD
              <input
                type="password"
                onKeyUp={this.isValidIdPw}
                onChange={this.handleAllInput}
                name="pw"
                className="pw_box"
              />
            </label>
          </div>
          <div className="check_box">
            <label for="remember_me">
              <input type="checkbox" id="remember_me" name="remember_me" />
              REMEMBER ME
            </label>
          </div>
          <button onClick={this.gotoMain} className="login_btn">
            Login
          </button>
          <div className="forget_pw">
            <a href="https://takecareof.com">Forget Password?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
