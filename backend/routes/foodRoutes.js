const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// GET /api/foods
router.get('/foods', foodController.getFoods);

// POST /api/orders
router.post('/orders', (req, res) => {
  const { items } = req.body;

  if (!items || !items.length) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  // Save to DB logic can be added here
  console.log('Received order:', items);

  res.status(201).json({ message: 'Order placed successfully' });
});

module.exports = router;
