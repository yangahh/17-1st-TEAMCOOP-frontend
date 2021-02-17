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

  getCategoryData = () => {
    fetch('/data/categoryData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          category: data,
        });
      });
  };

  gethealthGoalData = () => {
    fetch('/data/healthGoalData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          healthGoal: data,
        });
      });
  };

  getVitaminDetailData = () => {
    fetch('/data/vitaminDetailData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productDatas: data,
        });
      });
  };

  getPowderDetailData = () => {
    fetch('/data/powderDetailData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          powderDatas: data,
        });
      });
  };

  componentDidMount() {
    this.getCategoryData();
    this.gethealthGoalData();
    this.getVitaminDetailData();
    this.getPowderDetailData();
  }

  handleCategory = target => {
    this.setState({ currentCategory: target });
  };

  render() {
    const {
      currentCategory,
      category,
      healthGoal,
      productDatas,
      powderDatas,
    } = this.state;

    return (
      <div className="productList">
        <CategoryNav
          handleCategory={this.handleCategory}
          currentCategory={currentCategory}
        />
        <section>
          <div className="wrapper">
            <CategoryList
              className="category-list"
              selectedCategory={
                currentCategory === 'category' ? category : healthGoal
              }
            />
            <ProductCardsGroup
              productDatas={productDatas}
              powderDatas={powderDatas}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
