const mongoose = require('mongoose')
const mongoosePaginate = require("mongoose-paginate-v2")

const productCollection = "productos"

const productSchema = new mongoose.Schema({
    name: {type: String},
    category: {type: String, index: true},
    price: {type: Number},
    description: {type: String},
    img: {type: String},
    dentroDeCarrito: {type: Boolean}
})

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model(productCollection, productSchema)

module.exports = {productModel}