const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");
const handlebars = require("express-handlebars");
var path = require("path");


const app = express()
const PORT = 8080


app.engine(
    "handlebars",
    handlebars.engine({
      extname: "hbs",
      defaultLayout: false,
      layoutsDir: "views/",
    })
  );
  app.set("views", path.join(__dirname + "/views"));
  app.set("view engine", "handlebars");



 mongoose.connect('mongodb+srv://carlosraulrp:1983@cluster0.latafpn.mongodb.net/?retryWrites=true&w=majority')
 .then(() => {
    console.log("Connected to Mongo Atlas DB");
  })
  .catch((error) => {
    console.log("Error!", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

app.use(express.json())
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);





