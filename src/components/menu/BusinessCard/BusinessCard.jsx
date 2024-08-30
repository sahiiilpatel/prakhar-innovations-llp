
import React from 'react';
import './BusinessCard.css';

const BusinessCard = ({ title, content }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default BusinessCard;
