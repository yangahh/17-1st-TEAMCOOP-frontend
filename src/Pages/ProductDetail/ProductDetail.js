import React, { Component } from 'react';
import bedgeIcon from './badgeIconData';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      allergyList: ['Soy', 'Nuts', 'Milk', 'Wheat', 'Fish'],
    };
  }

  render() {
    const { allergyList } = this.state;
    const doNotCotain = allergyList.filter(allergy => {
      return !['Soy'].includes(allergy);
    });
    return (
      <div className="ProductDetail">
        {/* <nav className="product-nav">
          <div className="nav-container">11</div>
        </nav> */}
        <section className="main-product-container">
          <div className="product-image-content">
            <img
              src="//images.ctfassets.net/t9x0u6p47op0/1XkujrgRJeDZKpAeWuS6cK/316424a9efefa7ba6784904f460e77e6/hero_collagen_lemon_passionfruit.jpg?fm=webp"
              alt="product image"
              className="product-image"
            />
          </div>
          <div className="product-content">
            <ul className="tag-list">
              <li>SKIN</li>
              <li>NAILS</li>
            </ul>
            <h1 className="display-title">Collagen-matcha</h1>
            <h2 className="sub-title">The Skin Hero</h2>
            <ul className="description">
              <li>Supports hydration and elasticity in skin*</li>
              <li>Helps strengthen nails*</li>
              <li>Grass-fed bovine collagen</li>
              <li>Made with premium Japanese matcha powder</li>
            </ul>
            <a href="" className="nutrition-link">
              See supplement facts
            </a>
            <select name="product-count" className="product-count">
              <option value="">15 Serving Tub</option>
              <option value="">5 Packets</option>
            </select>
            <button className="add-cart-btn">
              Add
              <span className="btn-line" />
              $32
            </button>
          </div>
        </section>
        <section className="quality-badges-container">
          <div className="badge-card">
            <img
              src={bedgeIcon['Gluten Free']}
              alt="badge-image"
              className="badge-image"
            />
            <div className="badge-name">Gluten Free</div>
          </div>
          <div className="badge-card">
            <img
              src={bedgeIcon['Non-GMO']}
              alt="badge-image"
              className="badge-image"
            />
            <div className="badge-name">Non-GMO</div>
          </div>
        </section>
        <section className="overview-container">
          <div className="overview-header">The basics</div>
          <div className="accordion-container">
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>SUGGESTED USE</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    All of our products are created with optimal absorption in
                    mind. We generally recommend that you take our supplements
                    together with a meal such as breakfast or lunch.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading allowMultipleExpanded={true}>
                  <AccordionItemButton>ALLERGY</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Contain: Soy</p>
                  <p>
                    Does not contain:
                    {doNotCotain.join(', ')}
                  </p>
                  <a href="" className="nutrition-link">
                    See supplement facts
                  </a>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="overview-image">
            <img
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1295&q=80"
              alt="overview-image"
            />
          </div>
        </section>
        <section className="similar-product-container">4</section>
      </div>
    );
  }
}

export default ProductDetail;
