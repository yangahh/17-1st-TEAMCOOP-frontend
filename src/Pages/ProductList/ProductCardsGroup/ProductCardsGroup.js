import React, { Component } from 'react';
import ProductCards from './ProductCards/ProductCards';
import './ProductCardsGroup.scss';

class ProductCardsGroup extends Component {
  render() {
    const { productDatas, powderDatas } = this.props;

    return (
      <div className="productCardsGroup">
        {powderDatas.length ? <h1>Vitamins</h1> : ''}
        {productDatas.map(cardInfo => {
          return <ProductCards cardInfo={cardInfo} />;
        })}

        <h1>{powderDatas.length ? 'Powders' : ''}</h1>
        {powderDatas.map(cardInfo => {
          return <ProductCards cardInfo={cardInfo} />;
        })}
      </div>
    );
  }
}

export default ProductCardsGroup;
