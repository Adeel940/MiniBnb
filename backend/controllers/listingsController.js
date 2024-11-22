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

const searchListings = (req, res) => {
    const query = req.query.query?.toLowerCase();
    console.log("Received query:", query); // Debugging line

    if (!query) {
        return res.status(400).json({ error: "Search query is required" });
    }

    const results = listings.filter((item) =>
        item.title.toLowerCase().includes(query)
    );

    console.log("Search results:", results); // Debugging line

    if (results.length === 0) {
        return res.status(404).json({ message: "No listings found for your search." });
    }

    res.json(results);
};

module.exports = {
    getAllListings,
    getListingById,
    searchListings,
};
