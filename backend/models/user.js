const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Enter your first name(s)'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Enter your last name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Enter your email'],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Enter password'],
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: [true, 'Enter phone number'],
        trim: true,
    },
    role: {
        type: String,
        enum: ['admin', 'customer']
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)