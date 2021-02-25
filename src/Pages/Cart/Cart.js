import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartList from './CartList/CartList';
import { SERVER } from '../../config';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      carts: [],
      subtotal: 0,
      checkout: false,
      name: '',
      email: '',
      phoneNumber: '',
      zip: '',
      address: '',
    };
  }

  componentDidMount() {
    this.getCartList();
  }

  getCartList = () => {
    if (!sessionStorage.getItem('access_token')) {
      return;
    }

    fetch(`${SERVER}/order/cart`, {
      method: 'GET',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(res => this.updateCart(res));
  };

  updateCart = res => {
    if (res.message === 'EMPTY') {
      this.setState({
        carts: [],
      });
    } else if (res.message === 'SUCCESS') {
      this.setState({
        orderNumber: res.data.orderNumber,
        carts: res.data.carts,
      });
    }
  };

  refreshCartList = () => {
    this.getCartList();
  };

  componentDidUpdate() {
    if (!this.state.carts.length) {
      return;
    }

    this.testTOTAL();
  }

  testTOTAL = () => {
    let priceArr = [];

    for (let i = 0; i < this.state.carts.length; i++) {
      priceArr.push(
        Number(this.state.carts[i].productPrice) *
          this.state.carts[i].productQuantity,
      );
    }

    const subtotal = priceArr.reduce((a, b) => a + b);

    this.state.subtotal !== subtotal && this.setState({ subtotal });
  };

  deleteItem = deletedItem => {
    const remainItem = this.state.carts.filter(item => {
      return item !== deletedItem;
    });

    this.setState({
      carts: remainItem,
    });

    this.fetchDeleteItem(deletedItem);
  };

  fetchDeleteItem = deletedItem => {
    fetch(`${SERVER}/order/cart/${deletedItem.productStockId}`, {
      method: 'DELETE',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
    }).then(response => response.json());
  };

  goToCheckout = () => {
    this.state.carts.length !== 0 &&
      this.setState({ checkout: !this.state.checkout });

    fetch(`${SERVER}/order/checkout/${this.state.orderNumber}`, {
      method: 'GET',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(res => this.setUserInfo(res.data.user));
  };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  setUserInfo = info => {
    this.setState({
      name: info.userName,
      email: info.email,
      address: info.address,
      zip: info.zipcode,
      phoneNumber: info.phoneNumber,
    });
  };

  placeOrder = () => {
    if (this.state.address.length < 1 || this.state.zip.length < 1) {
      alert('Please fill out the form!');

      return;
    }

    fetch(`${SERVER}/order/checkout/${this.state.orderNumber}`, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        subTotalCost: this.state.subtotal,
        shippingCost: this.state.subtotal > 20 ? 0 : 5,
        totalCost: this.state.subtotal + (this.state.subtotal > 20 ? 0 : 5),
        address: this.state.address,
        zipcode: this.state.zip,
      }),
    })
      .then(res => res.json())
      .then(res => this.activeModal(res));
  };

  activeModal = res => {
    if (res.message === 'SUCCESS') {
      this.setState({
        orderModal: true,
      });
    }
  };

  finishOrderPage = () => {
    this.setState({
      orderModal: false,
    });

    this.props.history.push('/');
  };

  render() {
    const { carts, subtotal } = this.state;
    return (
      <div className="cart">
        {carts.length === 0 && (
          <div className="quiz">
            <p>
              Need some guidance? <span>Take the quiz</span>
            </p>
          </div>
        )}
        <section className={carts.length === 0 && 'onQuiz'}>
          {!this.state.checkout && (
            <div className="cartlist-wrapper">
              {carts.length === 0 ? (
                <div className="no-item">
                  <img
                    src="https://images.ctfassets.net/t9x0u6p47op0/4b4qjgWLXvAj5MhdrIS1KL/797869888bd2d0e9b96e8fbd0d8958d2/iconCart.svg?"
                    alt="empty cart"
                  />
                  <p>You have no items in your cart.</p>
                  <Link to="/productlist">Browse products</Link>
                </div>
              ) : (
                <CartList
                  cartList={carts}
                  deleteItem={this.deleteItem}
                  refreshCartList={this.refreshCartList}
                />
              )}
            </div>
          )}
          {this.state.checkout && (
            <div className="cartlist-checkout">
              <h1>Delivery Information</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Order List</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="onCheckout">
                    <CartList
                      cartList={carts}
                      deleteItem={this.deleteItem}
                      className="checkout-list"
                    />
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
              <form>
                <label>
                  FULL NAME
                  <input
                    onChange={e => this.handleInput(e)}
                    name="name"
                    type="text"
                    value={this.state.name}
                    disabled
                  />
                </label>
                <label>
                  ADDRESS LINE
                  <input
                    onChange={e => this.handleInput(e)}
                    name="address"
                    type="text"
                    value={this.state.address}
                  />
                </label>
                <label>
                  ZIP
                  <input
                    onChange={e => this.handleInput(e)}
                    name="zip"
                    type="text"
                    value={this.state.zip}
                  />
                </label>
                <label>
                  EMAIL
                  <input
                    onChange={e => this.handleInput(e)}
                    name="email"
                    type="email"
                    value={this.state.email}
                  />
                </label>
                <label>
                  PHONE NUMBER
                  <input
                    onChange={e => this.handleInput(e)}
                    name="phoneNumber"
                    type="text"
                    value={this.state.phoneNumber}
                  />
                </label>
              </form>
            </div>
          )}
          <div className="order">
            <div className="order-details">
              <div>
                <span>Subtotal</span>
                <span>{carts.length === 0 ? 'ㅡ' : `$${subtotal}`}</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>
                  {carts.length === 0 ? 'ㅡ' : subtotal > 20 ? 'FREE' : '$5'}
                </span>
              </div>
              <div>
                <span>Sales Tax</span>
                <span>ㅡ</span>
              </div>
              <div>
                <span>Total</span>
                <span>
                  {carts.length === 0
                    ? 'ㅡ'
                    : subtotal > 20
                    ? `$${subtotal}`
                    : `$${subtotal + 5}`}
                </span>
              </div>
              <button>
                Add a code <span>+</span>
              </button>
            </div>
            {!this.state.checkout && (
              <button
                disabled={carts.length === 0 ? true : false}
                className="order-checkout"
                onClick={this.goToCheckout}
              >
                Checkout
              </button>
            )}
            {this.state.checkout && (
              <>
                <button
                  disabled={carts.length === 0 ? true : false}
                  className="order-checkout"
                  onClick={this.placeOrder}
                >
                  Place order
                </button>
                <button
                  disabled={carts.length === 0 ? true : false}
                  className="order-checkout backto-cart"
                  onClick={this.goToCheckout}
                >
                  Back to Cart
                </button>
              </>
            )}
            <p>Free shipping on orders over $20</p>
            <p>
              International orders incur a $6 handling fee. All prices in USD.
            </p>
          </div>
        </section>
        {this.state.orderModal && (
          <div className="orderModal">
            <div>
              <h1>🥳 Thank you for your order! 🛍</h1>
              <p>Order Number : {this.state.orderNumber}</p>
              <button onClick={this.finishOrderPage}>Go to main</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
