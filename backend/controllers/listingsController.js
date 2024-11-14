const listings = require('../data/listings.json');

// Controller: Get all listings
const getAllListings = (req, res) => {
    res.json(listings);
};

// Controller: Get a listing by ID
const getListingById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const listing = listings.find((item) => item.id === id);
    if (listing) {
        res.json(listing);
    } else {
        res.status(404).send({ error: 'Listing not found' });
    }
};

// Controller: Search listings
const searchListings = (req, res) => {
    const query = req.query.query?.toLowerCase();
    const results = listings.filter((item) =>
        item.title.toLowerCase().includes(query)
    );
    res.json(results);
};

module.exports = {
    getAllListings,
    getListingById,
    searchListings,
};
