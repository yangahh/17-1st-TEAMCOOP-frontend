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
              <li className="nav-item shop-dropdown">
                <span>SHOP</span>
                <section className="dropdown-menu">
                  <div className="dropdown-menu-wrap">
                  <div className="dropdown-link-column">
                    <h4>VITAMINS</h4>
                    <ul>
                      <Link to="/productList">
                        <li className="product-items">Letter Vitamins</li>
                      </Link>
                      <Link to="/productList">
                        <li>Minerals</li>
                      </Link>
                      <Link to="/productList">
                        <li>Herbs</li>
                      </Link>
                      <Link to="/productList">
                        <li>Probiotics</li>
                      </Link>
                      <Link to="/productList">
                        <li>Specialty</li>
                      </Link>
                      <Link to="/productList">
                        <li className="main-color">See all</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="dropdown-link-column">
                    <h4>POWDERS</h4>
                    <ul>
                      <Link to="/productList">
                        <li>Collagen</li>
                      </Link>
                      <Link to="/productList">
                        <li>Protein</li>
                      </Link>
                      <Link to="/productList">
                        <li>Boosts</li>
                      </Link>
                      <Link to="/productList">
                        <li className="main-color">See All</li>
                      </Link>
                    </ul>
                  </div>
                  </div>
                </section>
              </li>
              <Link to="/review">
                <li className="nav-item">
                  <span>REVIEW</span>
                </li>
              </Link>
            </ul>
            <Link to="/">
              <div className="logo">core/of</div>
            </Link>
            <ul className="nav-right-container">
              <Link to="/signup">
                <li>SIGN IN</li>
              </Link>
              <Link to="/signup">
                <li>
                  <img
                    alt="user_icon"
                    src="https://www.flaticon.com/svg/vstatic/svg/633/633779.svg?token=exp=1613489175~hmac=19085fa5a5aafa26259c66426dbf5fe3"
                  />
                </li>
              </Link>
              <Link to="/cart">
                <li>
                  <img
                    alt="cart_icon"
                    src="https://www.flaticon.com/svg/vstatic/svg/1524/1524676.svg?token=exp=1613489103~hmac=7194d4559841d15b5043fc8718cc3b05"
                  />
                </li>
              </Link>
              <li>
                <Link to="/quiz">
                  <button>Take the quiz</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
