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
            dietaryHabitList.map(dietaryHabit => {
              return (
                <div className="badge-card">
                  <img
                    src={bedgeIcon[dietaryHabit]}
                    alt="badge-image"
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
