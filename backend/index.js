// const express = require('express');
// const app = express();

// // Middleware for JSON parsing
// app.use(express.json());

// const cors = require('cors');
// app.use(cors());


// // Import routes
// const listingsRoutes = require('./routes/listings');
// const bookingsRoutes = require('./routes/bookings');

// // Use routes
// app.use('/api/listings', listingsRoutes);
// app.use('/api/bookings', bookingsRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const listingsRoutes = require('./routes/listings');
const bookingsRoutes = require('./routes/bookings');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/listings', listingsRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

