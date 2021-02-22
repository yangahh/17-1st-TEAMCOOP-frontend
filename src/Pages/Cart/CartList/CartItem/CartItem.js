import React, { Component } from 'react';
import './CartItem.scss';

import { SERVER } from '../../../../config';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      // vitaminQuantity: 1,
      // powderQuantity: 1,
      // powderSize: '5 Packets',
    };
  }

  componentDidMount() {
    const { category, productQuantity, productSize } = this.props.itemInfo;

    category === 'powders' &&
      this.setState({
        powderQuantity: productQuantity,
        powderSize: productSize,
      });

    category === 'vitamins' &&
      this.setState({
        vitaminQuantity: productQuantity,
      });
  }

  componentDidUpdate() {
    const { target, productId } = this.state;

    target === 'powders' && this.updatePowderCart(productId);
    target === 'vitamins' && this.updateVitaminCart(productId);
  }

  updatePowderCart = productId => {
    console.log('파우더 변경');

    fetch(`${SERVER}/order/cart/${productId}`, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productId: this.state.productId,
        productSize: this.state.powderSize,
        productQuantity: this.state.powderQuantity - 0,
      }),
    })
      .then(response => response.json())
      .then(res => console.log(res));

    console.log(
      this.state.productId,
      this.state.powderQuantity - 0,
      this.state.powderSize,
    );
  };

  updateVitaminCart = productId => {
    console.log('비타민 변경');

    fetch(`${SERVER}/order/cart/${productId}`, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productId: this.state.productId,
        productQuantity: this.state.vitaminQuantity - 0,
      }),
    })
      .then(response => response.json())
      .then(res => console.log(res));

    console.log(this.state.productId, this.state.vitaminQuantity);
  };

  handleVitaminOption = (itemInfo, event) => {
    this.setState({
      target: itemInfo.category,
      productId: itemInfo.productId,
      vitaminQuantity: event.target.value,
    });
  };

  handlePowderOption = (itemInfo, event) => {
    const { name, value } = event.target;

    name === 'productSize' &&
      this.setState({
        powderSize: value,
        target: itemInfo.category,
        productId: itemInfo.productId,
      });

    name === 'productQuantity' &&
      this.setState({
        powderQuantity: value,
        target: itemInfo.category,
        productId: itemInfo.productId,
      });
  };

  render() {
    const { itemInfo, pruducts, deleteItem } = this.props;

    return (
      <div
        className={`cartItem item ${pruducts.length > 3 && 'grid'}`}
        key={itemInfo.productStockId}
      >
        <img src={itemInfo.productImageUrl} alt="product image" />
        <div>
          <div>
            <h2>{itemInfo.productName}</h2>
            <p>{itemInfo.productSubName}</p>
          </div>

          <p className="price">${itemInfo.productPrice}</p>
          {itemInfo.category === 'vitamins' && (
            <div className="selectOption">
              <select
                onChange={() => this.handleVitaminOption(itemInfo, event)}
              >
                <option
                  selected={itemInfo.productQuantity === 1 ? true : false}
                  value="1"
                >
                  1
                </option>
                <option
                  selected={itemInfo.productQuantity === 2 ? true : false}
                  value="2"
                >
                  2
                </option>
                <option
                  selected={itemInfo.productQuantity === 3 ? true : false}
                  value="3"
                >
                  3
                </option>
              </select>
            </div>
          )}
          {itemInfo.category === 'powders' && (
            <div className="selectOption">
              <select
                name="productQuantity"
                onChange={() => this.handlePowderOption(itemInfo, event)}
              >
                <option
                  selected={itemInfo.productQuantity === 1 ? true : false}
                  value="1"
                >
                  1
                </option>
                <option
                  selected={itemInfo.productQuantity === 2 ? true : false}
                  value="2"
                >
                  2
                </option>
                <option
                  selected={itemInfo.productQuantity === 3 ? true : false}
                  value="3"
                >
                  3
                </option>
              </select>
              <select
                name="productSize"
                onChange={() => this.handlePowderOption(itemInfo, event)}
              >
                <option
                  selected={
                    itemInfo.productSize === '15 Serving Tub' ? true : false
                  }
                  value="15 Serving Tub"
                >
                  15 Serving Tub
                </option>
                <option
                  selected={itemInfo.productSize === '5 Packets' ? true : false}
                  value="5 Packets"
                >
                  5 Packets
                </option>
              </select>
            </div>
          )}
        </div>
        <button onClick={() => deleteItem(itemInfo)}>X</button>
      </div>
    );
  }
}

export default CartItem;
