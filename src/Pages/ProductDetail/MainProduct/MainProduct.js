import React, { Component } from 'react';
import './MainProduct.scss';

class MainProduct extends Component {
  constructor() {
    super();
    this.state = {
      productSize: '15 Serving Tub',
    };
  }

  handleProductPrice = event => {
    this.setState({ productSize: event.target.value });
  };

  powdersGoToCart = (id, productSize) => {
    const { productPrice } = this.props;
    console.log({
      productId: id,
      productSize: productSize,
      productPrice: productPrice[productSize],
    });

    fetch('http://10.58.2.233:8000/product/tocart', {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productId: id,
        productSize: productSize,
        productPrice: productPrice[productSize],
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

  vitaminsGoToCart = (id, productPrice) => {
    const { productSize } = this.props;
    console.log({
      productId: id,
      productSize: productSize,
      productPrice: productPrice,
    });

    fetch('http://10.58.2.233:8000/product/tocart', {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productId: id,
        productSize: '',
        productPrice: productPrice,
      }),
    })
      .then(response => response.json())
      .then(res => console.log(res));
  };

  render() {
    const {
      id,
      title,
      subTitle,
      isVegan,
      isVegetarian,
      productImageSrc,
      healthGoalList,
      description,
      nutritionLink,
      category,
      productPrice,
      isSoldOut,
    } = this.props;
    const { productSize } = this.state;

    return (
      <div className="MainProduct">
        <section className="main-product-container">
          <div className="product-image-content">
            <img
              alt={title + ' product image'}
              src={productImageSrc}
              className="product-image"
            />
            {isVegan && (
              <img
                alt="vegan-icon"
                src="https://images.ctfassets.net/t9x0u6p47op0/367cMJDwhCXK3jY8Kv8jn0/61827eb54150a57e61c9cc2ad58775f6/vegan-badge.svg"
                className="spin-icon"
              />
            )}
            {isVegetarian && (
              <img
                alt="vegetarian-icon"
                src="https://images.ctfassets.net/t9x0u6p47op0/4TJ6dehvWMFsWpQkfW4NGn/91ab38cc196d4c6e678b65b17a39490b/vegetarian-badge.svg"
                className="spin-icon"
              />
            )}
          </div>
          <div className="product-content">
            <ul className="tag-list">
              {healthGoalList && healthGoalList.map(goal => <li>{goal}</li>)}
            </ul>
            <h1 className="display-title">{title}</h1>
            <h2 className="sub-title">{subTitle}</h2>
            <ul className="description">
              {description &&
                description
                  .split('/')
                  .map(description => <li>{description}</li>)}
            </ul>
            <a href={nutritionLink} className="nutrition-link">
              See supplement facts
            </a>
            {category === 'powders' ? (
              <div>
                <select
                  name="product-count"
                  className="product-count"
                  onChange={this.handleProductPrice}
                >
                  <option value="15 Serving Tub">15 Serving Tub</option>
                  <option value="5 Packets">5 Packets</option>
                </select>
                <button
                  className="add-cart-btn"
                  onClick={() => this.powdersGoToCart(id, productSize)}
                >
                  Add
                  <span className="btn-line" />${productPrice[productSize]}
                  {isSoldOut[productSize] ? <br> SOLD OUT </br> : ''}
                </button>
              </div>
            ) : (
              <button
                className="add-cart-btn"
                onClick={() => this.vitaminsGoToCart(id, productPrice)}
              >
                Add
                <span className="btn-line" />$ {productPrice}
                {isSoldOut ? <br> SOLD OUT </br> : ''}
              </button>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default MainProduct;
