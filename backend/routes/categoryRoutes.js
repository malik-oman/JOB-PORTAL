import express from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { addCategory, deleteCategory, getCategory } from '../controllers/categoryController.js';
import { upload } from '../middlewares/multer.js';


const categoryRouter = express.Router();

categoryRouter.post("/add", isAuthenticated, isAdmin,upload.single("logo"),addCategory)
categoryRouter.get("/all", getCategory)
categoryRouter.delete("/delete/:id",  isAuthenticated, isAdmin, deleteCategory)


export default categoryRouter;