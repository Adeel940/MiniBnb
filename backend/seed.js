const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Listing = require('./models/Listing');

dotenv.config();

const seedListings = async () => {
    const sampleListings = [
        {
            images: ["Images/1.jpg", "Images/3.jpg", "Images/2.jpg"],
            title: "Playdate at Polly Pocket’s Compact",
            host: "Polly Pocket",
            status: "Sold out",
        },
        {
            images: ["Images/2.jpg", "Images/1.jpg", "Images/3.jpg"],
            title: "Sleepover at Polly Pocket’s Compact",
            host: "Polly Pocket",
            status: "Sold out",
        },
    ];

    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await Listing.deleteMany(); // Clear existing data
        await Listing.insertMany(sampleListings);
        console.log('Database seeded!');
        mongoose.disconnect();
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.disconnect();
    }
};

seedListings();
