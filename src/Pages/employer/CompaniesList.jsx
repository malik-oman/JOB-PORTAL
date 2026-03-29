import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import toast from 'react-hot-toast'
import { FiTrash2, FiPlus,  FiImage, FiInfo } from 'react-icons/fi'
import { BsFillBuildingFill } from 'react-icons/bs'

const CompaniesList = () => {
  const { companyData, setCompanyData, navigate } = useContext(AppContext)

  const handleDelete = (id) => {
    const updatedCompanies = companyData.filter((company) => company._id !== id)
    setCompanyData(updatedCompanies)
    toast.success("Company Deleted Successfully", {
      icon: '🗑️',
      style: {
        borderRadius: '12px',
        background: '#1e293b',
        color: '#fff',
      },
    })
  }

  // Truncate text helper
  const truncateText = (text, maxLength = 60) => {
    if (!text) return ''
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <BsFillBuildingFill className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Company List
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Manage your registered companies
              </p>
            </div>
          </div>
          
          <button
            onClick={() => navigate("employer//add-company")}
            className="group relative flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:scale-95"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <FiPlus className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Add Company</span>
          </button>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white/50 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-slate-50 border-b border-gray-100">
                <th className="text-left p-5 font-semibold text-gray-700 uppercase tracking-wider text-sm">
                  <div className="flex items-center gap-2">
                    <FiImage className="w-4 h-4 text-gray-400" />
                    Logo
                  </div>
                </th>
                <th className="text-left p-5 font-semibold text-gray-700 uppercase tracking-wider text-sm">
                  Company Name
                </th>
                <th className="text-left p-5 font-semibold text-gray-700 uppercase tracking-wider text-sm">
                  <div className="flex items-center gap-2">
                    <FiInfo className="w-4 h-4 text-gray-400" />
                    About
                  </div>
                </th>
                <th className="text-left p-5 font-semibold text-gray-700 uppercase tracking-wider text-sm text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {companyData.map((company, index) => (
                <tr
                  key={company._id}
                  className="group hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="p-5">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="font-semibold text-gray-900 text-lg group-hover:text-primary transition-colors duration-300">
                      {company.name}
                    </span>
                  </td>
                  <td className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                      {truncateText(company.about, 80)}
                    </p>
                  </td>
                  <td className="p-5 text-center">
                    <button
                      onClick={() => handleDelete(company._id)}
                      className="group/btn inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5 active:scale-95"
                    >
                      <FiTrash2 className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                      <span className="hidden xl:inline">Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {companyData.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BsFillBuildingFill className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">No companies found</p>
              <p className="text-gray-400 text-sm mt-1">Add your first company to get started</p>
            </div>
          )}
        </div>

        {/* Mobile & Tablet Card View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {companyData.map((company, index) => (
            <div
              key={company._id}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-white/50 p-5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm flex-shrink-0">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary transition-colors duration-300 truncate">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {truncateText(company.about, 100)}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => handleDelete(company._id)}
                  className="group/btn flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/25 active:scale-95"
                >
                  <FiTrash2 className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
          
          {companyData.length === 0 && (
            <div className="col-span-full text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BsFillBuildingFill className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">No companies found</p>
              <p className="text-gray-400 text-sm mt-1">Add your first company to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CompaniesList