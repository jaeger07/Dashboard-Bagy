import React from 'react';

import './style.scss';

function Card ({titulo, valor}){
  return (
    <div className="card">
      <span className="card-title">{titulo}</span>
      <span className="card-data">{valor}</span>
    </div>
  );
}

export default Card;