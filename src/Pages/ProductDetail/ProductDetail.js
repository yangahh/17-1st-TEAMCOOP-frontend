import React, { Component } from 'react';
import MainProduct from './MainProduct/MainProduct';
import QualityBadges from './QualityBadges/QualityBadges';
import Overview from './Overview/Overview';
import SimilarProduct from './SimilarProduct/SimilarProduct';
import { SERVER } from '../../config';
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

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getProductDetailData();
      window.scrollTo(0, 0);
    }
  }

  getProductDetailData = () => {
    fetch(`${SERVER}/product/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          detailData: res.data,
        });
      });
  };

  render() {
    const { detailData } = this.state;
    return (
      <div className="ProductDetail">
        <MainProduct
          id={detailData.id}
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
          productSize={detailData.productSize}
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
