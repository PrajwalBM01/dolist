const mongoose = require("mongoose");
const { number } = require("zod");

const taskSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User',
        required:true
    },

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        default:""
    },

    priority:{
        type:Number,
        default:4
    },

    dueDate:{
        type:Date,
        default:Date.now
    },

    completed:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})


const task = mongoose.model("Task",taskSchema)

module.exports={task}