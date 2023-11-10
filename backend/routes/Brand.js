const express = require('express')
const { addBrand } = require('../controller/brandController')
const router = express.Router()

router.post('/', addBrand)

module.exports = router