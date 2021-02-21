import React, { Component } from 'react';
import './CategoryList.scss';

class CategoryList extends Component {
  render() {
    const {
      selectedCategory,
      fetchCategory,
      fetchShowAll,
      fetchNewItem,
    } = this.props;

    return (
      <div className="categoryList">
        <h3 onClick={() => fetchShowAll()}>Shop All</h3>
        <h3 onClick={() => fetchNewItem()}>Recently Added</h3>
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
                        onClick={() => fetchCategory(subcategory)}
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
