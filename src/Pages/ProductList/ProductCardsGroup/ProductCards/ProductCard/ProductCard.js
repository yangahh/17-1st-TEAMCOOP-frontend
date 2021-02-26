import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { item, outOfStock } = this.props;

    return (
      <div className="productCard__bottom">
        <p>${item.displayPrice[0]}</p>
        {item.isSoldout ? (
          <button disabled type="button">
            Out of stock
          </button>
        ) : (
          <button
            onClick={() => this.props.goToCart(item)}
            type="button"
            disabled={this.props.addedItemIdArr.includes(item.id)}
          >
            {this.props.addedItemIdArr.includes(item.id) ? 'Added' : 'Add'}
          </button>
        )}
      </div>
    );
  }
}

export default ProductCard;
