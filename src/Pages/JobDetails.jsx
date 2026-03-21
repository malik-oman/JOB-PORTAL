import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const JobDetails = () => {

  const {jobsData, isJobApplied, setIsJobApplied, savejob,savedJobs} = useContext(AppContext);
  const {id} = useParams();
  const job = jobsData.find((job) => job._id === parseInt(id));

  return (
    <div className='py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      
      {/* HEADER TITLE */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-7xl mx-auto mb-10'
      >
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 tracking-tight'>
          Job <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>Details</span>
        </h1>
        <p className='mt-2 text-gray-500 text-lg'>Explore your next career opportunity</p>
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='max-w-7xl mx-auto'
      >
        <div className='flex flex-col lg:flex-row gap-8'>
          
          {/* LEFT SECTION */}
          <div className='flex-1 space-y-6'>
            
            {/* JOB HEADER CARD */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className='bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-white/50'
            >
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-5'>
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className='relative'
                >
                  <img src={job.image} alt="" className='w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-lg' />
                  <div className='absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white'></div>
                </motion.div>
                <div className='flex-1'>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>{job.title}</h2>
                  <div className='flex flex-wrap items-center gap-2 mt-2'>
                    <span className='bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium'>
                      at {job.company}
                    </span>
                    <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium'>
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* JOB DESCRIPTION */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className='bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-white/50'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center'>
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h4 className='text-xl font-bold text-gray-900'>Job Description</h4>
              </div>
              <p className='text-gray-600 leading-relaxed text-base md:text-lg'>{job.description}</p>
            </motion.div>

            {/* JOB REQUIREMENTS */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className='bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-white/50'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center'>
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                </div>
                <h4 className='text-xl font-bold text-gray-900'>Requirements</h4>
              </div>
              <ul className='space-y-3'>
                {job.requirements.map((item,index)=>(
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.05) }}
                    className='flex items-start gap-3 text-gray-600' 
                    key={index}
                  >
                    <span className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></span>
                    <span className='text-base md:text-lg'>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* JOB BENEFITS */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className='bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-white/50'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center'>
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                  </svg>
                </div>
                <h4 className='text-xl font-bold text-gray-900'>Benefits</h4>
              </div>
              <ul className='space-y-3'>
                {job.benefits.map((item,index)=>(
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.05) }}
                    className='flex items-start gap-3 text-gray-600' 
                    key={index}
                  >
                    <span className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></span>
                    <span className='text-base md:text-lg'>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT SECTION */}
          <div className='lg:w-96 space-y-6'>
            
            {/* ACTION BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className='bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-white/50'
            >
              <div className='flex gap-3'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>savejob(job)}
                  className='flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 px-4 py-3 rounded-2xl transition-all duration-300 text-gray-700 hover:bg-gray-50'
                >
                  <img src={assets.save_later_icon} className='w-5 h-5' alt="" />
                  <span className='font-medium'>Save</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: isJobApplied ? 1 : 1.05 }}
                  whileTap={{ scale: isJobApplied ? 1 : 0.95 }}
                  onClick={()=> {
                    setIsJobApplied(!isJobApplied);
                    toast.success("Job Applied")
                  }}
                  disabled={isJobApplied}
                  className={`flex-[2] px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    isJobApplied
                      ? "bg-green-500 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30"
                  }`}
                >
                  {isJobApplied ? "✓ Applied": "Apply Now"}
                </motion.button>
              </div>
            </motion.div>

            {/* JOB INFO CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className='bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-white/50'
            >
              <h4 className='text-lg font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Job Overview
              </h4>
              
              <div className='space-y-4'>
                <div className='flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors'>
                  <span className='text-gray-500 font-medium'>Salary</span>
                  <span className='text-gray-900 font-semibold'>{job.salary}</span>
                </div>
                <div className='flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors'>
                  <span className='text-gray-500 font-medium'>Location</span>
                  <span className='text-gray-900 font-semibold'>{job.location}</span>
                </div>
                <div className='flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors'>
                  <span className='text-gray-500 font-medium'>Posted</span>
                  <span className='text-gray-900 font-semibold'>{job.postedDate}</span>
                </div>
                <div className='flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors'>
                  <span className='text-gray-500 font-medium'>Level</span>
                  <span className='text-gray-900 font-semibold'>{job.jobLevel}</span>
                </div>
                <div className='flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors'>
                  <span className='text-gray-500 font-medium'>Education</span>
                  <span className='text-gray-900 font-semibold'>{job.education}</span>
                </div>
                <div className='flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors'>
                  <span className='text-gray-500 font-medium'>Experience</span>
                  <span className='text-gray-900 font-semibold'>{job.experience}</span>
                </div>
              </div>
            </motion.div>

            {/* QUICK APPLY */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className='bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-500/30'
            >
              <h4 className='font-bold text-xl mb-2'>Ready to Apply?</h4>
              <p className='text-blue-100 mb-4 text-sm'>Don't miss this opportunity! Apply now and take the next step in your career.</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={()=> {
                  setIsJobApplied(true);
                  toast.success("Job Applied")
                }}
                className='w-full bg-white text-blue-600 py-3 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg'
              >
                Quick Apply
              </motion.button>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default JobDetails