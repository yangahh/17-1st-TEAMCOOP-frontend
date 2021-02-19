import React, { Component } from 'react';
import './CartItem.scss';

class CartItem extends Component {
  render() {
    const { itemInfo, pruducts, deleteItem } = this.props;

    return (
      <div
        className={`cartItem item ${pruducts.length > 3 && 'grid'}`}
        key={itemInfo.id}
      >
        <img src={itemInfo.productImageUrl} alt="product image" />
        <div>
          <div>
            <h2>{itemInfo.productName}</h2>
            <p>{itemInfo.productDesc}</p>
          </div>
          <p>${itemInfo.productPrice}</p>
        </div>
        <button onClick={() => deleteItem(itemInfo)}>X</button>
      </div>
    );
  }
}

export default CartItem;
