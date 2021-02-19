import React, { Component } from 'react';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <div className="ProductDetail">
        <nav className="product-nav">
          <div className="nav-container">11</div>
        </nav>
        <section className="main-product-container">
          <div className="product-image-content">
            <img
              src="//images.ctfassets.net/t9x0u6p47op0/1XkujrgRJeDZKpAeWuS6cK/316424a9efefa7ba6784904f460e77e6/hero_collagen_lemon_passionfruit.jpg?fm=webp"
              alt="product image"
              className="product-image"
            />
          </div>
          <div className="product-content">
            <ul className="tag-list">
              <li>SKIN</li>
              <li>NAILS</li>
            </ul>
            <h1 className="display-title">Collagen-matcha</h1>
            <h2 className="sub-title">The Skin Hero</h2>
            <ul className="description">
              <li>Supports hydration and elasticity in skin*</li>
              <li>Helps strengthen nails*</li>
              <li>Grass-fed bovine collagen</li>
              <li>Made with premium Japanese matcha powder</li>
            </ul>
            <a href="" className="detail-link">
              See supplement facts
            </a>
            <select name="product-count" className="product-count">
              <option value="">15 Serving Tub</option>
              <option value="">5 Packets</option>
            </select>
            <button className="add-cart-btn">
              Add
              <span className="btn-line" />
              $32
            </button>
          </div>
        </section>
        <section className="quality-badges-container">2</section>
        <section className="overview-container">3</section>
        <section className="similar-product-container">4</section>
      </div>
    );
  }
}

export default ProductDetail;
