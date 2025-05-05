const express = require("express");
const router = express.Router();
const authUser = require("../middlewares/auth");
const { task } = require("../models/task");

router.post("/create", authUser, async(req,res)=>{
    const { 
        title,
        description,
        priority,
        dueDate,
        completed
    } = req.body;

    try{
        const newTask = await task.create({
            userId:req.userId,
            title:title,
            description:description,
            priority:priority,
            dueDate:dueDate,
            completed:completed
        })
    
        if(!newTask){
            return res.status(500).json({
                msg:"Somthing went wrong while creating the task"
            })
        }
    
        res.status(201).json({
            msg:"Task created",
            task:newTask
        })

    }catch(error){
        console.error(error)
        res.status(500).json({
            msg:'Somthing went wrong please try again later.'
        })
    }
     
})

router.get("/list",authUser,async(req,res)=>{
    try{
        const list = await task.find({
            userId:req.userId
        })

        if(!list){
            return res.status(409).json({
                msg:"No task were found"
            })
        }

        res.status(201).json({
            msg:"Task fetched succesfully",
            list:list
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            msg:"Somthing went wrong please try again later"
        })
    }
})

router.patch("/update/:id",authUser,async(req,res)=>{
    const taskId = req.params.id;
    const { title, description, priority, dueDate, completed } = req.body;
    
    try {
        // Check if taskId is provided
        if (!taskId) {
            return res.status(400).json({
                msg: "Task ID is required"
            });
        }

        // Create an object with only the fields that were provided
        const updateFields = {};
        if (title !== undefined) updateFields.title = title;
        if (description !== undefined) updateFields.description = description;
        if (priority !== undefined) updateFields.priority = priority;
        if (dueDate !== undefined) updateFields.dueDate = dueDate;
        if (completed !== undefined) updateFields.completed = completed;

        // Find and update the task
        const updatedTask = await task.findOneAndUpdate(
            { _id: taskId, userId: req.userId },
            { $set: updateFields },
            { new: true } // Return the updated document
        );

        if (!updatedTask) {
            return res.status(404).json({
                msg: "Task not found or you don't have permission to edit it"
            });
        }

        res.status(201).json({
            msg: "Task updated successfully",
            task: updatedTask
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Something went wrong, please try again later"
        });
    }
})

router.patch("/complete/:id",authUser, async (req,res)=>{
    const taskId = req.params.id
    try{
        if (!taskId) {
            return res.status(400).json({
                msg: "Task ID is required"
            });
        }
        const completed = await task.findOneAndUpdate(
            {_id:taskId, userId:req.userId},
            {$set:{completed:true}},
            { new: true } 
        )

        if(!completed){
            return res.status(404).json({
                msg: "Task not found or you don't have permission to edit it"
            });
        }

        res.status(201).json({
            msg:"task completed",
            taskUpdate:completed
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            msg:"somnthing went wrong please try again later"
        })
    }
})

router.delete("/delete/:id",authUser,async(req,res)=>{
    const taskId = req.params.id;
    try{
        if(!taskId){
            return res.status(400).json({
                msg:"Task not found"
            })
        }

        const removedTask = await task.deleteOne({
            _id:taskId
        })

        if(!removedTask){
            return res.status(500).json({
                msg:"Could not remove the task."
            })
        }

        res.status(201).json({
            msg:"task deleted",
            deletedTask : removedTask
        })

    }catch(err){
        console.error(err);
        res.status(500).json({
            msg:"Somthing went wrong please try again later."
        })
    }
})


module.exports = router