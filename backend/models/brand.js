const mongoose = require('mongoose');
const { sluggerPlugin } = require('mongoose-slugger-plugin');

schema.index({ name: 1, slug: 1 }, { name: 'name_slug', unique: true });

schema.plugin(sluggerPlugin, {
    slugPath: 'slug',
    generateFrom: ['name'],
    maxLength: 10,
    index: 'name_slug'
});

const brandSchema = mongoose.create.schema({
    name: {
        type: String,
        required: [true, 'Enter brand name'],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Enter brand description'],
        trim: true,
    },
    slug: {
        type: String,
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Brand', brandSchema)