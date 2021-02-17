import React, { Component } from 'react';
import './CategoryList.scss';

class CategoryList extends Component {
  goToPage = category => {
    if (category === 'shopAll') {
      console.log(category);
      return;
    }
    console.log(category.subcategory);
  };

  render() {
    const { selectedCategory } = this.props;

    return (
      <div className="categoryList">
        <h3 onClick={() => this.goToPage('shopAll')}>Shop All</h3>
        <ul>
          {selectedCategory.map(categoryInfo => {
            return (
              <li className="title" key={categoryInfo.id}>
                {categoryInfo.category}
                <ul>
                  {categoryInfo.subcategories.map(subcategory => {
                    return (
                      <li
                        className={
                          subcategory.imgSrc ? 'subtitle bold' : 'subtitle'
                        }
                        key={subcategory.id}
                        onClick={() => this.goToPage(subcategory)}
                      >
                        {subcategory.imgSrc && <img src={subcategory.imgSrc} />}

                        {subcategory.subcategory}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
