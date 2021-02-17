import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      color: 'black',
      id: '',
      pw: '',
    };
  }

  handleAllInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // console.log(e.target.name, e.target.value)


  
  gotoMain = () => {
    if(this.state.id.includes("@") && this.state.pw.length >=8){
    fetch("" , {
      method:"POST", 
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      })
    })
    .then((response) => response.json())
    .then((result) => {
       if (result.message === "SUCCESS") {
         localStorage.setItem('token', result.token);
         this.props.history.push("/");
         alert("로그인 성공");
       }else { alert("로그인 실패"); console.log(result.message);}
     }
     )
   }
  };
 
  render() {
    return (
      <div className="container">
          <header>
            <div className='existing_customer'><span>LOGIN AS EXISTING CUSTOMER</span></div>
          </header>
          <div className="login_form">
            <div className='id_form'>
              <label for="user_email">EMAIL</label>
              <br />
              <input onChange={this.handleAllInput} name="id" className="id_box" type="text" />
            </div>
            <div className='pw_form'>
              <label for="user_pw">PASSWORD</label>
              <br />
              <input onChange={this.handleAllInput} name="pw" className="pw_box" type="password" />
            </div>
            <div className='check_box'>
              <input type="checkbox" id="remember_me" name="remember_me"/> 
                <label for="remember_me">REMEMBER ME</label>
            </div>
            <div>
              <button onClick = {this.gotoMain} className="login_btn"><span>Login</span></button>
            </div>
            <div className= 'forget_pw'>
            <a href="https://takecareof.com"><span>Forget Password?</span></a>
            </div>
      </div>
      </div>
    );
  }
}

export default Login;
