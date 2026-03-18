import React from 'react'
import { vacancies } from '../assets/assets'
import { FiArrowUpRight } from 'react-icons/fi'

const PopularVacancies = () => {

  const colors = [
    "from-blue-500/10 to-blue-600/5 text-blue-700 hover:from-blue-500/20 hover:to-blue-600/10",
    "from-green-500/10 to-green-600/5 text-green-700 hover:from-green-500/20 hover:to-green-600/10",
    "from-amber-500/10 to-amber-600/5 text-amber-700 hover:from-amber-500/20 hover:to-amber-600/10",
    "from-purple-500/10 to-purple-600/5 text-purple-700 hover:from-purple-500/20 hover:to-purple-600/10",
    "from-pink-500/10 to-pink-600/5 text-pink-700 hover:from-pink-500/20 hover:to-pink-600/10",
    "from-indigo-500/10 to-indigo-600/5 text-indigo-700 hover:from-indigo-500/20 hover:to-indigo-600/10",
    "from-red-500/10 to-red-600/5 text-red-700 hover:from-red-500/20 hover:to-red-600/10",
    "from-teal-500/10 to-teal-600/5 text-teal-700 hover:from-teal-500/20 hover:to-teal-600/10",
  ]

  return (
    <div className='py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center mb-14'>
          <span className='inline-block px-4 py-1.5 bg-gray-900/5 text-gray-600 text-sm font-medium rounded-full mb-4'>
            Explore Opportunities
          </span>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight'>
            Most Popular <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Vacancies</span>
          </h1>
          <p className='mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto'>
            Discover trending job categories with the highest demand and opportunities
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {vacancies.map((item, index) => {
            const colorClass = colors[index % colors.length];
            return (
              <div 
                className={`group relative bg-gradient-to-br ${colorClass} rounded-2xl p-6 cursor-pointer border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-900/5 hover:-translate-y-1.5 transition-all duration-300 ease-out`} 
                key={index}
              >
                {/* Hover Arrow Icon */}
                <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300'>
                  <FiArrowUpRight className='w-5 h-5 opacity-60' />
                </div>

                <div className='flex flex-col gap-3'>
                  <h3 className='text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300'>
                    {item.title}
                  </h3>
                  
                  <div className='flex items-center gap-2'>
                    <span className='inline-flex items-center justify-center w-2 h-2 rounded-full bg-current opacity-60' />
                    <p className='text-sm font-medium opacity-80'>
                      {item.count} open positions
                    </p>
                  </div>
                </div>

                {/* Bottom Progress Bar */}
                <div className='mt-5 h-1 bg-gray-200/50 rounded-full overflow-hidden'>
                  <div 
                    className='h-full bg-current opacity-40 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out'
                    style={{ width: `${Math.min((item.count / 1000) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

      

      </div>
    </div>
  )
}

export default PopularVacancies