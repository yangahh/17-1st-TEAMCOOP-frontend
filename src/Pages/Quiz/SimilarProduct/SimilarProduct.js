import React, { Component } from 'react';
import SimilarProductCard from './SimilarProductCard/SimilarProductCard';
import './SimilarProduct.scss';

class SimilarProduct extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     similarProduct: [],
  //   };
  // }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // getSimilarProductData = () => {
  //   fetch('http://10.58.2.178:8000/product/tocart', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: sessionStorage.getItem('access_token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log('similar', res);
  //       this.setState({
  //         similarProduct: res.data,
  //       });
  //     });
  // };

  render() {
    const { similarProduct } = this.props;
    return (
      <div className="SimilarProdcut">
        <section className="similar-product-container">
          <h1>Recommended products</h1>
          <h2>Explore some of our other supplements</h2>
          <div className="product-card-container">
            {similarProduct &&
              similarProduct.map(product => {
                return (
                  <SimilarProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    subTitle={product.subTitle}
                    imageUrl={product.imageUrl}
                    healthGoal={product.healthGoal}
                    price={product.price}
                    size={product.size}
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
