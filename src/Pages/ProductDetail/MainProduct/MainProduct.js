import React, { Component } from 'react';
import './MainProduct.scss';
class MainProduct extends Component {
  constructor() {
    super();
    this.state = {
      powderProductSize: '15 Serving Tub',
      isBtnActivite: true,
    };
  }
  handleProductPrice = event => {
    const { value } = event.target;
    this.setState({
      powderProductSize: value,
      isBtnActivite: true,
    });
  };

  goToCart = () => {
    const { isBtnActivite, powderProductSize } = this.state;
    const { id, productPrice, category } = this.props;
    if (category === 'powders') {
      if (isBtnActivite) {
        fetch('http://10.58.6.165:8000/product/tocart', {
          method: 'POST',
          headers: {
            Authorization: sessionStorage.getItem('access_token'),
          },
          body: JSON.stringify({
            productId: id,
            productSize: powderProductSize,
            productPrice: productPrice[powderProductSize],
          }),
        })
          .then(response => response.json())
          .then(res => {
            if (res.message === 'SUCCESS') {
              alert('In Cart');
              this.setState({
                isBtnActivite: false,
              });
            }
          });
      } else {
        alert('Already in cart');
      }
    } else {
      if (isBtnActivite) {
        fetch('http://10.58.6.165:8000/product/tocart', {
          method: 'POST',
          headers: {
            Authorization: sessionStorage.getItem('access_token'),
          },
          body: JSON.stringify({
            productId: id,
            productPrice: productPrice,
          }),
        })
          .then(response => response.json())
          .then(res => {
            console.log(res);
            if (res.message === 'SUCCESS') {
              alert('In Cart');
              this.setState({
                isBtnActivite: false,
              });
            }
          });
      } else {
        alert('Already in card');
      }
    }
  };

  render() {
    const { powderProductSize, isBtnActivite } = this.state;
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
              {healthGoalList &&
                healthGoalList.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
            </ul>
            <h1 className="display-title">{title}</h1>
            <h2 className="sub-title">{subTitle}</h2>
            <ul className="description">
              {description &&
                description
                  .split('/')
                  .map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
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
                {isBtnActivite ? (
                  <button className="add-cart-btn" onClick={this.goToCart}>
                    Add
                    <span className="btn-line" />$
                    {productPrice[powderProductSize]}
                    {isSoldOut[powderProductSize] ? <br> SOLD OUT </br> : ''}
                  </button>
                ) : (
                  <button className="already-cart-btn">In your cart</button>
                )}
              </div>
            ) : isBtnActivite ? (
              // <button
              //   className="add-cart-btn"
              //   onClick={() => this.vitaminsGoToCart(id, productPrice)}
              // >

              <button className="add-cart-btn" onClick={this.goToCart}>
                Add
                <span className="btn-line" />$ {productPrice}
                {isSoldOut ? <br> SOLD OUT </br> : ''}
              </button>
            ) : (
              <button className="already-cart-btn">In your cart</button>
            )}
          </div>
        </section>
      </div>
    );
  }
}
export default MainProduct;
