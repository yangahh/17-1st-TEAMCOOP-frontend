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

  //mock-data fetch
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

  testingShowAll = () => {
    fetch('http://172.30.250.141:8000/product', {
      method: 'GET',
    })
      .then(response => response.json())
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
    // this.getVitaminDetailData();
    // this.getPowderDetailData();

    this.testingShowAll();
  }

  handleCategory = target => {
    this.setState({ currentCategory: target });
    this.testingShowAll();
  };

  //카테고리별 페치함수 호출
  fetchCategory = category => {
    console.log(`${category.path}/${category.id}`);

    if (category.path === 'category') {
      fetch(
        `http://172.30.250.141:8000/product/${category.path}/${category.id}`,
        {
          method: 'GET',
        },
      )
        .then(response => response.json())
        .then(res => {
          this.setState({
            productDatas: res.data,
            powderDatas: [],
          });
        });
    } else if (category.path === 'goal') {
      fetch(
        `http://172.30.250.141:8000/product/${category.path}/${category.id}`,
        {
          method: 'GET',
        },
      )
        .then(response => response.json())
        .then(res => {
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
        });
    }
  };

  fetchNewItem = () => {
    fetch('http://172.30.250.141:8000/product/category/99999', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(res => {
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
              fetchShowAll={this.testingShowAll}
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
