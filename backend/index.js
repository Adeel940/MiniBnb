const express = require('express');
const app = express();

// Middleware for JSON parsing
app.use(express.json());

const cors = require('cors');
app.use(cors());


// Import routes
const listingsRoutes = require('./routes/listings');
const bookingsRoutes = require('./routes/bookings');

// Use routes
app.use('/api/listings', listingsRoutes);
app.use('/api/bookings', bookingsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
