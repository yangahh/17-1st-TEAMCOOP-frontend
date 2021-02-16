import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    const { scrollValue } = this.props;

    return (
      <div className="Nav">
        <nav className={scrollValue ? 'nav-white' : 'nav-transparent'}>
          <div className="nav-container">
            <ul className="nav-left-container">
              <li className="nav-item">
                <span>SHOP</span>
                <section className="dropdown-menu">
                  <div className="dropdown-link-column">
                    <h4>VITAMINS</h4>
                    <ul>
                      <li className="product-items">
                        <Link to="/productList">Letter Vitamins</Link>
                      </li>
                      <li>
                        <Link to="/productList">Minerals</Link>
                      </li>
                      <li>
                        <Link to="/productList">Herbs</Link>
                      </li>
                      <li>
                        <Link to="/productList">Probiotics</Link>
                      </li>
                      <li>
                        <Link to="/productList">Specialty</Link>
                      </li>
                      <li>
                        <Link to="/productList">See all</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-link-column">
                    <h4>POWDERS</h4>
                    <ul>
                      <li>
                        <Link to="/productList">Collagen</Link>
                      </li>
                      <li>
                        <Link to="/productList">Protein</Link>
                      </li>
                      <li>
                        <Link to="/productList">Boosts</Link>
                      </li>
                      <li>
                        <Link to="/productList">See All</Link>
                      </li>
                    </ul>
                  </div>
                </section>
              </li>
              <li>
                <span>REVIEW</span>
              </li>
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
