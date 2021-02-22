import React, { Component } from 'react';
import MainProduct from './MainProduct/MainProduct';
import QualityBadges from './QualityBadges/QualityBadges';
import Overview from './Overview/Overview';
import './ProductDetail.scss';
import SimilarProdcut from './SimilarProdcut/SimilarProdcut';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      detailData: {},
    };
  }

  componentDidMount() {
    this.getProductDetailData();
  }

  getProductDetailData = () => {
    // fetch('/data/productDetail.json')
    // fetch('http://10.58.0.208:8000/product/19')
    fetch('http://10.58.2.233:8000/product/23')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          detailData: res.data,
        });
      });
  };

  render() {
    const { detailData, productSize } = this.state;
    console.log(detailData.productSize);
    return (
      <div className="ProductDetail">
        {/* <nav className="product-nav">
          <div className="nav-container">11</div>
        </nav> */}
        <MainProduct
          id={detailData.productId}
          title={detailData.title}
          subTitle={detailData.subTitle}
          isVegan={detailData.isVegan}
          isVegetarian={detailData.isVegetarian}
          productImageSrc={detailData.productImageSrc}
          healthGoalList={detailData.healthGoalList}
          description={detailData.description}
          nutritionLink={detailData.nutritionLink}
          category={detailData.category}
          productPrice={detailData.productPrice}
          isSoldOut={detailData.isSoldOut}
          productSize={productSize}
        />
        <QualityBadges dietaryHabitList={detailData.dietaryHabitList} />
        <Overview
          category={detailData.category}
          allergyList={detailData.allergyList}
          nutritionLink={detailData.nutritionLink}
        />
        {detailData.similarProduct && detailData.similarProduct.length ? (
          <SimilarProdcut similarProduct={detailData.similarProduct} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default ProductDetail;
