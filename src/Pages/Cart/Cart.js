import React, { Component } from 'react';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      carts: [],
    };
  }

  render() {
    const { carts } = this.state;
    console.log(this.state.carts === false);
    return (
      <div className="cart">
        {carts.length === 0 && (
          <div className="quiz">
            <p>
              Need some guidance? <span>Take the quiz</span>
            </p>
          </div>
        )}
        <section>
          <div className="cartlist-wrapper">
            {carts.length === 0 ? (
              <div className="no-item">
                <img
                  src="https://images.ctfassets.net/t9x0u6p47op0/4b4qjgWLXvAj5MhdrIS1KL/797869888bd2d0e9b96e8fbd0d8958d2/iconCart.svg?"
                  alt=""
                />
                <p>You have no items in your cart.</p>
                <a href="#">Browse products</a>
              </div>
            ) : (
              <div className="cartlist">here is lists!</div>
            )}
          </div>
          <div className="order">
            <div className="order-details">
              <div>
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>$0</span>
              </div>
              <div>
                <span>Sales Tax</span>
                <span>ㅡ</span>
              </div>
              <div>
                <span>Total</span>
                <span>ㅡ</span>
              </div>
              <button>
                Add a code <span>+</span>
              </button>
            </div>
            <button
              disabled={carts.length === 0 ? true : false}
              className="order-checkout"
            >
              Checkout
            </button>
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
