import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import symbolUrl from './symbolUrl';
import coverUrl from './coverUrl';
import './ProductCards.scss';

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
    // console.log({
    //   id: item.id,
    //   productSize: item.displaySize[0],
    //   productPrice: item.displayPrice[0],
    // });

    fetch('http://10.58.0.208:8000/product/tocart', {
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
      .then(res => console.log(res));

    // fetch('http://172.30.250.141:8000/user/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: 'toaur6802@gmail.com',
    //     password: '12345678',
    //   }),
    // })
    //   .then(response => response.json())
    //   // .then(res => localStorage.setItem('ACCESS_TOKEN', res.ACCESS_TOKEN));
    //   .then(res => console.log(res));
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
            <div
              className="productCard"
              key={item.id}
              // onClick={() => this.goToDetail(item.id)} //상세페이지 연결
              onClick={() => this.goToCart(item)}
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
                  <button type="button" disabled={this.state.buttonState}>
                    {this.state.buttonState ? 'Added' : 'Add'}
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

export default withRouter(ProductCards);
