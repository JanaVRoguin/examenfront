import React, { useState } from 'react';

const FoodForm = ({setShowCard, setFormData}) => {
  const [dishName, setDishName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación para el primer input (nombre del plato)
    if (dishName.trim().length < 3 && dishName.charAt(0) === " ") {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    // Validación para el segundo input (ingredientes)
    if (ingredients.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setShowCard(true)
    setFormData ({
        dishName,
        ingredients
    })

    // Si las validaciones son exitosas, puedes realizar alguna acción aquí
    console.log('¡Formulario enviado con éxito!');
    
    // Limpiar el mensaje de error si todo está correcto
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dishName">Nombre del Plato:</label>
        <input
          type="text"
          id="dishName"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="ingredients">Ingredientes:</label>
        <input
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default FoodForm;
