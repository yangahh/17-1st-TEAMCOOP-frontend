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
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEzLjMyMyA1MTMuMzIzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTMuMzIzIDUxMy4zMjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LjY2MSwyNTcuMzIzYy0xMzUuMjc1LDAtMjQ1LjMzMywxMTAuMDU5LTI0NS4zMzMsMjQ1LjMzM2MwLDUuODg4LDQuNzc5LDEwLjY2NywxMC42NjcsMTAuNjY3DQoJCQlzMTAuNjY3LTQuNzc5LDEwLjY2Ny0xMC42NjdjMC0xMjMuNTIsMTAwLjQ4LTIyNCwyMjQtMjI0czIyNCwxMDAuNDgsMjI0LDIyNGMwLDUuODg4LDQuNzc5LDEwLjY2NywxMC42NjcsMTAuNjY3DQoJCQljNS44ODgsMCwxMC42NjctNC43NzksMTAuNjY3LTEwLjY2N0M1MDEuOTk1LDM2Ny4zNiwzOTEuOTM2LDI1Ny4zMjMsMjU2LjY2MSwyNTcuMzIzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LjY2MSwwYy02NC42ODMsMC0xMTcuMzMzLDUyLjYyOS0xMTcuMzMzLDExNy4zMzNzNTIuNjUxLDExNy4zMzMsMTE3LjMzMywxMTcuMzMzczExNy4zMzMtNTIuNjI5LDExNy4zMzMtMTE3LjMzMw0KCQkJUzMyMS4zNDQsMCwyNTYuNjYxLDB6IE0yNTYuNjYxLDIxMy4zMzNjLTUyLjkyOCwwLTk2LTQzLjA3Mi05Ni05NnM0My4wNzItOTYsOTYtOTZjNTIuOTI4LDAsOTYsNDMuMDcyLDk2LDk2DQoJCQlTMzA5LjU4OSwyMTMuMzMzLDI1Ni42NjEsMjEzLjMzM3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                  />
                </li>
              </Link>
              <Link to="/cart">
                <li>
                  <img
                    alt="cart_icon"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjx0aXRsZT5QYWNrYWdlXzE8L3RpdGxlPjxwYXRoIGQ9Ik00NTkuNSwxMzQuNDY4LDI1OS41LDE5YTcsNywwLDAsMC03LDBMNTIuNSwxMzQuNDY4QTcsNywwLDAsMCw0OSwxNDAuNTNWMzcxLjQ3YTcsNywwLDAsMCwzLjUsNi4wNjJMMjUyLjUsNDkzYTcuMDA1LDcuMDA1LDAsMCwwLDcsMGwyMDAtMTE1LjQ3MWE3LDcsMCwwLDAsMy41LTYuMDYyVjE0MC41M0E3LDcsMCwwLDAsNDU5LjUsMTM0LjQ2OFpNMjU2LDMzLjE0M2w4NC4wMjQsNDguNTExTDE1NC4wMzgsMTg5LjAzMyw3MC4wMTQsMTQwLjUyMlptLTcsNDQxLjY3M0w2MywzNjcuNDI5VjE1Mi42MzhMMjQ5LDI2MC4wMjZaTTI1NiwyNDcuOWwtODcuOTYxLTUwLjc4NUwzNTQuMDI1LDg5LjczN2w4Ny45NjEsNTAuNzg1Wk00NDksMzY3LjQyOSwyNjMsNDc0LjgxNlYyNjAuMDI2TDQ0OSwxNTIuNjM4WiIvPjwvc3ZnPgo="
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
