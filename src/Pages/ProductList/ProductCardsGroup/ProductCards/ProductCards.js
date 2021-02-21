import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import symbolUrl from './symbolUrl';
import coverUrl from './coverUrl';
import './ProductCards.scss';

class ProductCards extends Component {
  goToDetail = id => {
    this.props.history.push(`/product/${id}`);
  };

  render() {
    const { cardInfo } = this.props;

    return (
      <div className="productCards" key={cardInfo.id}>
        {cardInfo.id !== 100 && (
          <div className="productCover">
            <img src={coverUrl[cardInfo.subcategory.title]} alt="cover image" />
            <h3>{cardInfo.subcategory.title}</h3>
            <p>{cardInfo.subcategory.description}</p>
          </div>
        )}

        {cardInfo.item.map(item => {
          const outOfStock = item.stock === true;

          return (
            <div
              className="productCard"
              key={item.id}
              onClick={() => this.goToDetail(item.id)} //상세페이지 연결
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

export default withRouter(ProductCards);
