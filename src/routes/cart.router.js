const {Router} = require('express')
const {cartModel} = require('../models/cart.model')
const router = Router()


router.get("/", async(req, res)=>{
    try {
        let cart = await cartModel.find()
        res.send({result:"succes", payload: cart})
    } catch (error) {
        console.log(error)
    }
})


  


module.exports = router