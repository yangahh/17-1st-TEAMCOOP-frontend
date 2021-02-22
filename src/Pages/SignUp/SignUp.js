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
      confirmNum:true,
      pw_again:'',
      pwAlert: true,
      numberValid: true,
      allChecked: false,
      checked0: false,
      checked1: true,
      checked2: false,
      checkList:[],
    };
  }

  handleInputValue = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    const {number} = this.state;
    const checkNumber = !isNaN(number)&& number.length>=9 ;

    
    this.setState({
    numberValid: checkNumber? false: true,
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

//   handleChecked = (idx) => {
//     this.setState({
//       idx:!this.state[`checked$(idx)`]
//     })
// console.log(idx);
//   }


  isAllValid = event => {
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
    e.preventDefault();
    this.setState ({
      confirmNum: !this.state.confirmNum
    })
  
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

   isValidPw = (e) => {
     e.preventDefault();
     const{pw, pw_again} = this.state;
     const checkPwSame = pw === pw_again;

     this.setState({
       pwAlert: checkPwSame? true: false,
     })
   }


  render() {
    const {pwAlert}= this.state;
    console.log(this.state.numberValid);
    return (
      
      <div className="sign_up">
        <header>
          <span>Sign Up</span>
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
                <button disabled={this.state.numberValid} onClick={this.sendSMS} className="send">Send</button>
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
                <button onClick={this.checkCode} className="confirm">Confirm</button>
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
                onKeyUp= {this.isValidPw}
                name="pw_again"
                className="pw_box"
                type="text" 
                placeholder="Enter your password"
              />
              <span className={pwAlert? "pw_confirm": "pw_not_confirm" }>Different password.</span>
            </form>
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
          <button onClick={this.isAllValid} className="signup_btn">
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
