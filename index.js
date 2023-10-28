const express =require('express')
const usersRoute = require('./routes/usersRoute')
const productRoute = require('./routes/productRoute')
const app =express()
const mongoose=require('mongoose')
const dotenv=require("dotenv")

dotenv.config()

app.use(express.json())
app.use("/users",usersRoute)
app.use("/product",productRoute)
app.get("/",(req,res)=>{
 
    res.send("no route")
console.log(res)
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected 8080")
    app.listen(8080)

})
.catch((err)=>{
    console.log("error",err)
})