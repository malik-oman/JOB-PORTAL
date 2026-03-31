import User from "../models/userModel.js";

// LOGGED USER DETAILS=========================
export const getLoggedInUser = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: "Internal Server Error" });
  }
};

// USER PROFILE UPDATE================================

export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const {
      name,
      email,
      phone,
      location,
      education,
      experience,
      skills,
      about,
    } = req.body;

    const updates = {
      name,
      email,
      phone,
      location,
      education,
      experience,
      skills,
      bio:about,
    };

    if(req.files?.profileImage?.[0]){
      updates.image = req.file.profileImage[0].filename;
    }

    if(req.resume?.resume?.[0]){
      updates.resume = req.files.resume[0].filename;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new:true,
    }).select("-password");
    if(!updatedUser){
      return res.json({success:false, message:"User Not Found"})
    }

    return res.json({success:true, message:"Profile Updated Successfully"})
  } catch (error) {
    return res.json({ success: false, message: "internal Server Error" });
  }
};

// GET ALL STUDENT \\ SEEKR==========================

export const getAllStudents = async (req,res) => {
  
  try {
    const students = await User.find({role:"student"}).select("-password");
    return res.json({success: true, students})
  } catch (error) {
    return res.json({success:false, message:"Internal Server Error"})
  }
}
