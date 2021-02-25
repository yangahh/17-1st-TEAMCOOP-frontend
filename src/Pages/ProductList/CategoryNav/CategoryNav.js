import React, { Component } from 'react';
import './CategoryNav.scss';

class CategoryNav extends Component {
  render() {
    const { currentCategory, handleCategory } = this.props;

    return (
      <nav className="CategoryNav">
        <div className={`nav-container ${currentCategory}Selected`}>
          <span>Shop by :</span>
          <span
            onClick={() => {
              handleCategory('category');
            }}
            className={currentCategory === 'category' ? 'selected' : 'none'}
          >
            Category
          </span>
          <span
            onClick={() => {
              handleCategory('healthGoal');
            }}
            className={currentCategory === 'healthGoal' ? 'selected' : 'none'}
          >
            Health Goal
          </span>
        </div>
      </nav>
    );
  }
}

export default CategoryNav;
