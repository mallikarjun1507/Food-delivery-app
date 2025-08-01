const express = require('express');
const cors = require('cors');
require('dotenv').config();

const initDb = require('./config/initDb'); // Ensures DB exists
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Routes
app.use('/api', foodRoutes);
app.use('/api', orderRoutes);

// Initialize DB and start server
initDb()
  .then(() => {
    app.listen(5000, () => {
      console.log('🚀 Server running on http://localhost:5000');
    });
  })
  .catch((err) => {
    console.error('❌ Failed to initialize DB:', err.message);
    process.exit(1);
  });
