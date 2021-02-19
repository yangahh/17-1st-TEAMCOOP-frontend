import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ICONDATA from './navIconData';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isNavTransparent: true,
      powdersMenuData: [],
      vitaminsMenuData: [],
      iconData: [],
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.getDropdownMenuData();
    this.getIconData();
  };

  componentWillUnMount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    this.setState({
      isNavTransparent: !window.pageYOffset > 0,
    });
  };

  getDropdownMenuData = () => {
    fetch('/data/powdersMenuData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          powdersMenuData: data,
        });
      });

    fetch('/data/vitaminsMenuData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          vitaminsMenuData: data,
        });
      });
  };

  getIconData = () => {
    this.setState({
      iconData: ICONDATA,
    });
  };

  render() {
    const {
      isNavTransparent,
      vitaminsMenuData,
      powdersMenuData,
      iconData,
    } = this.state;
    return (
      <nav className={isNavTransparent ? 'nav-transparent' : 'nav-white'}>
        <div className="nav-container">
          <ul className="left-container">
            <li className="nav-item shop-dropdown">
              <span>SHOP</span>
              <section className="dropdown-menu">
                <div className="dropdown-menu-wrap">
                  <div className="dropdown-link-column">
                    <h4>VITAMINS</h4>
                    <ul>
                      {vitaminsMenuData.map(menu => {
                        return (
                          <Link to={menu.link}>
                            <li className="product-items">{menu.title}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="dropdown-link-column">
                    <h4>POWDERS</h4>
                    <ul>
                      {powdersMenuData.map(menu => {
                        return (
                          <Link to={menu.link}>
                            <li>{menu.title}</li>
                          </Link>
                        );
                      })}
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
          <ul className="right-container">
            <Link to="/signup">
              <li>SIGN IN</li>
            </Link>
            {iconData.map(icon => {
              return (
                <Link to={icon.link}>
                  <li>
                    <img alt={icon.name} src={icon.src} />
                  </li>
                </Link>
              );
            })}
            <li>
              <Link to="/quiz">
                <button>Take the quiz</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
