import React, { Component } from 'react';
import './MyPage.scss'

class MyPage extends Component {
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
          <input className="write_review" type="textarea"/>
        </form>
      </div>
    );
  }
}

export default MyPage;