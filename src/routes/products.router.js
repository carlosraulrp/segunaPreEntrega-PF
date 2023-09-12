const {Router} = require('express')
const {productModel} = require('../models/product.model')
const router = Router()


router.get("/", async(req, res)=>{
    try {
        let products = await productModel.find()
        res.send({result:"succes", payload: products})
    } catch (error) {
        console.log(error)
    }
})

router.get("/", async(req, res)=>{
    try {
        let productFilter = await productModel.aggregate([
            {$match: {category:"destilados"}}
            
            
        ])
        
        res.send({result:"succes", payload: productFilter})
    } 
    
    catch (error) {
        console.log(error)
    }


})


module.exports = router