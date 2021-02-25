import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import symbolUrl from './symbolUrl';
import coverUrl from './coverUrl';
import './ProductCards.scss';

import { SERVER } from '../../../../config';
import ProductCard from './ProductCard/ProductCard';

class ProductCards extends Component {
  constructor() {
    super();
    this.state = {
      buttonState: false,
    };
  }

  goToDetail = id => {
    this.props.history.push(`/product/${id}`);
  };

  goToCart = item => {
    if (!sessionStorage.getItem('access_token')) {
      alert('Please Login to add the product in to cart 🛍');
      return;
    }

    fetch(`${SERVER}/order/cart`, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productId: item.id,
        productSize: item.displaySize[0],
        productPrice: item.displayPrice[0],
      }),
    })
      .then(response => response.json())
      .then(res => alert('Added to your cart! 🛒🛍'))
      .then(this.props.updateAddedBtn);

    console.log(item);
  };

  added = () => {
    if (this.state.buttonState === false) {
      this.setState({ buttonState: true });
    }
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
            <div className="productCard" key={item.id}>
              <div
                className="productCard__header"
                onClick={() => this.goToDetail(item.id)}
              >
                {item.isNew && <span className="new">NEW</span>}
                <img src={item.imageUrl} alt="product image" />
                <div className="symbols">
                  {item.symbolURL.map(symbolSrc => {
                    return <img src={symbolUrl[symbolSrc]} alt="symbol" />;
                  })}
                </div>
              </div>
              <div
                className="productCard__text-block"
                onClick={() => this.goToDetail(item.id)}
              >
                <h2>{item.displayTitle}</h2>
                <p>{item.subTitle}</p>
                <ul>
                  {item.description.split('/').map(text => {
                    return <li>{text}</li>;
                  })}
                </ul>
              </div>
              <ProductCard
                item={item}
                goToCart={this.goToCart}
                outOfStock={outOfStock}
                addedItemIdArr={this.props.addedItemIdArr}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(ProductCards);
