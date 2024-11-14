const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingsController');

// Route to create a booking
router.post('/', createBooking);

module.exports = router;
