import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SimilarProductCard.scss';

class SimilarProductCard extends Component {
  goToDetail = id => {
    this.props.history.push(`/product/${id}`);
  };

  render() {
    const { id, imageUrl, title, subTitle, healthGoalList } = this.props;
    return (
      <div className="SimilarProductCard" onClick={() => this.goToDetail(id)}>
        <div className="similar-product-card">
          <div className="image-wrap">
            <div className="card-image">
              <img alt={title + ' image'} src={imageUrl} />
            </div>
          </div>
          <ul className="healthGoal">
            {healthGoalList &&
              healthGoalList.map((healthGoal, index) => {
                return <li key={index}>{healthGoal}</li>;
              })}
          </ul>
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
        </div>
      </div>
    );
  }
}

export default withRouter(SimilarProductCard);
