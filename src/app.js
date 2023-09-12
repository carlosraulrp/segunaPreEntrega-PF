const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routes/products.router')
const cartRouter = require('./routes/cart.router')
const {productModel} = require('./models/product.model')
const app = express()
const PORT = 8080

app.listen(PORT, () =>{
    console.log(`server running in port: ${PORT}`)
})


app.use(express.json())

/* mongoose.connect('mongodb+srv://carlosraulrp:1983@cluster0.latafpn.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log("conectado a la DB de mongo Atlas")
})
.catch(error =>{
    console.error("Error en la conexion", error)
}) */

const enviroment = async()=>{
    await mongoose.connect('mongodb+srv://carlosraulrp:1983@cluster0.latafpn.mongodb.net/?retryWrites=true&w=majority')

    /* let response = await productModel.find({category: "destilados"}).explain("executionStats")
    console.log(response) */

   /*  let productFilter = await productModel.aggregate([
        {$match: {category:"cervezas"}},
        {$sort: {price: 1}}
    ])

    console.log(productFilter) */
}

enviroment()
app.use("/api/products", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/destilados", productRouter)
