import React, { Component } from 'react';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <div className="ProductDetail">
        <nav className="product-nav"></nav>
        <section className="main-product-container">
          <div className="product-image-content">
            <img
              src="//images.ctfassets.net/t9x0u6p47op0/1XkujrgRJeDZKpAeWuS6cK/316424a9efefa7ba6784904f460e77e6/hero_collagen_lemon_passionfruit.jpg?fm=webp"
              alt="product image"
              className="product-image"
            />
          </div>
          <div className="product-content"></div>
        </section>
        <section className="quality-badges-container">2</section>
        <section className="overview-container">3</section>
        <section className="similar-product-container">4</section>
      </div>
    );
  }
}

export default ProductDetail;
