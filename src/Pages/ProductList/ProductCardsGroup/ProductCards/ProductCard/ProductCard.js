import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { item, outOfStock } = this.props;

    return (
      <div
        className="productCard__bottom"
        onClick={() => this.props.goToCart(item)}
      >
        <p>${item.displayPrice[0]}</p>
        {outOfStock ? (
          <button disabled type="button">
            Out of stock
          </button>
        ) : (
          <button
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
