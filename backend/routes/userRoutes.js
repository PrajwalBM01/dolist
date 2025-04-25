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

        const existingUser = await user.findOne({
            email:email
        })

        if(existingUser){
            return res.status(409).json({
                msg:"Email already exists please login, or use new email"
            })
        }

        const hashPass = await bcrypt.hash(password,10)

        const newUser = await user.create({
            username:username,
            email:email,
            password:hashPass
        })

        if(!newUser){
            return res.status(500).json({
                msg:"Something went wrong while creating user, please try again later"
            })
        }

        const token = jwt.sign({userId:newUser._id,email:newUser.email},process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(201).json({
            msg:"User created successfully",
            token: token,
            user:newUser.username
        })
    }catch(err){
        console.error(err)
        res.status(500).json({
            msg:'Something went wrong please try again later.'
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
            return res.status(401).json({
                msg: "Wrong credentials, check email and password"
            });
        }
        
        const match = await bcrypt.compare(password,exisiting.password);
        if(!match){
            return res.status(401).json({
                msg: "Wrong credentials, check email and password"
            });
        }

        const token = jwt.sign({userId:exisiting._id,email:exisiting.email},process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(201).json({
            msg:"Login successful",
            token:token,
            user:exisiting.username
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            msg: "Something wrong with our server, please try again later"
        });
    }
});

module.exports = router