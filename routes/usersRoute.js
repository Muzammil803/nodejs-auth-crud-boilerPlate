const express =require('express')
const { signup, signin ,getAllUsers} = require('../controllers/userController')

const usersRoute =express.Router()
usersRoute.get("/",getAllUsers)
usersRoute.post("/signup",signup)

usersRoute.post("/signin",signin)



 module.exports=usersRoute 