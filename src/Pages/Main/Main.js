import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="layout-content">
          <div className="main-view-content">
            <div className="main-view-text">
              <div className="main-view-header">
                You know your body, we know the science. Let’s work together.
              </div>
            </div>
          </div>
          <div className="main-point-content"></div>
        </div>
      </div>
    );
  }
}

export default Main;
