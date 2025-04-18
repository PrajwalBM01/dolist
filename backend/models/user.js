const mongoose = require("mongoose")
const z = require('zod')

const validSignup = z.object({
    username:z.string(),
    email:z.string().email(),
    password:z.string()
})

const userShcema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const user = mongoose.model("User",userShcema);

module.exports={
    user,
    validSignup
}