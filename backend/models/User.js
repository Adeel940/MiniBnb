const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['admin', 'user'], // Use lowercase for consistency
        default: 'user', 
        lowercase: true // Automatically convert input to lowercase
    },
});

module.exports = mongoose.model('User', UserSchema);
