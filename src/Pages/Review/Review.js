import React, { Component } from 'react';
import './Review.scss';
import NewReview from './NewReview';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
    };
  }

  componentDidMount() {
    fetch('/data/reviewData.json', {
      method: 'GET',
      //'http://10.58.2.243:8000/order/review'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          reviewData: res,
          // reviewData: res.data,
        });
      });
  }
  render() {
    return (
      <div className="Review">
        <header>
          <div>Reviews</div>
          <div className="sorting">
            <label for="sort_by">Sort by: </label>
            <select id="select">
              <option value="recent">Most recent</option>
              <option value="recent">Oldest</option>
              <option value="recent">Higest rating</option>
              <option value="recent">Lowest rating</option>
            </select>
          </div>
        </header>
        {this.state.reviewData.map(review => (
          <NewReview
            img={review.img}
            userName={review.userName}
            title={review.title}
            content={review.content}
            date={review.date}
            img={review.img}
            star={review.star}
          />
        ))}
      </div>
    );
  }
}

export default Review;
