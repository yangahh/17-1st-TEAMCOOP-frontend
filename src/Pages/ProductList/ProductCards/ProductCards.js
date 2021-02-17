import React, { Component } from 'react';
import './ProductCards.scss';

class ProductCards extends Component {
  render() {
    return (
      <div className="productCards">
        <h1>Vitamins</h1>
        <div className="productCardList">
          <div className="productCover">
            <h3>Minerals</h3>
            <p>
              Minerals are inorganic elements our bodies need to function
              properly, and you've probably seen them before on a periodic
              table. We need some of them in relatively large amounts, like
              calcium, and others in trace amounts, like zinc.
            </p>
          </div>
          <div className="productCard">
            <div className="productCard__header">
              <img
                src="https://images.ctfassets.net/t9x0u6p47op0/29RWgFnrvKCGoSUsUMk2OC/5be252f0b45ca376af047dcc1c4855c1/img_bcomplex3_expert.jpg?fit=fill&fl=progressive&fm=jpg&w=800"
                alt=""
              />
              <div className="symbols">
                <img
                  src="https://images.ctfassets.net/t9x0u6p47op0/4995ELFtWVVeFbGMC7IaLH/ca2955c1891720fb22320093c2934ca1/energy.svg?w=100&h=100"
                  alt=""
                />
                <img
                  src="https://images.ctfassets.net/t9x0u6p47op0/1j5VcM5EoYXUiGoC0K9Dco/ef85f01f0dd6246df9b7c1465475fb90/hair.svg?w=100&h=100"
                  alt=""
                />
              </div>
            </div>
            <div className="productCard__text-block">
              <h2>B-Complex</h2>
              <p>The Busy B's</p>
              <ul>
                <li>Fermented for absorption</li>
                <li>Cultured with whole foods</li>
                <li>Energy support*</li>
                <li>SEupports the nervous system*</li>
              </ul>
            </div>
            <div className="productCard__bottom">
              <p>$8</p>
              <button type="button">Add</button>
            </div>
          </div>
          <div className="productCard">
            <div className="productCard__header">
              <img
                src="https://images.ctfassets.net/t9x0u6p47op0/6UpBvRqkSNLcIKL44d9ckE/f8886c0b24ccc79992b782c89f7f708a/img_vitaminb12_card.jpg?fit=fill&fl=progressive&fm=jpg&w=800"
                alt=""
              />
              <div className="symbols">
                <img
                  src="https://images.ctfassets.net/t9x0u6p47op0/4995ELFtWVVeFbGMC7IaLH/ca2955c1891720fb22320093c2934ca1/energy.svg?w=100&h=100"
                  alt=""
                />
              </div>
            </div>
            <div className="productCard__text-block">
              <h2>Vitamin B12</h2>
              <p>The Energizer</p>
              <ul>
                <li>Easy to digest</li>
                <li>Formulated for vegans</li>
                <li>Essential vitamin for energy production *</li>
              </ul>
            </div>
            <div className="productCard__bottom">
              <p>$5</p>
              <button type="button">Add</button>
            </div>
          </div>
          <div className="productCard">
            <div className="productCard__header">
              <img
                src="https://images.ctfassets.net/t9x0u6p47op0/58NYh34h72m2CyMII004G8/448e5a31db9176155842ef416c6515b2/img_vitaminc_expert.jpg?fit=fill&fl=progressive&fm=jpg&w=800"
                alt=""
              />
              <div className="symbols">
                <img
                  src="https://images.ctfassets.net/t9x0u6p47op0/7If5ROmN4yMRUl1aQudvj0/36ad10858e2f42b210b29ae5a92a18c4/immunity.svg?w=100&h=100"
                  alt=""
                />
              </div>
            </div>
            <div className="productCard__text-block">
              <h2>Vitamin C</h2>
              <p>The Citrus Savior</p>
              <ul>
                <li>Easy to digest on empty stomach</li>
                <li>Fermented for absorption</li>
                <li>Scurvy is for pirates</li>
                <li>Helps maintain a healthy immune system*</li>
              </ul>
            </div>
            <div className="productCard__bottom">
              <p>$5</p>
              <button type="button">Add</button>
            </div>
          </div>
          <div className="productCard">
            <div className="productCard__header">
              <img
                src="https://images.ctfassets.net/t9x0u6p47op0/2iBVS7JJmoiyu6WmaUia8U/3f83f8a8e70f90cc41fd7d40babb747a/img_vitamind2_expert.jpg?fit=fill&fl=progressive&fm=jpg&w=800"
                alt=""
              />
              <div className="symbols">
                <img
                  src="https://images.ctfassets.net/t9x0u6p47op0/4qIpwyNWztgwUjpFy99Fn2/3a71d5ebd73161fa8ad8d864b28445af/bones.svg?w=100&h=100"
                  alt=""
                />
              </div>
            </div>
            <div className="productCard__text-block">
              <h2>Vitamin D</h2>
              <p>The Sunny D3</p>
              <ul>
                <li>Easy to digest</li>
                <li>Fermented for absorption with organic yeast and foods</li>
                <li>Essential for calcium absorption and bone health*</li>
              </ul>
            </div>
            <div className="productCard__bottom">
              <p>$5</p>
              <button type="button">Add</button>
            </div>
          </div>
          <div className="productCard">
            <div className="productCard__header">
              <img
                src="https://images.ctfassets.net/t9x0u6p47op0/6g7TUTG4b5B8rIv48h9FjO/74244c82e45b2fda013aa3fdf4124576/img_veg-vitamin-d_expert.jpg?fit=fill&fl=progressive&fm=jpg&w=800"
                alt=""
              />
              <div className="symbols">
                <img
                  src="https://images.ctfassets.net/t9x0u6p47op0/4qIpwyNWztgwUjpFy99Fn2/3a71d5ebd73161fa8ad8d864b28445af/bones.svg?w=100&h=100"
                  alt=""
                />
              </div>
            </div>
            <div className="productCard__text-block">
              <h2>Vitamin D</h2>
              <p>The Vegan Sunny D3</p>
              <ul>
                <li>Easy to digest</li>
                <li>Formulated for vegans</li>
                <li>Essential vitamin for energy production*</li>
              </ul>
            </div>
            <div className="productCard__bottom">
              <p>$5</p>
              <button type="button">Add</button>
            </div>
          </div>
          <div className="productCard">
            <div className="productCard__header">
              <img
                src="https://images.ctfassets.net/t9x0u6p47op0/6Jbetlzyesawuqm6ys2IGG/c9cec6d3412f779f11c57028e3228767/img_prenatal_expert.jpg?fit=fill&fl=progressive&fm=jpg&w=800"
                alt=""
              />
              <div className="symbols">
                <img
                  src="https://images.ctfassets.net/t9x0u6p47op0/j26PRDZvh7zxIYThkfOeH/bc94e5e01c4cf61445a87e1650267cf1/prenatal.svg?w=100&h=100"
                  alt=""
                />
              </div>
            </div>
            <div className="productCard__text-block">
              <h2>Prenatal</h2>
              <p>Baby Love</p>
              <ul>
                <li>Includes 22 essential nutrients</li>
                <li>Fermented for easy digestion</li>
                <li>Manufactured in the United States</li>
                <li>Includes methylfolate, a superior form of folic acid</li>
              </ul>
            </div>
            <div className="productCard__bottom">
              <p>$25</p>
              <button type="button">Add</button>
            </div>
          </div>
          <div className="productCard">
            <div className="productCard__header">
              <img
                src="https://images.ctfassets.net/t9x0u6p47op0/5D4nQd1AZySIkomq8Cuw0s/666aeb7086ef62da1eee57384b88f56b/img_onedaily_2_expert.jpg?fit=fill&fl=progressive&fm=jpg&w=800"
                alt=""
              />
              <div className="symbols"></div>
            </div>
            <div className="productCard__text-block">
              <h2>Multivitamin</h2>
              <p>The Daily Double</p>
              <ul>
                <li>Easy to digest</li>
                <li>Includes 22 essential nutrients</li>
                <li>Fermented for easy digestion</li>
                <li>Manufactured in the United States</li>
                <li>Includes methylfolate, a superior form of folic acid</li>
              </ul>
            </div>
            <div className="productCard__bottom">
              <p>$15</p>
              <button type="button">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCards;
