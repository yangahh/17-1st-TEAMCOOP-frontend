import React, { Component } from 'react';
import './ProductCardsGroup.scss';
import ProductCards from './ProductCards/ProductCards';

class ProductCardsGroup extends Component {
  render() {
    const { productDatas, powderDatas } = this.props;
    console.log(this.props.selectedCategory);

    if (this.props.selectedCategory === 'category') {
      return (
        <div className="productCardsGroup">
          <h1>Vitamins</h1>
          {productDatas.map(cardInfo => {
            return <ProductCards cardInfo={cardInfo} />;
          })}

          <h1>Powders</h1>
          {powderDatas.map(cardInfo => {
            return <ProductCards cardInfo={cardInfo} />;
          })}
        </div>
      );
    } else {
      return (
        <div className="productCardsGroup">
          <h1>Eyes</h1>
          {productDatas.map(cardInfo => {
            return <ProductCards cardInfo={cardInfo} />;
          })}
        </div>
      );
    }
  }
}

export default ProductCardsGroup;
