import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleAllInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
 
  render() {
    return (
      <div className="Login">
        <header>
          <div className='existing_customer'>
            <span>LOGIN AS EXISTING CUSTOMER</span>
          </div>
        </header>
        <div className="login_form">
          <div className='id_form'>
            <label>EMAIL
              <input type="text" onChange={this.handleAllInput} name="id" className="id_box" /> 
            </label>
          </div>
          <div className='pw_form'>
            <label>PASSWORD
              <input type="password" onChange={this.handleAllInput} name="pw" className="pw_box" /> 
            </label>
          </div>
          <div className='check_box'>
            <label for="remember_me">
              <input type="checkbox" id="remember_me" name="remember_me"/> 
              REMEMBER ME
            </label>
          </div>
          <button onClick = {this.gotoMain} className="login_btn">Login</button>
          <div className= 'forget_pw'>
            <a href="https://takecareof.com">Forget Password?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
