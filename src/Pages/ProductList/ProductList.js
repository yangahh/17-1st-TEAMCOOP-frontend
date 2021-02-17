import React, { Component } from 'react';
import CategoryNav from './CategoryNav/CategoryNav';
import CategoryList from './CategoryList/CategoryList';
import ProductCardsGroup from './ProductCardsGroup/ProductCardsGroup';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory: 'category',
      category: [],
      healthGoal: [],
      productDatas: [],
      powderDatas: [],
    };
  }

  componentDidMount() {
    fetch('/data/categoryData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          category: data,
        });
      });

    fetch('/data/healthGoalData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          healthGoal: data,
        });
      });

    fetch('/data/vitaminDetailData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productDatas: data,
        });
      });

    fetch('/data/powderDetailData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          powderDatas: data,
        });
      });
  }

  handleCategory = target => {
    this.setState({ currentCategory: target });
  };

  render() {
    return (
      <div className="productList">
        <CategoryNav
          handleCategory={this.handleCategory}
          currentActive={`${this.state.currentCategory}Selected`}
        />
        <section>
          <div className="wrapper">
            <CategoryList
              className="category-list"
              currentList={
                this.state.currentCategory === 'category'
                  ? this.state.category
                  : this.state.healthGoal
              }
            />
            <ProductCardsGroup
              productDatas={this.state.productDatas}
              powderDatas={this.state.powderDatas}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
