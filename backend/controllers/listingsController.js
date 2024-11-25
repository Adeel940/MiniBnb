const Listing = require('../models/Listing');

// Get all listings or search by title
const getListings = async (req, res) => {
  const { title } = req.query; // Get the search query from the request
  try {
    let listings;
    if (title) {
      // Search listings by title
      listings = await Listing.find({ title: { $regex: title, $options: 'i' } }); // Case-insensitive search
    } else {
      listings = await Listing.find(); // Fetch all listings if no search query
    }
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listings', error });
  }
};

// Get listing details by ID
const getListingById = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listing details', error });
  }
};

// Add a new listing
const addListing = async (req, res) => {
  const { title, host, status, images } = req.body;
  try {
    const newListing = new Listing({
      title,
      host,
      status,
      images,
    });
    await newListing.save();
    res.status(201).json({ message: 'Listing added successfully!', listing: newListing });
  } catch (err) {
    res.status(500).json({ message: 'Error adding listing', error: err });
  }
};

// Delete a listing by ID
const deleteListing = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findByIdAndDelete(id);
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.status(200).json({ message: 'Listing deleted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting listing', error: err });
  }
};

// Search listings by title
const searchListingsByTitle = async (req, res) => {
  const { query } = req.query;
  try {
    const listings = await Listing.find({
      title: { $regex: query, $options: 'i' } // Case-insensitive search
    });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Error searching listings', error });
  }
};

module.exports = { getListings, getListingById, addListing, deleteListing, searchListingsByTitle };
