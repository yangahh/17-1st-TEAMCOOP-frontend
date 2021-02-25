import React, { Component } from 'react';
import './CartItem.scss';

import { SERVER } from '../../../../config';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {};
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

  componentDidUpdate(prevProps, prevState) {
    const { target, productStockId } = this.state;

    if (this.state !== prevState) {
      target === 'powders' && this.updatePowderCart(productStockId);
      target === 'vitamins' && this.updateVitaminCart(productStockId);
    }
  }

  updatePowderCart = productStockId => {
    fetch(`${SERVER}/order/cart`, {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productStockId: productStockId,
        productId: this.state.productId,
        productSize: this.state.powderSize,
        productQuantity: this.state.powderQuantity - 0,
      }),
    })
      .then(res => res.json())
      .then(res => this.stockAlert(res))
      .then(this.props.refreshCartList);
  };

  stockAlert = res => {
    if (res.message === 'OUT_OF_STOCK') {
      alert('SORRY');
    }
  };

  updateVitaminCart = productStockId => {
    fetch(`${SERVER}/order/cart`, {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        productStockId: productStockId,
        productId: this.state.productId,
        productQuantity: this.state.vitaminQuantity - 0,
      }),
    }).then(this.props.refreshCartList);
  };

  handleVitaminOption = (itemInfo, event, stockId) => {
    this.setState({
      target: itemInfo.category,
      productId: itemInfo.productId,
      vitaminQuantity: event.target.value,
      productStockId: stockId,
    });
  };

  handlePowderOption = (itemInfo, event, stockId) => {
    const { name, value } = event.target;

    name === 'productSize' &&
      this.setState({
        powderSize: value,
        target: itemInfo.category,
        productId: itemInfo.productId,
        productStockId: stockId,
      });

    name === 'productQuantity' &&
      this.setState({
        powderQuantity: value,
        target: itemInfo.category,
        productId: itemInfo.productId,
        productStockId: stockId,
      });
  };

  render() {
    const { itemInfo, pruducts, deleteItem } = this.props;
    console.log(itemInfo);
    return (
      <div
        className={`cartItem item ${pruducts.length > 3 && 'grid'}`}
        key={itemInfo.productStockId}
      >
        <img src={itemInfo.productImageUrl} alt="product image" />
        <div>
          <div className="productName">
            <h2>{itemInfo.productName}</h2>
            <p>{itemInfo.productSubName}</p>
          </div>
          <div className="priceAndQuantity">
            <p className="price">
              ${Number(itemInfo.productPrice) * itemInfo.productQuantity}
            </p>
            {itemInfo.category === 'vitamins' && (
              <div className="selectOption">
                <select
                  className="quantity"
                  onChange={() =>
                    this.handleVitaminOption(
                      itemInfo,
                      event,
                      itemInfo.productStockId,
                    )
                  }
                >
                  <option
                    disabled={itemInfo.productStock < 1 ? true : false}
                    selected={itemInfo.productQuantity === 1 ? true : false}
                    value="1"
                  >
                    1
                  </option>
                  <option
                    disabled={itemInfo.productStock < 2 ? true : false}
                    selected={itemInfo.productQuantity === 2 ? true : false}
                    value="2"
                  >
                    2
                  </option>
                  <option
                    disabled={itemInfo.productStock < 3 ? true : false}
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
                  className="quantity"
                  name="productQuantity"
                  onChange={() =>
                    this.handlePowderOption(
                      itemInfo,
                      event,
                      itemInfo.productStockId,
                    )
                  }
                >
                  <option
                    disabled={itemInfo.productStock < 1 ? true : false}
                    selected={itemInfo.productQuantity === 1 ? true : false}
                    value="1"
                  >
                    1
                  </option>
                  <option
                    disabled={itemInfo.productStock < 2 ? true : false}
                    selected={itemInfo.productQuantity === 2 ? true : false}
                    value="2"
                  >
                    2
                  </option>
                  <option
                    disabled={itemInfo.productStock < 3 ? true : false}
                    selected={itemInfo.productQuantity === 3 ? true : false}
                    value="3"
                  >
                    3
                  </option>
                </select>
                <select
                  className="productSize"
                  name="productSize"
                  onChange={() =>
                    this.handlePowderOption(
                      itemInfo,
                      event,
                      itemInfo.productStockId,
                    )
                  }
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
                    selected={
                      itemInfo.productSize === '5 Packets' ? true : false
                    }
                    value="5 Packets"
                  >
                    5 Packets
                  </option>
                </select>
              </div>
            )}
          </div>
        </div>
        <button onClick={() => deleteItem(itemInfo)}>X</button>
      </div>
    );
  }
}

export default CartItem;
