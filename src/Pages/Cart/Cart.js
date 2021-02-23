import React, { Component } from 'react';
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

  refreshCartList = () => {
    console.log('변경했다!!!!!!!');
    // this.getCartList();
  };

  componentDidMount() {
    this.getCartList();
    // this.getSubTotal();
  }

  getCartList = () => {
    // console.log('패치');

    fetch(`${SERVER}/order/mycart`, {
      method: 'GET',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(res => this.updateCart(res));
    // .then(res => console.log('패치'));

    console.log('장바구니 가져오기!');
  };

  updateCart = res => {
    // console.log('업데이트');

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

  //이거 지우나?
  // getSubTotal = () => {
  //   this.setState({ subtotal: 0 });
  //   let priceArr = [];
  //   this.state.carts.map(item => {
  //     priceArr.push(item.productPrice - 0);
  //   });

  //   const subtotal = priceArr.reduce((a, b) => a + b);

  //   this.setState({ subtotal });
  // };

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

  componentDidUpdate() {
    if (!this.state.carts.length) {
      return;
    }

    this.testTOTAL();
  }

  deleteItem = deletedItem => {
    const remainItem = this.state.carts.filter(item => {
      return item !== deletedItem;
    });

    this.setState(
      {
        carts: remainItem,
      },
      // this.getSubTotal(),
    );

    this.fetchDeleteItem(deletedItem);
  };

  fetchDeleteItem = deletedItem => {
    fetch(`${SERVER}/order/cart/${deletedItem.productStockId}`, {
      method: 'DELETE',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(res => console.log(res));
  };

  goToCheckout = () => {
    this.state.carts.length !== 0 &&
      this.setState({ checkout: !this.state.checkout });

    console.log('결제할거야');
    fetch(`${SERVER}/order/checkout/${this.state.orderNumber}`, {
      method: 'GET',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(res => this.setUserInfo(res.data.user));
    // .then(res => console.log(res.data.user));
  };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  setUserInfo = info => {
    console.log(info);
    this.setState({
      name: info.userName,
      email: info.email,
      address: info.address,
      zip: info.zipcode,
      phoneNumber: info.phoneNumber,
    });
  };

  placeOrder = props => {
    console.log('주문버튼 누름');
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
                  <a href="#">Browse products</a>
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
                    // value="SaemsolYoo"
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
                    // value="Washington D.C"
                    value={this.state.address}
                  />
                </label>
                <label>
                  ZIP
                  <input
                    onChange={e => this.handleInput(e)}
                    name="zip"
                    type="text"
                    // value="20217"
                    value={this.state.zip}
                  />
                </label>
                <label>
                  EMAIL
                  <input
                    onChange={e => this.handleInput(e)}
                    name="email"
                    type="email"
                    // value="lucy@gmail.com"
                    value={this.state.email}
                  />
                </label>
                <label>
                  PHONE NUMBER
                  <input
                    onChange={e => this.handleInput(e)}
                    name="phoneNumber"
                    type="text"
                    // value="010-1234-5678"
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
              <button
                disabled={carts.length === 0 ? true : false}
                className="order-checkout"
                onClick={() => this.placeOrder(this.props)}
              >
                Place order
              </button>
            )}
            <p>Free shipping on orders over $20</p>
            <p>
              International orders incur a $6 handling fee. All prices in USD.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Cart;
