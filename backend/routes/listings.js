const express = require('express');
const router = express.Router();
const { getListings, addListing, deleteListing, getListingById, searchListingsByTitle } = require('../controllers/listingsController');
const authenticate = require('../middleware/authenticate');
const isAdmin = require('../middleware/isAdmin');

// Public route for fetching listings or searching by title
router.get('/', getListings); // No middleware here
router.get('/search', searchListingsByTitle); // Search listings by title
router.get('/:id', getListingById);

// Admin routes
router.post('/', authenticate, isAdmin, addListing);
router.delete('/:id', authenticate, isAdmin, deleteListing);

module.exports = router;
