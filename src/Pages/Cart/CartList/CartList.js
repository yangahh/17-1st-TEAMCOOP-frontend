import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {
  render() {
    const { cartList } = this.props;

    const vitamins = cartList.filter(item => {
      return item.category === 'vitamin';
    });

    const powders = cartList.filter(item => {
      return item.category === 'powder';
    });

    console.log(cartList);
    return (
      <div className="cartlist">
        <div className="vitamin">
          <h1>Vitamins</h1>
          <div className={`item-wrap ${vitamins.length > 2 && 'grid-wrap'}`}>
            {vitamins.map(item => {
              return (
                <div
                  className={`item ${vitamins.length > 2 && 'grid'}`}
                  key={item.id}
                >
                  <img src={item.productImageUrl} alt="" />
                  <div>
                    <div>
                      <h2>{item.productName}</h2>
                      <p>{item.productDesc}</p>
                    </div>
                    <p>${item.productPrice}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="powder">
          <h1>Powders</h1>

          <div className={`item-wrap ${powders.length > 2 && 'grid-wrap'}`}>
            {powders.map(item => {
              return (
                <div
                  className={`item ${powders.length > 2 && 'grid'}`}
                  key={item.id}
                >
                  <img src={item.productImageUrl} alt="" />
                  <div>
                    <div>
                      <h2>{item.productName}</h2>
                      <p>{item.productDesc}</p>
                    </div>
                    <p>${item.productPrice}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CartList;
