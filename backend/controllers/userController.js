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
    console.error(error);
    return res.json({ success: false, message: "Internal Server Error" });
  }
};

// USER PROFILE UPDATE================================
export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.user; // ID token se le rahe hain
    const {
      name,
      email,
      phone,
      location,
      education,
      experience,
      skills,
      bio,
    } = req.body;

    console.log("Received body:", req.body);
    console.log("Received files:", req.files);

    const updates = {
      name,
      email,
      phone,
      location,
      education,
      experience,
      skills,
      bio: bio,
    };

    // SAHI TARIKA - req.files use karo
    if (req.files && req.files.image && req.files.image[0]) {
      updates.image = req.files.image[0].filename;
      console.log("Image uploaded:", updates.image);
    }

    if (req.files && req.files.resume && req.files.resume[0]) {
      updates.resume = req.files.resume[0].filename;
      console.log("Resume uploaded:", updates.resume);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    }).select("-password");
    
    if (!updatedUser) {
      return res.json({ success: false, message: "User Not Found" });
    }

    return res.json({ 
      success: true, 
      message: "Profile Updated Successfully",
      user: updatedUser 
    });
  } catch (error) {
    console.error("Error in updateUserProfile:", error);
    return res.json({ success: false, message: error.message || "Internal Server Error" });
  }
};

// GET ALL STUDENT ==========================
export const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).select("-password");
    return res.json({ success: true, students });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: "Internal Server Error" });
  }
}