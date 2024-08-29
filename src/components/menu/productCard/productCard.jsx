
import React from 'react';
import './productCard.css'; 

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className='buy-button'>< a rel="stylesheet" href="buy-link.com" />Buy Now</button>

      </div>
    </div>
  );
};

export default Card;
