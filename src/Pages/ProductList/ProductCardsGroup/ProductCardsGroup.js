import React, { Component } from 'react';
import './ProductCardsGroup.scss';
import ProductCards from './ProductCards/ProductCards';

class ProductCardsGroup extends Component {
  render() {
    return (
      <div className="productCardsGroup">
        <h1>Vitamins</h1>
        {this.props.productDatas.map(cardInfo => {
          return <ProductCards cardInfo={cardInfo} />;
        })}

        <h1>Powders</h1>
        {this.props.powderDatas.map(cardInfo => {
          return <ProductCards cardInfo={cardInfo} />;
        })}
      </div>
    );
  }
}

export default ProductCardsGroup;
