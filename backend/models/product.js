const mongoose = require('mongoose');
const { sluggerPlugin } = require('mongoose-slugger-plugin');

schema.index({ name: 1, slug: 1 }, { name: 'name_slug', unique: true });

schema.plugin(sluggerPlugin, {
    slugPath: 'slug',
    generateFrom: ['name'],
    maxLength: 10,
    index: 'name_slug'
});

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter product name'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Enter product description'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Enter product price'],
        trim: true,
    },
    quantity: {
        type: Number,
        required: [true, 'Enter total number of product in stock'],
        trim: true,
    },
    imageUrl: {
        type: String
    },
    imageKey: {
        type: String
    },
    slug: {
        type: String,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        default: null,
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Product', productSchema)