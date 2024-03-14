import React from 'react';

const AchievementItem = ({ achievement }) => {
  return (
    <div className="achievement-item">
      <div className="achievement-details">
        <h3>{achievement.year}</h3>
        <div className="achievement-wrapper">
          <h4>{achievement.award}</h4>
        </div>
      </div>
      <ul className="achievement-list">
        {achievement.info.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementItem;