import React, { Component } from 'react';
import CategoryNav from './CategoryNav/CategoryNav';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory: 'category',
    };
  }

  handleCategory = target => {
    this.setState({ currentCategory: target });
  };

  render() {
    console.log(this.state.currentCategory);
    return (
      <div className="product-list">
        <CategoryNav
          handleCategory={this.handleCategory}
          currentActive={`${this.state.currentCategory}Selected`}
        />
      </div>
    );
  }
}

export default ProductList;
