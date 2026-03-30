import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

//REGISTER A USER===================

export const register = async (req,res) => {
  try {
     const {name,email,password,role} = req.body
     if(!name || !email ||!password ||!role){
      return res.json({success:false, message:"All filds are required"});
     }
     const image = req.file ? req.file.filename: "";
     const existingUser = await User.findOne({email});
     if(existingUser){
      return res.json({success:false, message:"User Already exists "})
     }

     const hashedPassword = await bcrypt.hash(password, 10);

     const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      image,
     })
      return res.json({success:true, message:"User registered Successfully", user})
  } catch (error) {
    console.log("Error", error)
    return res.json({success:false, message:"Internal Server Error"})
  }
}

//LOGIN USER=========================

export const login = async (req,res) => {
      const {email,password} = req.body;
  try {
      //ADMIN LOGIN==================
      if(email === process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD){
        const token = jwt.sign({email: process.env.ADMIN_EMAIL}, process.env.JWT_SECRET_KEY, {expiresIn:"7d"} );
       res.cookie('token', token),
       {
        http: true
       };
        return res.json({
          success:true,
          message:"Admin Login Successfully",
          user:{email:process.env.ADMIN_EMAIL, role: "admin"},
        })
      }
      // USER LOGIN === =======================

      const user = await User.findOne({email});
      if(!user){
        return res.json({success:false, message:"User not found"})
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch){
        return res.json({success:false, message:"Invalid credentials"});
      }

      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn:"7d"});
      res.cookie("token", token),
      {
        http:true,
      };
      return res.json({
        success:true,
        message:"User Login Successfully",
        user, 
      })

  } catch (error) {
    return res.json({success:false, message:"Internal server error"})
  }
};

//   LOGOUT==================

export const logout = async (req,res) => {
 res.clearCookie('token');
 return res.json({success: true, message:"Logout Successfully"});
}