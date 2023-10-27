const express =require('express')
const usersRoute = require('./routes/usersRoute')
const app =express()
const mongoose=require('mongoose')

app.use(express.json())
app.use("/users",usersRoute)
app.get("/",(req,res)=>{

    res.send("sdsdsd")
console.log(res)
})

mongoose.connect("mongodb+srv://muzammil:muzammil2003@cluster0.wqqm6tm.mongodb.net/")
.then(()=>{
    console.log("connected 8080")
    app.listen(8080)

})
.catch((err)=>{
    console.log("error",err)
})