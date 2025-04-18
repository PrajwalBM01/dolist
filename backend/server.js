const express = require("express")
const dotenv = require('dotenv')
const connection = require("./config/db")
const userRoutes = require("./routes/userRoutes")
dotenv.config()
connection();
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use("/api/v1/user",userRoutes)

app.get("/greet",(req,res)=>{
    res.send("server working")
})

app.listen(port,()=>{
    console.log(`App listning on port ${port}`)
})