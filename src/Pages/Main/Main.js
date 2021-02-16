import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      scrollValue: 0,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.getScrolloValue);
  };

  componentWillUnMount = () => {
    window.removeEventListener('scroll', this.getScrolloValue);
  };

  getScrolloValue = event => {
    const scrollTop = ('scroll', event.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollValue: scrollTop,
    });
  };

  render() {
    const { scrollValue } = this.state;

    return (
      <div className="Main" onScroll={this.getScrolloValue}>
        <Nav scrollValue={scrollValue} />
        <div className="layout-content">
          <div className="main-content"></div>
        </div>
      </div>
    );
  }
}

export default Main;
