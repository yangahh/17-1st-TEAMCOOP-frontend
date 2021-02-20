import React, { Component } from 'react';
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
          const outOfStock = item.stock === 0;
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
                {outOfStock ? (
                  <button disabled type="button">
                    Out of stock
                  </button>
                ) : (
                  <button type="button">
                    {isPriceTypeString ? 'Select' : 'Add'}
                  </button>
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
