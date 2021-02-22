import React, { Component } from 'react';

class SimilarProdcut extends Component {
  render() {
    const { similarProduct } = this.props;
    return (
      <div className="SimilarProdcut">
        <section className="similar-product-container">
          <h2>Similar products</h2>
          <h3>Explore some of our other supplements</h3>
          <div className="product-card-container">
            {similarProduct &&
              similarProduct.map(product => {
                return (
                  <div className="similar-product-card">
                    <div className="image-wrap">
                      <div className="card-image">
                        <img
                          src={product.imageUrl}
                          alt={product.title + ' image'}
                        />
                      </div>
                    </div>
                    <ul className="healthGoal">
                      {product.healthGoalList &&
                        product.healthGoalList.map(healthGoal => {
                          return <li>{healthGoal}</li>;
                        })}
                    </ul>
                    <h3>{product.title}</h3>
                    <h4>{product.subTitle}</h4>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    );
  }
}

export default SimilarProdcut;
