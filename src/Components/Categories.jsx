import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { motion } from 'framer-motion'

const Categories = () => {

  const colors = [
    "from-blue-500/10 to-blue-600/5 text-blue-600 hover:from-blue-500/20 hover:to-blue-600/10 hover:text-blue-700",
    "from-emerald-500/10 to-emerald-600/5 text-emerald-600 hover:from-emerald-500/20 hover:to-emerald-600/10 hover:text-emerald-700",
    "from-amber-500/10 to-amber-600/5 text-amber-600 hover:from-amber-500/20 hover:to-amber-600/10 hover:text-amber-700",
    "from-purple-500/10 to-purple-600/5 text-purple-600 hover:from-purple-500/20 hover:to-purple-600/10 hover:text-purple-700",
    "from-rose-500/10 to-rose-600/5 text-rose-600 hover:from-rose-500/20 hover:to-rose-600/10 hover:text-rose-700",
    "from-indigo-500/10 to-indigo-600/5 text-indigo-600 hover:from-indigo-500/20 hover:to-indigo-600/10 hover:text-indigo-700",
    "from-red-500/10 to-red-600/5 text-red-600 hover:from-red-500/20 hover:to-red-600/10 hover:text-red-700",
    "from-teal-500/10 to-teal-600/5 text-teal-600 hover:from-teal-500/20 hover:to-teal-600/10 hover:text-teal-700",
  ]

  const { categoriesData } = useContext(AppContext)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-center mb-14'
      >
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4'>
          Most Popular Categories
        </h1>
        <p className='text-gray-500 text-lg max-w-2xl mx-auto'>
          Explore opportunities across various industries and find your perfect career match
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'
      >
        {categoriesData.map((item, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`
                group relative overflow-hidden
                flex flex-col items-center justify-center 
                gap-3 
                bg-gradient-to-br ${colorClass}
                border border-gray-200/60 
                rounded-2xl 
                py-8 px-6 
                shadow-sm hover:shadow-xl
                backdrop-blur-sm
                cursor-pointer
                transition-all duration-300 ease-out
              `}
              key={index}
            >
              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

              {/* Icon container with subtle background */}
              <div className="relative w-16 h-16 mb-2 flex items-center justify-center bg-white/60 rounded-2xl shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>

              <div className='flex flex-col items-center justify-center text-center relative z-10'>
                <h3 className='text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300'>
                  {item.name}
                </h3>
                <p className='text-sm font-medium text-gray-500 group-hover:text-gray-600 mt-1 transition-colors duration-300'>
                  {item.position} open {item.position === 1 ? 'position' : 'positions'}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full bg-current opacity-40 group-hover:w-1/3 transition-all duration-300" />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Categories