import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    const { scrollValue } = this.props;

    return (
      <div className="Nav">
        <nav className={scrollValue ? 'nav-white' : 'nav-transparent'}>
          <div className="nav-container">
            <ul className="nav-left-container">
              <li>SHOP</li>
              <li>REVIEW</li>
            </ul>
            <div className="logo">core/of</div>
            <ul className="nav-right-container">
              <li>SIGN IN</li>
              <li>
                <img
                  alt="user_icon"
                  src="https://www.flaticon.com/svg/vstatic/svg/633/633779.svg?token=exp=1613461834~hmac=347842e2efa7c2db1f43caff23b7df96"
                />
              </li>
              <li>
                <img
                  alt="cart_icon"
                  src="https://www.flaticon.com/svg/vstatic/svg/685/685370.svg?token=exp=1613466029~hmac=c80aa4d64a80d25a482b121b896f549f"
                />
              </li>
              <li>
                <button>Take the quiz</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
