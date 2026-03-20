import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { motion } from 'framer-motion'
import { FiMapPin, FiDollarSign, FiClock, FiArrowUpRight } from 'react-icons/fi'
import { assets } from '../assets/assets'

const JobCard = ({ job }) => {

  const { navigate } = useContext(AppContext)

  // Job type colors
  const typeColors = {
    'Full-time': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'Part-time': 'bg-blue-100 text-blue-700 border-blue-200',
    'Contract': 'bg-amber-100 text-amber-700 border-amber-200',
    'Freelance': 'bg-purple-100 text-purple-700 border-purple-200',
    'Internship': 'bg-pink-100 text-pink-700 border-pink-200',
    'Remote': 'bg-indigo-100 text-indigo-700 border-indigo-200'
  }

  const getTypeStyle = (type) => {
    return typeColors[type] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/job-details/${job._id}`)}
      className='group relative overflow-hidden p-6 flex flex-col rounded-2xl border border-gray-200/80 bg-white hover:border-indigo-300/50 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer transition-all duration-300 w-full'
    >
      {/* Gradient Background Effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* Content */}
      <div className='relative z-10'>
        {/* Header: Title & Arrow */}
        <div className='flex items-start justify-between mb-4'>
          <h1 className='text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300 line-clamp-2 flex-1 pr-2'>
            {job.title}
          </h1>
          <motion.div 
            className='p-2 rounded-full bg-gray-100 group-hover:bg-indigo-100 transition-colors duration-300'
            whileHover={{ rotate: 45 }}
          >
            <FiArrowUpRight className='w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300' />
          </motion.div>
        </div>

        {/* Tags Row */}
        <div className='flex flex-wrap items-center gap-3 mb-5'>
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${getTypeStyle(job.type)}`}>
            {job.type}
          </span>
          <div className='flex items-center gap-1.5 text-gray-500 text-sm'>
            <FiDollarSign className='w-4 h-4 text-gray-400' />
            <span className='font-medium text-gray-700'>{job.salary}</span>
          </div>
        </div>

        {/* Divider */}
        <div className='h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-5' />

        {/* Company Info */}
        <div className='flex items-center gap-4'>
          {/* Company Logo */}
          <div className='relative'>
            <div className='w-14 h-14 rounded-xl bg-gray-50 border border-gray-200 p-2 flex items-center justify-center overflow-hidden group-hover:border-indigo-200 group-hover:shadow-md transition-all duration-300'>
              <img 
                src={job.image} 
                alt={job.company} 
                className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300' 
              />
            </div>
            {/* Online indicator */}
            <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full' />
          </div>

          {/* Company Details */}
          <div className='flex-1 min-w-0'>
            <h3 className='font-bold text-gray-900 text-base truncate group-hover:text-indigo-700 transition-colors duration-300'>
              {job.company}
            </h3>
            <div className='flex items-center gap-1.5 text-gray-500 text-sm mt-0.5'>
              <FiMapPin className='w-3.5 h-3.5 text-gray-400' />
              <span className='truncate'>{job.location}</span>
            </div>
          </div>

          {/* Posted Time */}
          <div className='hidden sm:flex items-center gap-1.5 text-gray-400 text-xs'>
            <FiClock className='w-3.5 h-3.5' />
            <span>2d ago</span>
          </div>
          <img src={assets.save_later_icon} alt="" />
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className='absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-out' />
    </motion.div>
  )
}

export default JobCard