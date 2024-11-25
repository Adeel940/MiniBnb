const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    images: [String],
    title: { type: String, required: true },
    host: { type: String, required: true },
    status: { type: String, required: true },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
