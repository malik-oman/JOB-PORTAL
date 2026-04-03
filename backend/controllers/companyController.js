import Company from "../models/companyModel.js";


// ADD-COMPANY CONTROLLER=======================
export const addCompany = async (req,res) => {
  try {
    const {id} = req.user;
    const {name, about} = req.body;
    const logo = req.file.filename;

    if(!name || !about || !logo) {
      return res.json({success:false, message:"All Fields Are Required"});
    }

    const company = await Company.create({
      name,
      about,
      logo,
      createdBy: id,
    });

    return res.json({
      success:true,
      message:"Company added successfully",
      company,
    })
  } catch (error) {
    return res.json({success:false, message:"Internal server error"})
  }
}

// GET Employer COMPANY=======================
export const getEmployerCompanis = async (req,res) => {
  try {
    const {id} = req.user;
    const companies = await Company.find({createdBy:id});
    if(!companies){
      return res.json({success:false, mesaage:"No company Found"})
    } else {
      return res.json({success:true, companies})
    }
  } catch (error) {
    return res.json({success:false, message:"Internal server error"})
  }
}

// GET ALL COMPANIES====================

export const getAllCompanies = async (req,res) => {
  try {
    const companies = await Company.find();
    if(!companies){
      return res.json({success:false, message:"No Companies found"})
    }
    return res.json({success:true, companies})
  } catch (error) {
        return res.json({success:false, message:"Internal server error"})
  }
}

// deleted companies==========================

export const deleteCompanies = async (req,res) => {
  try {
     const {id} = req.params;
     const company = await Company.findByIdAndDelete(id);
     if(!company){
      return res.json({success:false, message:"Company not found"});
     }
     return res.json({success:true, message:"Company deleted successfully"})
  } catch (error) {
       return res.json({success:false, message:"Internal server error"})
  }
}