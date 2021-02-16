import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="sign_up">
        <header>
          <div>Sign Up</div>
        </header>
        <form>
          <div className="name_form">
            <label for="user_name">Name</label>
            <br />
            <input name="id" className="name_box" type="text" placeholder='enter your name'/>
          </div>
          <div className="phone_number">
            <label for="phone_number">Phone number</label>
            <br />
            <input name="number" className="number_box" type="text" placeholder='enter your phone number'/> 
            <button className=''>Send authentication</button>
          </div>
          <div className="confirm_number">
            <input name="confirm" className="confirm_box" type="text" placeholder='enter authentication number' />
            <button className=''>Confirm</button>
          </div>

        </form>
      </div>
    );
  }
}

export default SignUp;
