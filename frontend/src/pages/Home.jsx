import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodItem from '../components/FoodItem';

function Home() {
  const [foods, setFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/foods') 
      .then(res => setFoods(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (food) => {
    setCartItems(prev => [...prev, food]);
  };

  const placeOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/orders', {
        items: cartItems
      });

      alert("Order placed successfully!");
      setCartItems([]); 
    } catch (error) {
      console.error("Order failed:", error);
      alert("Failed to place order. Try again.");
    }
  };

  return (
    <div>
      <h2>Menu</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} addToCart={addToCart} />
        ))}
      </div>

      <hr />

      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} - ₹{item.price}</li>
            ))}
          </ul>
          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default Home;
