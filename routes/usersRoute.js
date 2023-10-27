const express =require('express')

const usersRoute =express.Router()

usersRoute.post("/signup",(req,res)=>{
 res.send("signup")
})

usersRoute.post("/signin",(req,res)=>{
    res.send("sign in")
   })



 module.exports=usersRoute 