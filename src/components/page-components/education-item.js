import React from 'react';

const EducationItem = ({ education }) => {
  return (
    <div className="education-item">
      <div className="education-details">
        <h3>{education.year}</h3>
        <div className="info-wrapper">
          <h4>{education.name}</h4>
          <p className="place">{education.place}</p>
        </div>
      </div>
      <ul className="description-list">
        {education.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationItem;