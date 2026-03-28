import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const CategoryList = () => {

  const { categoriesData } = useContext(AppContext)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/25">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              All Categories
            </h1>
          </div>
          <p className="text-gray-500 ml-16 text-sm md:text-base">
            Manage your job categories and organize listings efficiently
          </p>
        </div>

        {/* Stats Card */}
        <div className="mb-6 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-white/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Categories</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{categoriesData?.length || 0}</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-xl">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          
          {/* Table Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              All Categories
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold">
                {categoriesData?.length || 0}
              </span>
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="py-4 px-6 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Logo
                  </th>
                  <th className="py-4 px-6 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Category Name
                  </th>
                  <th className="py-4 px-6 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {categoriesData?.map((category) => (
                  <tr
                    key={category._id}
                    className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors duration-200 group"
                  >
                    {/* Logo Cell */}
                    <td className="py-4 px-6">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-2 shadow-inner hover:scale-110 transition-transform duration-300">
                        <img
                          src={category.icon}
                          alt={category.name}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                    </td>

                    {/* Name Cell */}
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold text-gray-800 text-base group-hover:text-indigo-600 transition-colors">
                          {category.name}
                        </p>
                       
                      </div>
                    </td>

                    {/* Actions Cell */}
                    <td className="py-4 px-6">
                      <button className="relative overflow-hidden px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:from-red-600 hover:to-rose-700 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">
              Showing {categoriesData?.length || 0} categories
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryList