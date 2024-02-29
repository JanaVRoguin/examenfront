import React, { useState } from 'react';
import Card from './Card';
import FoodForm from './form';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [showCard, setShowCard] = useState(false);

  // const handleFormSubmit = (data) => {
  //   console.log(data)
  //   setFormData(data);
  // };

  return (
    <div>
      <h1>Mi Aplicación</h1>
      <FoodForm setFormData={setFormData} setShowCard= {setShowCard}/>
      {showCard && 
        // Si formData tiene datos, renderiza el componente Card
        <Card data={formData} />
}
    </div>
  );
};

export default App;

