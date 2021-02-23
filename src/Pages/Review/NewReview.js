import React, { Component } from 'react';
import Pill from "../../images/pill.jpg";
import Star from "../../images/star.png";
import Star2 from "../../images/star2.png";

class NewReview extends Component {
  render() {
    return (
      <form className="review_form">
      <div className="left_content">
      <div className="user_name">
       <p>{this.props.review.userName}</p>
      </div>
      <div className="review_image">
      <img src={Pill} />
      </div>
      </div>
      <div className="right_content">
      <img className="rating_stars" src={Star} alt="stars"/>
      <img className="rating_stars" src={Star} alt="stars"/>
      <img className="rating_stars" src={Star} alt="stars"/>
      <img className="rating_stars" src={Star2} alt="stars"/>
      <div className="rating_title">
        {this.props.review.title}
        </div>
        <div className="review_content">
       {this.props.review.content}
      </div>
      <div className="date">
       {this.props.review.date}
      </div>
      </div>
    </form>
    );
  }
}

export default NewReview;