import React, { Component } from 'react';
import MainProduct from './MainProduct/MainProduct';
import QualityBadges from './QualityBadges/QualityBadges';
import Overview from './Overview/Overview';
import SimilarProduct from './SimilarProduct/SimilarProduct';
import './ProductDetail.scss';

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
    // fetch(`http://10.58.2.233:8000/product/${this.props.match.params.id}`)
    fetch('/data/productDetail.json')
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
          <SimilarProduct similarProduct={detailData.similarProduct} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default ProductDetail;
