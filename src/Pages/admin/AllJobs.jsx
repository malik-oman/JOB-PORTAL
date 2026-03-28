import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  DollarSign, 
  Clock, 
  ArrowRight,
  FileText,
  Search
} from "lucide-react";

const AllJobs = () => {
  const { jobsData, navigate } = useContext(AppContext);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "approved":
      case "hired":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "rejected":
        return "bg-rose-100 text-rose-700 border-rose-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return <Clock className="w-3 h-3" />;
      case "approved":
      case "hired":
        return <Briefcase className="w-3 h-3" />;
      case "rejected":
        return <FileText className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case "full-time":
        return "bg-violet-100 text-violet-700 border-violet-200";
      case "part-time":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "contract":
        return "bg-cyan-100 text-cyan-700 border-cyan-200";
      case "internship":
        return "bg-pink-100 text-pink-700 border-pink-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                All Jobs
              </h1>
             
            </div>
          </div>
          
          {/* Stats Bar */}
          {jobsData && jobsData.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200">
                <span className="text-gray-500 text-sm">Total: </span>
                <span className="text-gray-900 font-semibold">{jobsData.length}</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                <span className="text-emerald-600 text-sm">Accepted: </span>
                <span className="text-emerald-700 font-semibold">
                  {jobsData.filter(j => ["approved", "hired"].includes(j.status?.toLowerCase())).length}
                </span>
              </div>
              <div className="px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
                <span className="text-amber-600 text-sm">Pending: </span>
                <span className="text-amber-700 font-semibold">
                  {jobsData.filter(j => j.status?.toLowerCase() === "pending").length}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Empty State */}
        {!jobsData || jobsData.length === 0 ? (
          <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/50 p-12 md:p-20 text-center group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                No Applications Yet
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
                Your job applications will appear here once you start applying to positions. Browse available jobs and take the first step toward your dream career.
              </p>
              <button
                onClick={() => navigate("/jobs")}
                className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Browse Jobs
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        ) : (
          /* Applications Grid */
          <div className="grid gap-4">
            {jobsData.map((job, index) => (
              <div
                key={job._id || index}
                onClick={() => navigate(`/job-details/${job._id}`)}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 p-6 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-blue-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Job Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-gray-500">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm">{job.company}</span>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${getStatusColor(job.status)}`}>
                        {getStatusIcon(job.status)}
                        <span>{job.status || "pending"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="flex flex-wrap gap-4 lg:gap-8 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Type</p>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${getTypeColor(job.type)}`}>
                          {job.type || "N/A"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Location</p>
                        <p className="text-gray-900 font-medium">{job.location || "Remote"}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Salary</p>
                        <p className="text-gray-900 font-medium">{job.salary || "Negotiable"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden lg:flex w-10 h-10 rounded-full bg-gray-100 items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJobs;