import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SimilarProductCard.scss';
import { SERVER } from '../../../../config';

class SimilarProductCard extends Component {
  constructor() {
    super();
    this.state = {
      isBtnActivite: true,
    };
  }

  goToDetail = id => {
    this.props.history.push(`/product/${id}`);
  };

  goToCart = () => {
    const { isBtnActivite } = this.state;
    const { id, price, size } = this.props;

    if (isBtnActivite) {
      fetch(`${SERVER}/order/cart`, {
        method: 'POST',
        headers: {
          Authorization: sessionStorage.getItem('access_token'),
        },
        body: JSON.stringify({
          productId: id,
          productSize: size[0],
          productPrice: price[0],
        }),
      })
        .then(response => response.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            alert('In Cart');
            this.setState({
              isBtnActivite: false,
            });
          } else if (res.message === 'NEED_LOGIN') {
            alert('로그인이 필요한 서비스 입니다.');
          }
        });
    } else {
      alert('Already in cart');
    }
  };

  render() {
    const { isBtnActivite } = this.state;
    const { id, imageUrl, title, subTitle, healthGoal } = this.props;
    return (
      <div className="SimilarProductCard">
        <div className="similar-product-card">
          <div className="image-wrap" onClick={() => this.goToDetail(id)}>
            <div className="card-image">
              <img alt={title + ' image'} src={imageUrl} />
            </div>
          </div>
          <ul className="healthGoal">
            {healthGoal &&
              healthGoal.map((healthGoal, index) => {
                return <li key={index}>{healthGoal}</li>;
              })}
          </ul>
          <h3 onClick={() => this.goToDetail(id)}>{title}</h3>
          <h4>{subTitle}</h4>
          {isBtnActivite ? (
            <button onClick={this.goToCart}>ADD CART</button>
          ) : (
            <button onClick={this.goToCart}>In your cart</button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(SimilarProductCard);
