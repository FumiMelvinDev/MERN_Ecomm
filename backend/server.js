const express = require('express')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errMiddleware')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/brands', require('./routes/Brand'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))