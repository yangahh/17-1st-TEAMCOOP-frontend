import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContentCard from './Components/ContentCard';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      contentData: [],
    };
  }

  componentDidMount() {
    this.getContentCardData();
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  getContentCardData = () => {
    fetch('/data/content-card-data.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          contentData: res,
        });
      });
  };

  render() {
    const { contentData } = this.state;
    return (
      <div className="Main">
        <div className="main-view-container">
          <div className="main-view-text">
            <h2 className="main-view-header">
              You know your body, we know the science. Let’s work together.
            </h2>
            <p className="main-view-subheader">
              Find the right vitamins, protein, and now collagen too,
              personalized just for you.
            </p>
            <Link to="/quiz">
              <button className="quiz-button">Take the quiz</button>
            </Link>
            <Link to="/productlist" className="product-link">
              Browse all products
            </Link>
          </div>
        </div>
        <div className="main-point-container">
          <h3 className="main-point-header">
            Healthy doesn’t have to be hard. We make it easy.
          </h3>
          <section className="point-content">
            {contentData.map(content => {
              return (
                <ContentCard
                  key={content.id}
                  content_img={content.content_img}
                  content_header={content.content_header}
                  content_detail={content.content_detail}
                />
              );
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
