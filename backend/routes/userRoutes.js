import express from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { getAllStudents, getLoggedInUser, updateUserProfile } from '../controllers/userController.js';
import { upload } from '../middlewares/multer.js'; // Import multer
import { isAdmin } from '../middlewares/isAdmin.js';

const userRouter = express.Router();

userRouter.get("/me", isAuthenticated, getLoggedInUser)
userRouter.put("/update-profile", 
  isAuthenticated, 
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'resume', maxCount: 1 }
  ]), 
  updateUserProfile
) // Removed :id from URL
userRouter.get("/all-students", isAuthenticated, isAdmin ,getAllStudents) // Changed 

export default userRouter;