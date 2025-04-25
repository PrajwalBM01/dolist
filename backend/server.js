const express = require("express")
const dotenv = require('dotenv')
const connection = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const taskRoutes = require("./routes/taskRoutes")
const cors = require("cors")
dotenv.config()
connection();
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/task",taskRoutes)

app.get("/greet",(req,res)=>{
    res.send("server working")
})

app.listen(port,()=>{
    console.log(`App listning on port ${port}`)
})