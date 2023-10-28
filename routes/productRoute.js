const express =require('express')
const { getProduct, addProduct, deleteProduct, updateProduct } = require('../controllers/productController')
const auth=require("../middleware/auth")
const productRoute =express.Router()

productRoute.get("/",auth,getProduct)

productRoute.post("/",auth,addProduct)
productRoute.delete("/:id",auth,deleteProduct)
productRoute.put("/:id",auth,updateProduct)



 module.exports=productRoute 