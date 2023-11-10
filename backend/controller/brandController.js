const asyncHandler = require('express-async-handler')
const Brand = require('../models/brand')

const addBrand = asyncHandler(async (req, res) => {
    const { name, description } = req.body

    if (!name || !description) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if brand already exists
    const brandExists = await Brand.findOne({ name })

    if (brandExists) {
        res.status(400)
        throw new Error('Brand already exists')
    }

    const brand = await Brand.create({
        name,
        description
    })

    if (brand) {
        res.status(201).json({
            _id: brand.id,
            name: brand.name,
            description: brand.description,
        })
    } else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

module.exports = {
    addBrand
}