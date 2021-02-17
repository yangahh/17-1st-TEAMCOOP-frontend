import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="layout-content">
          <div className="main-view-content">
            <div className="main-view-text">
              <h2 className="main-view-header">
                You know your body, we know the science. Let’s work together.
              </h2>
              <p className="main-view-subheader">
                Find the right vitamins, protein, and now collagen too,
                personalized just for you.
              </p>
              <Link to="/quiz">
                <button className="quiz-button">Take the quiz</button>
              </Link>
              <Link to="/productlist" className="product-link">
                Browse all products
              </Link>
            </div>
          </div>
          <div className="main-point-content"></div>
        </div>
      </div>
    );
  }
}

export default Main;
