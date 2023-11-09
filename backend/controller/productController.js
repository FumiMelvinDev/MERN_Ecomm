const asyncHandler = require('express-async-handler')
const Product = require('../models/product')
const Brand = require('../models/brand')

// @desc Add Product
// @route POST /api/products
// @access PUBLIC
const addProduct = asyncHandler(async (req, res) => {
    const { name, description, price, quantity, brand } = req.body
    const image = req.file

    if (!name || !description || !price || !quantity || !brand) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    // upload image


    const product = await Product.create({
        name,
        description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        brand
    })

    if (product) {
        res.status(201).json({
            _id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            brand: product.brand,
        })
    } else {
        res.status(400).json({ message: 'Something went wrong' })
    }
})

// @desc Get All Product
// @route GET /api/products
// @access PUBLIC
const getAllProducts = asyncHandler(async (req, res) => {
    const product = await Product.find()

    res.status(200).json(product)
})

module.exports = {
    addProduct,
    getAllProducts,
}