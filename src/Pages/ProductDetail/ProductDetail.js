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
      allAllergyList: ['Soy', 'Nuts', 'Milk', 'Wheat', 'Fish'],
      detailData: {},
    };
  }

  componentDidMount() {
    this.getProductDetailData();
  }

  getProductDetailData = () => {
    fetch('/data/productDetail.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          detailData: res,
        });
      });
  };

  render() {
    const { allAllergyList, detailData } = this.state;
    console.log(detailData.allergyList);
    // detailData.allergyList && (
    // const doNotCotain = allAllergyList.filter(allergy => {
    //   return !detailData.allergyList.includes(allergy);
    // }))
    // console.log(doNotCotain);
    return (
      <div className="ProductDetail">
        {/* <nav className="product-nav">
          <div className="nav-container">11</div>
        </nav> */}
        <section className="main-product-container">
          <div className="product-image-content">
            <img
              src={detailData['productImageSrc']}
              alt="product image"
              className="product-image"
            />
          </div>
          <div className="product-content">
            <ul className="tag-list">
              {detailData.healthGoalList &&
                detailData.healthGoalList.map(goal => <li>{goal}</li>)}
            </ul>
            <h1 className="display-title">{detailData.title}</h1>
            <h2 className="sub-title">{detailData.subTitle}</h2>
            <ul className="description">
              {detailData.description &&
                detailData.description.map(description => (
                  <li>{description}</li>
                ))}
            </ul>
            <a href={detailData.nutritionLink} className="nutrition-link">
              See supplement facts
            </a>
            {/* // 파우더일때만 보이게 변경 */}
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
          {/* {console.log(detailData.dietaryHabitList)} */}
          {detailData.dietaryHabitList &&
            detailData.dietaryHabitList.map(dietaryHabit => {
              return (
                <div className="badge-card">
                  <img
                    src={bedgeIcon[dietaryHabit]}
                    alt="badge-image"
                    className="badge-image"
                  />
                  <div className="badge-name">{dietaryHabit}</div>
                </div>
              );
            })}
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
                  {detailData.category === 'powders' ? (
                    <p>
                      Mix two scoops in 8-10 oz. of hot or cold liquid. For best
                      results, use daily.
                    </p>
                  ) : (
                    <p>
                      All of our products are created with optimal absorption in
                      mind. We generally recommend that you take our supplements
                      together with a meal such as breakfast or lunch.
                    </p>
                  )}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading allowMultipleExpanded={true}>
                  <AccordionItemButton>ALLERGY</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Contain:
                    {detailData.allergyList &&
                      detailData.allergyList.join(', ')}
                  </p>
                  <p>
                    Does not contain:
                    {detailData.allergyList &&
                      allAllergyList
                        .filter(
                          allergy => !detailData.allergyList.includes(allergy),
                        )
                        .join(', ')}
                  </p>
                  <a href={detailData.nutritionLink} className="nutrition-link">
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
        <section className="similar-product-container">
          <h2>Similar products</h2>
          <h3>Explore some of our other supplements</h3>
          <div className="product-card-container">
            {detailData.similarProduct &&
              detailData.similarProduct.map(product => {
                return (
                  <div className="similar-product-card">
                    <div className="card-image">
                      <img
                        src={product.imageUrl}
                        alt={product.title + ' image'}
                      />
                    </div>
                    <ul className="healthGoal">
                      {product.healthGoalList &&
                        product.healthGoalList.map(healthGoal => {
                          return <li>{healthGoal}</li>;
                        })}
                    </ul>
                    <h3>{product.title}</h3>
                    <h4>{product.subTitle}</h4>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
