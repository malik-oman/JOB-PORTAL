import express from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { addCompany, deleteCompanies, getAllCompanies, getEmployerCompanis } from '../controllers/companyController.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { upload } from '../middlewares/multer.js';

const companyRouter = express.Router()

companyRouter.post("/add", isAuthenticated, upload.single("logo"), addCompany)
companyRouter.get("/get-employer-companies", isAuthenticated, getEmployerCompanis)
companyRouter.get("/all", isAuthenticated, isAdmin, getAllCompanies)
companyRouter.delete("/delete/:id", isAuthenticated, deleteCompanies)


export default companyRouter;