import React from 'react';
import Card from '../productCard/productCard.jsx';
import { cardData } from '../../data/data.jsx';
import '../productMenu/productMenu.css';

const ProductMenu = () => {
  return (
    <div className="app-container">
      <h1 className="app-title"></h1>
      <div className="card-grid">
        {cardData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
        
      </div>
    </div>
  );
};

export default ProductMenu;