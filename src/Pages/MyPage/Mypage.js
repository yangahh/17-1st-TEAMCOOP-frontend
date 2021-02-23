import React, { Component } from 'react';
import './MyPage.scss'

class Mypage extends Component {
  // constructor(){
  //   super();
  //   this.state={

  //   };
  // }

  render() {
    return (

      <div className="Mypage">
        <form className= "left_content">
        <h3>User Info</h3>
        <ul className="my_page_list">
          <li>Core Survey Info</li>
          <li>Payment Info</li>
        </ul>
        </form>
        <form className= "right_content">
          <header>
            <p>User Information</p>
          </header>
          <div className="user_id">
          <p>User Email(Id)</p>
          <p>jenna8447@naver.com</p>
          </div>
          
          <section>
          <div className="phone_number">
          <p>Phone number</p>
          <p>0109618447</p>
          <button>Change Phone Number</button>
          </div>
          </section>
          <section>
          <div className="user_info">
            <p>User Information</p>
            <p>이지은</p>
            <button>Revise Personal Information</button>
          </div>
          </section>
          <section>
            <div className="marketing">
              <p>
                <label>Email:</label>
                <select name="email_option" id="email_option">
                  <option value="OFF">OFF</option>
                  <option value="ON">ON</option>
                </select>
                <label>SMS:</label>
                <select name="SMS_option" id="SMS_option">
                  <option value="OFF">OFF</option>
                  <option value="ON">ON</option>
                </select>
                </p>
              <button>Change Marketing Alert</button>
              <div>
              <a href="https://takecareof.com/">Withdrawl</a>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default Mypage;