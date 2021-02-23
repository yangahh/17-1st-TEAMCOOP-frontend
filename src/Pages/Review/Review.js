import React, { Component } from 'react';
import './Review.scss';

import NewReview from './NewReview';

class Review extends Component {
  constructor() {
    super();
      this.state = ({
        reviews: [
          {
            userName: 'JIEUN',
            title: 'First off we got sucked into the ...',
            content:
              'First off we got sucked into the marketing and prettiness of this company and simple ease of figuring out my "problems" with a quiz. lol Once received, pretty packaging, and so on and so forth. Vitamins, whatever. Be careful those that are celaic. I don\'t recommend. Everything has sugar in it. Both the Whey and protein powder tastes bad. Not as good as those who specialize in it from a natural foods store for example.',

            date: 'JAN 01',
          },
          {
            userName: 'SAEMSOL',
            title: 'First off we got sucked into the ...',
            content:
              'First off we got sucked into the marketing and prettiness of this company and simple ease of figuring out my "problems" with a quiz. lol Once received, pretty packaging, and so on and so forth. Vitamins, whatever. Be careful those that are celaic. I don\'t recommend. Everything has sugar in it. Both the Whey and protein powder tastes bad. Not as good as those who specialize in it from a natural foods store for example.',

            date: 'JAN 03',
          },
        ],
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
        {/* 첫번째폼 */}
        {this.state.reviews.map(apple => (
          <NewReview review={apple} />
        ))}
      </div>
    );
  }
}

export default Review;
