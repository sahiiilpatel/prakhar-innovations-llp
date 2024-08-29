import React from 'react';
import './aboutCard.css'; 


const Card = ({ name, email, occupation, photo }) => {
  return (
    <div className="acard">
      <img src={photo} alt={`${name}'s photo`} className="acard-photo" />
      <h2 className="acard-name">{name}</h2>
      <p className="acard-occupation">{occupation}</p>
      <a href={`mailto:${email}`} className="acard-email">{email}</a>
    </div>
  );
};

export default Card;