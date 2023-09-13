const mongoose = require('mongoose')




const cartCollection = "cart"


const cartSchema = new mongoose.Schema({
    user: { type: String },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "productos"
            },
            quantity: { type: Number, default: 1 }
        }
    ]
})




const cartModel = mongoose.model(cartCollection, cartSchema)

module.exports = {cartModel}


