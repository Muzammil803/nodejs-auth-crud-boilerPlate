const express =require('express')

const app =express()

app.get("/",(req,res)=>{

    res.send("sdsdsd")
console.log(res)
})

app.listen(8080)