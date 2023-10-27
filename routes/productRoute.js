const express =require('express')

const usersRoute =express.Router()

usersRoute.get("/",(req,res)=>{
 res.send("getproduct")
})

usersRoute.post("/",(req,res)=>{
    res.send("create product")
   })



 module.exports=usersRoute 