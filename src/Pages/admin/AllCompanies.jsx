import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { FiImage, FiInfo } from 'react-icons/fi'
import { BsFillBuildingFill } from 'react-icons/bs'

const AllCompanies = () => {
  const { companyData } = useContext(AppContext)

  // Truncate text helper
  const truncateText = (text, maxLength = 60) => {
    if (!text) return ''
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <BsFillBuildingFill className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Company List
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Manage your registered companies
            </p>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-slate-50 border-b border-gray-100">
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase">
                  <div className="flex items-center gap-2">
                    <FiImage className="w-4 h-4 text-gray-400" />
                    Logo
                  </div>
                </th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase">
                  Company Name
                </th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase">
                  <div className="flex items-center gap-2">
                    <FiInfo className="w-4 h-4 text-gray-400" />
                    About
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {companyData.map((company, index) => (
                <tr
                  key={company._id}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="p-5">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border shadow-sm">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>

                  <td className="p-5 font-semibold text-gray-900 text-lg">
                    {company.name}
                  </td>

                  <td className="p-5">
                    <p className="text-gray-600 text-sm max-w-md">
                      {truncateText(company.about, 80)}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {companyData.length === 0 && (
            <div className="text-center py-16">
              <BsFillBuildingFill className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 text-lg">No companies found</p>
              <p className="text-gray-400 text-sm">Add your first company</p>
            </div>
          )}
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {companyData.map((company) => (
            <div
              key={company._id}
              className="bg-white rounded-2xl shadow-lg border p-5 hover:shadow-xl transition"
            >
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden border">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {truncateText(company.about, 100)}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {companyData.length === 0 && (
            <div className="col-span-full text-center py-16 bg-white rounded-2xl shadow">
              <BsFillBuildingFill className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 text-lg">No companies found</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default AllCompanies