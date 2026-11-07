const User = require('../models/UserModel.js')
const bcrypt = require('bcrypt')
const createuser = async (req,res)=>{
try{
    const {username,email,password} = req.body
    const checkexistinguser = await User.findOne({username,email})
    if(checkexistinguser){
       return res.status(409).json({
         message:"user allreday exists"
       })
    }
    
     await User.create({
        username:req.body.username,
        email:req.body.email,
       password:req.body.password
    })
   res.status(201).json({
    message:"created...done"
   })
}
catch(err){
    res.status(500).json({message:err.message})
}
}
 const loginuser = async (req,res)=>{
   const {email,password} = req.body
try{
   const check = await User.findOne({email,password})
   if(!check){
        return res.status(409).json({
         message:"invailde email or password"
       })
   }
   else{
      return res.status(200).json({
         message:"login succsesfully"
      })
   }
}
catch(err){
   console.log(err)
}
 }
module.exports = {createuser,loginuser}
