// const express = require('express');
// const router = express.Router();
// const { getAllListings, getListingById, searchListings } = require('../controllers/listingsController');

// // Route to get all listings
// router.get('/', getAllListings);
// // Route to search listings
// router.get('/search', searchListings);

// // Route to get a listing by ID
// router.get('/:id', getListingById);



// module.exports = router;


const express = require('express');
const router = express.Router();
const { getListings } = require('../controllers/listingsController');

router.get('/', getListings);

module.exports = router;
