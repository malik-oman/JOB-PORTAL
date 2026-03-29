import React from 'react'
import { howWorks } from '../assets/assets'

const HowWorks = () => {
  return (
    <div className='py-16 md:py-24 bg-gradient-to-b from-[#F1F2F4] to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center tracking-tight'>
          How JobPilot Works
        </h1>
        <p className='mt-4 text-center text-gray-500 max-w-2xl mx-auto text-sm md:text-base'>
          Get your dream job in just a few simple steps
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16'>
          {howWorks.map((item, index) => (
            <div 
              className='group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 border border-gray-100 hover:border-blue-200' 
              key={index}
            >
              {/* Step Number Badge */}
              <div className='absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white text-sm font-semibold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                {index + 1}
              </div>

              {/* Icon Container */}
              <div className='w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500'>
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className='w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-500'
                />
              </div>

              {/* Content */}
              <div className='text-center'>
                <h4 className='text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300'>
                  {item.title}
                </h4>
                <p className='text-sm md:text-base text-gray-500 leading-relaxed'>
                  {item.desc}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowWorks