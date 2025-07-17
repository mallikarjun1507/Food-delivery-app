const express = require('express');
const router = express.Router();

// POST /api/orders
router.post('/orders', (req, res) => {
  const { items } = req.body;

  if (!items || !items.length) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  // Here you could save the order to a database
  console.log('✅ Received order:', items);

  res.status(201).json({ message: 'Order placed successfully' });
});

module.exports = router;
