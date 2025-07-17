import React from 'react';

function FoodItem({ food, addToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '180px', borderRadius: '8px' }}>
      <img src={food.image} alt={food.name} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{food.name}</h3>
      <p>₹{food.price}</p>
      <button onClick={() => addToCart(food)}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
