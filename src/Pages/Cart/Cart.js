import React, { Component } from 'react';
import CartList from './CartList/CartList';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      carts: [
        {
          category: 'vitamin',
          id: 1,
          productName: 'B-Complex',
          productDesc: '45000mcg Pantothenic acid, ...',
          productPrice: 12,
          productImageUrl:
            'https://images.ctfassets.net/t9x0u6p47op0/o4UtlsnpccgOG8wc6QU6u/80643ed497c4e8850dfeea5f8ca554ba/img_bcomplex3_tile.jpg',
        },
        {
          category: 'vitamin',
          id: 2,
          productName: 'Vitamin D',
          productDesc: '1000IU Vitamin D',
          productPrice: 5,
          productImageUrl:
            'https://images.ctfassets.net/t9x0u6p47op0/5BiJML1xXUKGyAyiUQggOm/0baf8b7d2e3f4bd7e0e949bd26ca9645/img_vitamind2_tile.jpg',
        },
        {
          category: 'powder',
          id: 3,
          productName: 'Collagen',
          productDesc: '10g Grass-Fed Collagen Peptides (Bovine), ...',
          productPrice: 32,
          productImageUrl:
            'https://images.ctfassets.net/t9x0u6p47op0/5R9LtOY2NKPhdT9x0Hq92z/d2037a606c8b9ddd28f318b64cbc9439/img_collagen-matcha_tile_tub.jpg',
        },
        {
          category: 'vitamin',
          id: 4,
          productName: 'Probiotic Blend',
          productDesc: '8billion CFU Probiotic Blend',
          productPrice: 9,
          productImageUrl:
            'https://images.ctfassets.net/t9x0u6p47op0/7m9jDTPcpW7vwwkyWT14F0/38aa392a2771d42298626bb752186202/img_probiotic_blend-2_tile.jpg',
        },
        {
          category: 'powder',
          id: 5,
          productName: 'Superberry',
          productDesc: '8330mg Organic Pomegranate Fruit Juice, ...',
          productPrice: 26,
          productImageUrl:
            'https://images.ctfassets.net/t9x0u6p47op0/6IqYq9IK3BZoR3Vwj7UnBH/c3fa660248883124b3896c4d2e749c1b/img_superberry_tile_tub.jpg',
        },
        {
          category: 'powder',
          id: 6,
          productName: 'Superberry',
          productDesc: '8330mg Organic Pomegranate Fruit Juice, ...',
          productPrice: 26,
          productImageUrl:
            'https://images.ctfassets.net/t9x0u6p47op0/6IqYq9IK3BZoR3Vwj7UnBH/c3fa660248883124b3896c4d2e749c1b/img_superberry_tile_tub.jpg',
        },
        {
          category: 'powder',
          id: 7,
          productName: 'Plant Protein',
          productDesc: '23.2g Organic Plant Proein Blend',
          productPrice: 28,
          productImageUrl:
            'https://images.ctfassets.net/t9x0u6p47op0/2JYsGrS01bhzWXIQZp02uY/58768df70a7c35aa03a43dd47ca79dbd/img_plantvanilla-tub_tile.jpg',
        },
      ],
      subtotal: 0,
    };
  }

  getSubTotal = () => {
    this.setState({ subtotal: 0 });
    let priceArr = [];
    this.state.carts.map(item => {
      priceArr.push(item.productPrice);
    });

    const subtotal = priceArr.reduce((a, b) => a + b);

    this.setState({ subtotal });
  };

  componentDidMount() {
    this.getSubTotal();
  }

  componentDidUpdate() {
    if (this.state.carts.length === 0) {
      return;
    }

    let priceArr = [];
    this.state.carts.map(item => {
      priceArr.push(item.productPrice);
    });

    if (priceArr.length === 0) {
      this.setState({ subtotal: 0 });
    }
    const beforeSubtotal = priceArr.reduce((a, b) => a + b);

    this.state.subtotal !== beforeSubtotal && this.getSubTotal();
  }

  deleteItem = deletedItem => {
    const remainItem = this.state.carts.filter(item => {
      return item !== deletedItem;
    });

    this.setState(
      {
        carts: remainItem,
      },
      this.getSubTotal(),
    );
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
              // <div className="cartlist">here is lists!</div>
              <CartList cartList={carts} deleteItem={this.deleteItem} />
            )}
          </div>
          <div className="order">
            <div className="order-details">
              <div>
                <span>Subtotal</span>
                {/* <span>${subtotal}</span> */}
                <span>{carts.length === 0 ? 'ㅡ' : subtotal}</span>
              </div>
              <div>
                <span>Shipping</span>
                {/* <span>{subtotal > 20 ? 'FREE' : '$10'}</span> */}
                <span>
                  {carts.length === 0 ? 'ㅡ' : subtotal > 20 ? 'FREE' : '$10'}
                </span>
              </div>
              <div>
                <span>Sales Tax</span>
                <span>ㅡ</span>
              </div>
              <div>
                <span>Total</span>
                {/* <span>
                  {subtotal > 20 ? `$${subtotal}` : `$${subtotal + 10}`}
                </span> */}
                <span>
                  {carts.length === 0
                    ? 'ㅡ'
                    : subtotal > 20
                    ? `$${subtotal}`
                    : `$${subtotal + 10}`}
                </span>
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
