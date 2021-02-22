import React, { Component } from 'react';
import SimilarProductCard from './SimilarProductCard/SimilarProductCard';
import './SimilarProduct.scss';

class SimilarProduct extends Component {
  render() {
    const { similarProduct } = this.props;
    return (
      <div className="SimilarProdcut">
        <section className="similar-product-container">
          <h1>Similar products</h1>
          <h2>Explore some of our other supplements</h2>
          <div className="product-card-container">
            {similarProduct &&
              similarProduct.map(product => {
                return (
                  <SimilarProductCard
                    key={product.id}
                    id={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    subTitle={product.subTitle}
                    healthGoalList={product.healthGoalList}
                  />
                );
              })}
          </div>
        </section>
      </div>
    );
  }
}

export default SimilarProduct;
