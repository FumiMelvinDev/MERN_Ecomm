const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    address: {
        type: String,
        required: [true, 'Enter your first name(s)'],
        trim: true,
    },
    secondAddressLine: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        required: [true, 'Enter your last name'],
        trim: true,
    },
    province: {
        type: String,
        required: [true, 'Enter your email'],
        trim: true,
    },
    postalCode: {
        type: String,
        required: [true, 'Enter password'],
        trim: true,
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Address', addressSchema)