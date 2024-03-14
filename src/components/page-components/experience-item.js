import React from 'react';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience-item">
      <div className="experience-details">
        <h3>{experience.year}</h3>
        <div className="info-wrapper">
          <h4>{experience.job}</h4>
          <p className="place">{experience.company}</p>
        </div>
      </div>
      <ul className="description-list">
        {experience.details.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;