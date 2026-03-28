import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext'

const AddCategory = () => {

  const { navigate } = useContext(AppContext);

  const [categoryData, setCategoryData] = useState({
    name: "",
    logo: "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    setFile(selectedFile);
    setCategoryData({ ...categoryData, logo: selectedFile });
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl)
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
      setCategoryData({ ...categoryData, logo: droppedFile });
      const imageUrl = URL.createObjectURL(droppedFile);
      setPreview(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("categoryData", categoryData);
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/25 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
            Add New Category
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Create a new category for job listings
          </p>
        </div>

        {/* Form Card */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-6 md:p-8 text-left"
        >
          
          {/* Image Upload Section */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
              Category Logo
            </label>
            
            {/* Preview */}
            {preview && (
              <div className="flex justify-center mb-4">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-3 shadow-inner ring-4 ring-indigo-100">
                    <img 
                      src={preview} 
                      alt="Category preview" 
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setFile(null);
                      setCategoryData({ ...categoryData, logo: "" });
                    }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Drag & Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                relative border-2 border-dashed rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer
                ${isDragging 
                  ? 'border-indigo-500 bg-indigo-50/50 shadow-lg shadow-indigo-500/20' 
                  : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50/50'
                }
                ${preview ? 'hidden' : 'block'}
              `}
            >
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center gap-3">
                <div className={`
                  w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300
                  ${isDragging ? 'bg-indigo-500 scale-110' : 'bg-gray-100'}
                `}>
                  <svg className={`w-7 h-7 transition-colors ${isDragging ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    <span className="text-indigo-600">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, SVG up to 5MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Name Input */}
          <div className="mb-6">
            <label 
              htmlFor="name" 
              className="block text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3"
            >
              Category Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <input 
                type="text" 
                id="name"
                name="name" 
                value={categoryData.name} 
                onChange={handleChange} 
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                placeholder="e.g. Software Development, Marketing, Design"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full group relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 active:scale-[0.98] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Category
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          {/* Cancel Link */}
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="w-full mt-4 py-3 text-gray-500 font-medium hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200"
          >
            Cancel & Go Back
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          New categories will be available immediately for job postings
        </p>
      </div>
    </div>
  )
}

export default AddCategory