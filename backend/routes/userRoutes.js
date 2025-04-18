const express = require('express');
const { validSignup, user } = require('../models/user');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post("/signup", async(req,res)=>{
    const { username, email, password } = req.body;
    try{
        const {success} = validSignup.safeParse({
            username:username,
            email:email,
            password:password
        })
        
        if(!success){
            return res.status(400).json({
                msg:"provide valid inputs"
            })
        }

        const existingUser = await user.findOne(email)

        if(existingUser){
            return res.status(200).json({
                msg:"Email already exits please login, or use new emial"
            })
        }

        const hashPass = await bcrypt.hash(password,10)

        const newUser = await user.create({
            username:username,
            email:email,
            password:hashPass
        })

        if(!newUser){
            return res.status(400).json({
                msg:"somthing went wrong while creating user, please try again later"
            })
        }

        res.status(200).json({
            msg:"User create succefully, please login",
            newUser
        })
    }catch(err){
        console.error(err)
        res.status(400).json({
            msg:'Somthing went wrong please try again later.'
        })
    }
})

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const exisiting = await user.findOne({
            email:email
        });
        if(!exisiting){
            return res.json("Wrong credentials, check email and password");
        }
        
        const match = await bcrypt.compare(password,exisiting.password);
        if(!match){
            return res.json("Wrong credentials, check email and password");
        }

        const token = jwt.sign({userId:exisiting._id,email:exisiting.email},process.env.JWT_SECRET);

        res.json({
            msg:"Login succefull",
            token:token
        })
    }catch(err){
        console.log(err);
        return res.json("Somthing up with our server, please try agian some time")
    }
});



module.exports = router