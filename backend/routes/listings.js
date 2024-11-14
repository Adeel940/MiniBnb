const express = require('express');
const router = express.Router();
const { getAllListings, getListingById, searchListings } = require('../controllers/listingsController');

// Route to get all listings
router.get('/', getAllListings);

// Route to get a listing by ID
router.get('/:id', getListingById);

// Route to search listings
router.get('/search', searchListings);

module.exports = router;
