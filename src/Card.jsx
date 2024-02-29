// En Card.jsx
import React from 'react';

const Card = ({ data }) => {
  //console.log(data)
  return (
    <div>
      <h2>Información del Plato</h2>
      <p>Nombre del Plato: {data.dishName}</p>
      <p>Ingredientes: {data.ingredients}</p>
    </div>
  );
};

export default Card;

