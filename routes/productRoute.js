const express =require('express')
const { getProduct, addProduct, deleteProduct, updateProduct } = require('../controllers/productController')
// const auth=require("../middleware/auth")
const productRoute =express.Router()

productRoute.get("/",getProduct)

productRoute.post("/",addProduct)
productRoute.delete("/:id",deleteProduct)
productRoute.put("/:id",updateProduct)



 module.exports=productRoute 