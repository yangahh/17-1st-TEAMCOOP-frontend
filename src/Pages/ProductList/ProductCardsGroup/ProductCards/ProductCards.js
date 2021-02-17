import React, { Component } from 'react';
import './ProductCards.scss';

class ProductCards extends Component {
  render() {
    const { cardInfo } = this.props;

    return (
      <div className="productCardList" key={cardInfo.id}>
        <div className="productCover">
          <h3>{cardInfo.subcategory.title}</h3>
          <p>{cardInfo.subcategory.description}</p>
        </div>
        {cardInfo.item.map(item => {
          return (
            <div className="productCard" key={item.id}>
              <div className="productCard__header">
                <img src={item.imageUrl} alt="product image" />
                <div className="symbols">
                  {item.symbolUrl.map(symbolSrc => {
                    return <img src={symbolSrc} alt="" />;
                  })}
                </div>
              </div>
              <div className="productCard__text-block">
                <h2>{item.displayTitle}</h2>
                <p>{item.subtitle}</p>
                <ul>
                  {item.description.map(text => {
                    return <li>{text}</li>;
                  })}
                </ul>
              </div>
              <div className="productCard__bottom">
                <p>${item.displayPrice}</p>
                {typeof item.displayPrice === 'string' ? (
                  <button type="button">Select</button>
                ) : (
                  <button type="button">Add</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductCards;