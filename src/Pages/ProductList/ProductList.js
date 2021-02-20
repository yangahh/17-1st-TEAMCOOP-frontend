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

  // getVitaminDetailData = () => {
  //   fetch('/data/vitaminDetailData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         productDatas: data,
  //       });
  //     });
  // };

  // getPowderDetailData = () => {
  //   fetch('/data/powderDetailData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         powderDatas: data,
  //       });
  //     });
  // };

  testingVitamin = () => {
    fetch('http://172.30.250.141:8000/product', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          productDatas: res.data.splice(0, 5),
        });
      });
    // .then(data => console.log(data));
  };

  testingPowder = () => {
    fetch('http://172.30.250.141:8000/product', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          powderDatas: res.data.splice(5, 8),
        });
      });
    // .then(data => console.log(data));
  };

  // testingGetEachPLEASE = category => {
  //   fetch('http://172.30.250.226:8000/product', {
  //     method: 'GET',
  //   });
  // };

  componentDidMount() {
    this.getCategoryData();
    this.gethealthGoalData();
    // this.getVitaminDetailData();
    // this.getPowderDetailData();

    this.testingVitamin();
    this.testingPowder();
  }

  handleCategory = target => {
    this.setState({ currentCategory: target });
  };

  //카테고리별 페치함수 호출
  fetchCategory = category => {
    console.log(`${category.path}/${category.id}`);

    fetch(
      `http://172.30.250.226:8000/product/${category.path}/${category.id}`,
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => console.log(data));
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
        <div className="banner">h1</div>
        <CategoryNav
          handleCategory={this.handleCategory}
          currentCategory={currentCategory}
        />

        <section>
          <div className="wrapper">
            <CategoryList
              fetchCategory={this.fetchCategory}
              className="category-list"
              selectedCategory={
                currentCategory === 'category' ? category : healthGoal
              }
            />
            <ProductCardsGroup
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
