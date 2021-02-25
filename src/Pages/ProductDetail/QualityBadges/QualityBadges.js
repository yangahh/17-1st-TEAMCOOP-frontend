import React, { Component } from 'react';
import bedgeIcon from '../badgeIconData';
import './QualityBadges.scss';

class QualityBadges extends Component {
  render() {
    const { dietaryHabitList } = this.props;
    return (
      <div className="QualityBadges">
        <section className="quality-badges-container">
          {dietaryHabitList &&
            dietaryHabitList.map((dietaryHabit, index) => {
              return (
                <div className="badge-card" key={index}>
                  <img
                    alt={dietaryHabit + ' badge icon'}
                    src={bedgeIcon[dietaryHabit]}
                    className="badge-image"
                  />
                  <div className="badge-name">{dietaryHabit}</div>
                </div>
              );
            })}
        </section>
      </div>
    );
  }
}

export default QualityBadges;
