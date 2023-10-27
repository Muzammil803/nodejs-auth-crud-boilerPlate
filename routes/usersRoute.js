const express =require('express')
const { signup, signin } = require('../controllers/userController')

const usersRoute =express.Router()

usersRoute.post("/signup",signup)

usersRoute.post("/signin",signin)



 module.exports=usersRoute 