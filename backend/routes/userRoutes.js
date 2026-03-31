import express from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { getAllStudents, getLoggedInUser, updateUserProfile } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get("/me", isAuthenticated, getLoggedInUser)
userRouter.get("/update-profile/:id", isAuthenticated, updateUserProfile)
userRouter.get("/all-students", isAuthenticated, getAllStudents)

export default userRouter;