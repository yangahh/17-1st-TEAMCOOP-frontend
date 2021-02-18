import React, { Component } from 'react';
import './ContentCard.scss';

class ContentCard extends Component {
  render() {
    const { content_img, content_header, content_detail } = this.props;
    return (
      <div className="ContentCard">
        <img
          alt={content_header}
          src={content_img}
          className="point-card-image"
        />
        <h4 className="point-card-header">{content_header}</h4>
        <p className="point-card-detail">{content_detail}</p>
      </div>
    );
  }
}

export default ContentCard;
