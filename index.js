const express =require('express')
const usersRoute = require('./routes/usersRoute')

const app =express()

app.use("/user",usersRoute)
app.get("/",(req,res)=>{

    res.send("sdsdsd")
console.log(res)
})

app.listen(8080)