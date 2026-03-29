import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import JobCard from './JobCard'
import { motion } from 'framer-motion'
import { FiBriefcase, FiArrowRight } from 'react-icons/fi'

const Jobs = () => {

  const { jobsData, navigate } = useContext(AppContext)


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6'
      >
        <div className='max-w-2xl'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='p-2 bg-indigo-500/10 rounded-xl'>
              <FiBriefcase className='w-6 h-6 text-indigo-600' />
            </div>
            <span className='text-indigo-600 font-semibold text-sm uppercase tracking-wider'>
              Hot Opportunities
            </span>
          </div>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4'>
            Featured Jobs
          </h1>
          <p className='text-gray-500 text-lg'>
            Discover top opportunities from leading companies. Your next career move starts here.
          </p>
        </div>

      </motion.div>

      {/* Jobs Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {jobsData.map((job, index) => (
          <motion.div
            key={job._id}
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <JobCard job={job} />
          </motion.div>
        ))}
      </motion.div>

      
    </div>
  )
}

export default Jobs