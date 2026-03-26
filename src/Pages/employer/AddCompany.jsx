import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { FiUpload, FiFileText, FiArrowRight } from 'react-icons/fi'
import { BsFillBuildingFill } from 'react-icons/bs'

const AddCompany = () => {

  const {navigate} = useContext(AppContext)

 const [companyData, setCompanyData] = useState({
  name:"",
  about:"",
  logo: null,
 });

 const [file,setFile] = useState(null);
 const [preview,setPreview] = useState(null) 
 const [isSubmitting, setIsSubmitting] = useState(false)
 
 const handleChange = (e) => {
  setCompanyData({...companyData, [e.target.name]: e.target.value });
 };

 const handleFileChange = (e) => {
  const selectedFile = e.target.files[0]
  setCompanyData({...companyData, logo: selectedFile });
  if(selectedFile){
    const imageUrl = URL.createObjectURL(selectedFile);
    setPreview(imageUrl)
  }
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true)
  console.log('companyData', companyData);
  setTimeout(() => {
    setIsSubmitting(false)
    navigate("/employer")
  }, 800)
 }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 mb-4'>
            <BsFillBuildingFill className='w-8 h-8 text-white' />
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent mb-2'>
            Register Company
          </h1>
          <p className='text-gray-500 text-sm sm:text-base max-w-md mx-auto'>
            Create your company profile and start posting jobs to find the best talent
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className='bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white/50 overflow-hidden'>
          {/* Progress Bar */}
          <div className='h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full'></div>
          
          <div className='p-6 sm:p-8 lg:p-10'>
            {/* Logo Upload Section */}
            <div className='mb-8'>
              <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider'>
                <FiUpload className='w-4 h-4 text-indigo-500' />
                Company Logo
              </label>
              
              <div className='relative group'>
                <div className={`flex flex-col items-center justify-center w-full h-48 rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden ${
                  preview 
                    ? 'border-indigo-500 bg-indigo-50/50' 
                    : 'border-gray-300 bg-gray-50 hover:border-indigo-400 hover:bg-indigo-50/30'
                }`}>
                  
                  {preview ? (
                    <div className='relative w-full h-full flex items-center justify-center p-4'>
                      <img 
                        src={preview} 
                        alt="Company Logo" 
                        className='max-h-36 max-w-full object-contain rounded-xl shadow-lg'
                      />
                      <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl'>
                        <span className='text-white font-medium flex items-center gap-2'>
                          <FiUpload className='w-5 h-5' />
                          Change Logo
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className='flex flex-col items-center justify-center py-8 px-4 text-center'>
                      <div className='w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                        <FiUpload className='w-7 h-7 text-indigo-600' />
                      </div>
                      <p className='text-sm font-medium text-gray-700 mb-1'>Drop your logo here</p>
                      <p className='text-xs text-gray-400'>or click to browse</p>
                      <p className='text-xs text-gray-400 mt-2'>SVG, PNG, JPG up to 5MB</p>
                    </div>
                  )}
                  
                  <input 
                    type="file" 
                    accept='image/*' 
                    onChange={handleFileChange} 
                    className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                  />
                </div>
              </div>
            </div>

            {/* Company Name */}
            <div className='mb-6'>
              <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider'>
                <BsFillBuildingFill className='w-4 h-4 text-indigo-500' />
                Company Name
              </label>
              <div className='relative group'>
                <input 
                  type="text" 
                  value={companyData.name} 
                  onChange={handleChange} 
                  name='name'  
                  placeholder='e.g. Tech Solutions Inc.' 
                  className='w-full bg-gray-50/50 border border-gray-200 rounded-xl py-4 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-indigo-500/5'
                />
                <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>
              </div>
            </div>

            {/* About */}
            <div className='mb-8'>
              <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider'>
                <FiFileText className='w-4 h-4 text-indigo-500' />
                About Company
              </label>
              <div className='relative group'>
                <textarea 
                  rows={5} 
                  value={companyData.about} 
                  onChange={handleChange} 
                  name='about'  
                  placeholder='Tell us about your company, mission, and culture...' 
                  className='w-full bg-gray-50/50 border border-gray-200 rounded-xl py-4 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 resize-none hover:bg-white hover:shadow-md hover:shadow-indigo-500/5'
                />
                <div className='absolute bottom-3 right-3 text-xs text-gray-400'>
                  {companyData.about.length} chars
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type='submit' 
              disabled={isSubmitting}
              className='w-full group relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed'
            >
              <span className='relative z-10 flex items-center justify-center gap-2'>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Company...
                  </>
                ) : (
                  <>
                    Create Company
                    <FiArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                  </>
                )}
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
            </button>

            {/* Back Link */}
            <button 
              type="button"
              onClick={() => navigate('/employer')}
              className='w-full mt-4 text-gray-500 hover:text-indigo-600 text-sm font-medium transition-colors duration-300'
            >
              ← Back to Dashboard
            </button>
          </div>
        </form>

        {/* Footer Info */}
        <p className='text-center text-gray-400 text-xs mt-6'>
          By registering, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default AddCompany