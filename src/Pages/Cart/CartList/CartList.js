import React, { Component } from 'react';
import CartItem from './CartItem/CartItem';
import './CartList.scss';

class CartList extends Component {
  render() {
    const { cartList, deleteItem } = this.props;

    const vitamins = cartList.filter(item => {
      return item.category === 'vitamins';
    });

    const powders = cartList.filter(item => {
      return item.category === 'powders';
    });

    return (
      <div className="cartlist">
        <div className="vitamin">
          {vitamins.length !== 0 && <h1>Vitamins</h1>}
          <div className={`item-wrap ${vitamins.length > 3 && 'grid-wrap'}`}>
            {vitamins.map(itemInfo => {
              return (
                <CartItem
                  itemInfo={itemInfo}
                  pruducts={vitamins}
                  deleteItem={deleteItem}
                />
              );
            })}
          </div>
        </div>
        <div className="powder">
          {powders.length !== 0 && <h1>Powders</h1>}
          <div className={`item-wrap ${powders.length > 3 && 'grid-wrap'}`}>
            {powders.map(itemInfo => {
              return (
                <CartItem
                  itemInfo={itemInfo}
                  pruducts={powders}
                  deleteItem={deleteItem}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CartList;
