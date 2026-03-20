import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import JobCard from '../Components/JobCard';

const AllJobs = () => {
  const { jobsData, query } = useContext(AppContext);

  const filteredJobs = jobsData.filter((job) =>job.title.toLowerCase().includes(query.toLowerCase()))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <section className=" bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dream Job</span>
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Discover opportunities that match your skills and passion.
          </p>
        </motion.div>

        {/* Jobs Grid */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredJobs?.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job._id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <JobCard job={job} index={index} />
                </motion.div>
              ))
            ) : (
              <motion.div className="col-span-full text-center py-20">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs available</h3>
                <p className="text-gray-500">Jobs will appear here once available.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default AllJobs;