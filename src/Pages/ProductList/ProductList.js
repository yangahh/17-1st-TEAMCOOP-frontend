import React, { Component } from 'react';
import CategoryNav from './CategoryNav/CategoryNav';
import CategoryList from './CategoryList/CategoryList';
import ProductCardsGroup from './ProductCardsGroup/ProductCardsGroup';
import './ProductList.scss';

import { SERVER } from '../../config';

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

  fetchShowAll = () => {
    fetch(`${SERVER}/product?sort=all`, {
      method: 'GET',
    })
      .then(response => response.json())
      // .then(res => console.log(res));
      .then(res => {
        this.setState({
          powderDatas: res.data.splice(5, 8),
          productDatas: res.data.splice(0, 5),
        });
      });
  };

  componentDidMount() {
    this.getCategoryData();
    this.gethealthGoalData();
    this.fetchShowAll();
    this.getAddedItem();
  }

  getAddedItem = () => {
    fetch(`${SERVER}/order/mycart`, {
      method: 'GET',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(res => this.saveAddedItem(res));
  };

  saveAddedItem = res => {
    if (!sessionStorage.getItem('access_token')) {
      this.setState({ addedItemIdArr: [1994] });
      return;
    }

    if (res.message === 'EMPTY') {
      this.setState({ addedItemIdArr: [1994] });
    } else {
      let addedItemIdArr = [];

      res.data.carts.map(item => {
        addedItemIdArr.push(item.productId);
      });

      this.setState({ addedItemIdArr });
    }
  };

  handleCategory = target => {
    this.setState({ currentCategory: target });
    this.fetchShowAll();
  };

  //카테고리별 페치함수 호출
  fetchCategory = category => {
    if (category.path === 'category') {
      fetch(`${SERVER}/product?sort=${category.query}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(res => {
          this.setState({
            productDatas: res.data,
            powderDatas: [],
          });
        });
    } else if (category.path === 'goal') {
      fetch(`${SERVER}/product?sort=${category.query}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(res => {
          this.setGoalDatas(res);
        });
    }
  };

  fetchNewItem = () => {
    fetch(`${SERVER}/product?sort=new`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        this.setGoalDatas(res);
      });
  };

  setGoalDatas = res => {
    const goalData = [
      {
        id: 100,
        subcategory: {
          title: '',
          description: '',
        },
        item: res.data,
      },
    ];

    this.setState({
      productDatas: goalData,
      powderDatas: [],
    });
  };

  componentDidUpdate() {
    window.scrollTo(0, 350);
  }

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
        <div className="banner">
          <h3>Healthy products made just for you</h3>
          <p>
            Vitamins, protein, and more, made from the best ingredients on earth
            and personalized just for you. Adjust your delivery or cancel at any
            time.
          </p>
          <p>Free shipping on orders over $20.</p>
        </div>
        <CategoryNav
          handleCategory={this.handleCategory}
          currentCategory={currentCategory}
        />

        <section>
          <div className="wrapper">
            <CategoryList
              fetchNewItem={this.fetchNewItem}
              fetchShowAll={this.fetchShowAll}
              fetchCategory={this.fetchCategory}
              className="category-list"
              selectedCategory={
                currentCategory === 'category' ? category : healthGoal
              }
            />
            <ProductCardsGroup
              updateAddedBtn={this.getAddedItem}
              addedItemIdArr={this.state.addedItemIdArr}
              productDatas={productDatas}
              powderDatas={powderDatas}
              selectedCategory={
                currentCategory === 'category' ? 'category' : 'healthGoal'
              }
            />
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
