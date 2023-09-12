const mongoose = require('mongoose')

const productCollection = "productos"

const productSchema = new mongoose.Schema({
    name: {type: String, index: true},
    category: {type: String},
    price: {type: Number},
    description: {type: String},
    img: {type: String},
    dentroDeCarrito: {type: Boolean}
})

const productModel = mongoose.model(productCollection, productSchema)

module.exports = {productModel}