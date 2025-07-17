const express = require('express');
const cors = require('cors');
const app = express();

// Import routes
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes'); 

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', foodRoutes);        
app.use('/api', orderRoutes);       

// Server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
