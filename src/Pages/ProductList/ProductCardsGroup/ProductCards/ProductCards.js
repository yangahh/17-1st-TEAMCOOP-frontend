import React, { Component } from 'react';
import symbolUrl from './symbolUrl';
import './ProductCards.scss';

class ProductCards extends Component {
  render() {
    const { cardInfo } = this.props;

    return (
      <div className="productCards" key={cardInfo.id}>
        <div className="productCover">
          <h3>{cardInfo.subcategory.title}</h3>
          <p>{cardInfo.subcategory.description}</p>
        </div>
        {cardInfo.item.map(item => {
          const outOfStock = item.stock === true;
          const isPriceTypeString = typeof item.displayPrice === 'string';

          return (
            <div
              className="productCard"
              key={item.id}
              onClick={() => console.log(item)}
            >
              <div className="productCard__header">
                {item.isNew && <span className="new">NEW</span>}
                <img src={item.imageUrl} alt="product image" />
                <div className="symbols">
                  {item.symbolURL.map(symbolSrc => {
                    return <img src={symbolUrl[symbolSrc]} alt="symbol" />;
                  })}
                </div>
              </div>
              <div className="productCard__text-block">
                <h2>{item.displayTitle}</h2>
                <p>{item.subTitle}</p>
                <ul>
                  {item.description.split('/').map(text => {
                    return <li>{text}</li>;
                  })}
                </ul>
              </div>
              <div className="productCard__bottom">
                <p>${item.displayPrice[0]}</p>
                {outOfStock ? (
                  <button disabled type="button">
                    Out of stock
                  </button>
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
