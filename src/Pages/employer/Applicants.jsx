import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { FiDownload, FiEye, FiUser, FiMail, FiPhone, FiBriefcase, FiCalendar, FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";

const Applicants = () => {
  const { applicantsData } = useContext(AppContext);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "reviewed":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "shortlisted":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "rejected":
        return "bg-rose-500/10 text-rose-600 border-rose-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "⏳";
      case "reviewed":
        return "👁️";
      case "shortlisted":
        return "✨";
      case "rejected":
        return "❌";
      default:
        return "📝";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Applicants List
            </h2>
            <p className="text-slate-500 mt-1 text-sm">
              Manage and review all job applications
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200/60">
              <span className="text-slate-600 text-sm font-medium">
                Total: <span className="text-slate-900 font-bold">{applicantsData?.length || 0}</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            
            {/* Header */}
            <thead className="bg-slate-50/80 backdrop-blur-sm border-b border-slate-200/60">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FiUser className="w-4 h-4" />
                    Name
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FiMail className="w-4 h-4" />
                    Email
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <FiPhone className="w-4 h-4" />
                    Phone
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FiBriefcase className="w-4 h-4" />
                    Job
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider hidden md:table-cell">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    Date
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FiFileText className="w-4 h-4" />
                    Resume
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>

            {/* Body */}
            <motion.tbody 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {applicantsData && applicantsData.length > 0 ? (
                applicantsData.map((applicant, index) => (
                  <motion.tr
                    key={applicant.id}
                    variants={itemVariants}
                    className="border-b border-slate-100 hover:bg-slate-50/80 transition-all duration-300 group"
                  >
                    {/* Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                          {applicant.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {applicant.name}
                          </p>
                          <p className="text-xs text-slate-400 lg:hidden">
                            {applicant.phone}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4">
                      <span className="text-slate-600 text-sm">
                        {applicant.email}
                      </span>
                    </td>

                    {/* Phone */}
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="text-slate-600 text-sm font-medium">
                        {applicant.phone}
                      </span>
                    </td>

                    {/* Job */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium">
                        {applicant.appliedJob}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-slate-500 text-sm">
                        {applicant.applicationDate}
                      </span>
                    </td>

                    {/* Resume */}
                    <td className="px-6 py-4">
                      <a
                        href={applicant.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
                      >
                        <FiEye className="w-4 h-4" />
                        View
                      </a>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border ${getStatusColor(
                          applicant.status
                        )} transition-all duration-300 hover:scale-105`}
                      >
                        <span>{getStatusIcon(applicant.status)}</span>
                        {applicant.status}
                      </span>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-16 text-center">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center">
                        <FiUser className="w-10 h-10 text-slate-300" />
                      </div>
                      <div>
                        <p className="text-slate-800 font-semibold text-lg">No Applicants Found</p>
                        <p className="text-slate-400 text-sm mt-1">Applications will appear here when candidates apply</p>
                      </div>
                    </motion.div>
                  </td>
                </tr>
              )}
            </motion.tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Applicants;