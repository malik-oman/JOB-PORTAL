import Category from '../models/categoryModel.js'

// ADD CATEGORY CONTROLLER===============================
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    
    // Check if file is uploaded
    if (!req.file) {
      return res.json({ success: false, message: "Logo is required" });
    }
    
    const logo = req.file.filename;
    
    // Validation
    if (!name || !logo) {
      return res.json({ success: false, message: "All Fields are required" });
    }

    // ✅ YEH CODE AB sahi jagah hai - if block ke BAHAR
    const category = await Category.create({
      name,
      logo,
    });

    return res.json({
      success: true,
      message: "Category added successfully",
      category
    });
    
  } catch (error) {
    console.error("Error in addCategory:", error);
    return res.json({ success: false, message: error.message || "Internal Server Error" });
  }
}

// GET CATEGORY CONTROLLER=======================
export const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.json({ success: true, categories });
  } catch (error) {
    console.error("Error in getCategory:", error);
    return res.json({ success: false, message: "Internal Server Error" });
  }
}

// DELETE CATEGORY CONTROLLER==========================
export const deleteCategory = async (req, res) => {  // ✅ Fixed: req.params not preq.params
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.json({ success: false, message: "Category not found" });
    }
    return res.json({
      success: true,
      message: "Category deleted Successfully"
    });
  } catch (error) {
    console.error("Error in deleteCategory:", error);
    return res.json({ success: false, message: "Internal Server Error" });
  }
}