import React, { Component } from 'react';
import './CategoryNav.scss';

class CategoryNav extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory: 'categorySelected',
    };
  }

  handleCategoryBorder = category => {
    this.setState({ currentCategory: category });
  };

  render() {
    return (
      <nav className="CategoryNav">
        <div className={`nav-container ${this.state.currentCategory}`}>
          <span>Shop by :</span>
          <span
            onClick={() => {
              this.props.handleCategory('category');
              this.handleCategoryBorder('categorySelected');
            }}
            className={
              this.state.currentCategory === 'categorySelected'
                ? 'selected'
                : 'none'
            }
          >
            Category
          </span>
          <span
            onClick={() => {
              this.props.handleCategory('healthGoal');
              this.handleCategoryBorder('healthGoalSelected');
            }}
            className={
              this.state.currentCategory === 'healthGoalSelected'
                ? 'selected'
                : 'none'
            }
          >
            Health Goal
          </span>
        </div>
      </nav>
    );
  }
}

export default CategoryNav;
