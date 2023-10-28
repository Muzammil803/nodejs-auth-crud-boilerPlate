const express =require('express')
const { signup, signin ,getAllUsers, updateUserData} = require('../controllers/userController')

const usersRoute =express.Router()
usersRoute.put("/edit/:id",updateUserData)
usersRoute.get("/",getAllUsers)
usersRoute.post("/signup",signup)

usersRoute.post("/signin",signin)



 module.exports=usersRoute 