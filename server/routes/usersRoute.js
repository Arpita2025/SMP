const router = require('express').Router();
// //const { threadId } = require('worker_threads');
// //const { error } = require('console');
// const bcrypt = require("../models/userModel");
 const bcrypt = require('bcrypt');
 const User = require('../models/userModel');
 const jwt= require("jsonwebtoken");
const authMiddleware = require('../middleware/authMiddleware');

router.post("/register",async (req,res)=> {
    try{
        const user =await User.findOne({ email :req.body.email});
        if(user){
            throw new Error("user already exists");

        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        req.body.password =hashedPassword;
        const newUser =new User(req.body);
                await newUser.save();
                res.send({
                    success: true,
                    message: 'User registered successfully',
                });
     } catch( error){
            res.send ({
                success :false,
                message :error.message,
            });
        }
    });

// user api

router.post("/login",async (req,res)=>{
    try{
        const user =await User.findOne({ email :req.body.email});
        if(!user){
            throw new Error("user don't exists");

        }
        const validPassword =await bcrypt.compare(
            req.body.password,
            user.password
        );
        if(!validPassword){
            throw new Error("Invalid password");
        } 
        const token =jwt.sign({userId : user._id}, process.env.jwt_secret,{expiresIn:"1d"});
       res.send({
        success :true,
        message : "User logged in successfully",
        data : token
       });
    } catch(error){
        res.send ({
            success :false,
            message :error.message,
        });
    }
});
router.get("/get-current-user",authMiddleware, async(req,res)=>{
    try{
        const user =await User.findById(req.body.userId);
        res.send({
            success : true,
            message  : "User fetched successfully",
            data :user,
        })
  

    }catch (error){
        res.send({
            success :false,
            message :error.message,
        });

    }
});
module.exports =router;
