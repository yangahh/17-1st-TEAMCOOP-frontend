import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './Overview.scss';

const allAllergyList = ['soy', 'nuts', 'milk', 'wheat', 'fish'];
class Overview extends Component {
  render() {
    const { category, allergyList, nutritionLink } = this.props;
    return (
      <div className="Overview">
        <section className="overview-container">
          <div className="overview-header">The basics</div>
          <div className="accordion-container">
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>SUGGESTED USE</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {category === 'powders' ? (
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
                  {allergyList && allergyList.length ? (
                    <p>
                      Contain:
                      {allergyList && allergyList.join(', ')}
                    </p>
                  ) : (
                    ''
                  )}
                  <p>
                    Does not contain:
                    {allergyList &&
                      allAllergyList
                        .filter(allergy => !allergyList.includes(allergy))
                        .join(', ')}
                  </p>
                  <a href={nutritionLink} className="nutrition-link">
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
      </div>
    );
  }
}

export default Overview;
