import React, { Component } from 'react';
import Star from '../../images/star.png';
import Star2 from '../../images/star2.png';

class NewReview extends Component {
  render() {
    const { userName, title, content, date, img, star } = this.props;

    return (
      <form className="review_form">
        <div className="left_content">
          <div className="user_name">
            <p>{userName}</p>
          </div>
          <div className="review_image">
            <img src={img} />
          </div>
        </div>
        <div className="right_content">
          <span>
            {Array(Number(star) + 1).join('★')}
            {Array(5 - Number(star) + 1).join('☆')}
          </span>
          <div className="rating_title">{title}</div>
          <div className="review_content">{content}</div>
          <div className="date">{date}</div>
        </div>
      </form>
    );
  }
}

export default NewReview;
