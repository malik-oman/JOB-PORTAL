import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  MapPin,
  DollarSign,
  Clock,
  FileText,
  ListChecks,
  Gift,
  GraduationCap,
  Award,
  Upload,
  X,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import toast from "react-hot-toast";

const PostJob = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    salary: "",
    type: "",
    image: null,
    requirements: "",
    benefits: "",
    jobLevel: "",
    education: "",
    experience: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setJobData({ ...jobData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setJobData({ ...jobData, image: null });
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !jobData.title ||
      !jobData.company ||
      !jobData.description ||
      !jobData.location ||
      !jobData.salary ||
      !jobData.type
    ) {
      toast.error("Please fill all required fields ❌");
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("jobData", jobData);

    toast.success("Job Posted Successfully! 🎉");

    setTimeout(() => {
      navigate("/employer/job-list");
    }, 1000);
  };

  const inputClasses =
    "w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition";

  const labelClasses =
    "block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-black"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <div className="text-right">
            <h1 className="text-3xl font-bold text-gray-900">
              Post a <span className="text-blue-600">New Job</span>
            </h1>
            <p className="text-gray-500">
              Create an attractive job listing
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
        >
          {/* Image Upload */}
          <div className="mb-6">
            <label className={labelClasses}>
              <Upload className="w-4 h-4 text-blue-500" />
              Company Logo
            </label>

            {preview ? (
              <div className="relative w-32">
                <img
                  src={preview}
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <input type="file" onChange={handleFileChange} />
            )}
          </div>

          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <input name="title" onChange={handleChange} placeholder="Job Title *" className={inputClasses} />
            <input name="company" onChange={handleChange} placeholder="Company *" className={inputClasses} />
          </div>

          {/* Location */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <input name="location" onChange={handleChange} placeholder="Location *" className={inputClasses} />
            <input name="salary" onChange={handleChange} placeholder="Salary *" className={inputClasses} />

            <select name="type" onChange={handleChange} className={inputClasses}>
              <option value="">Select Type *</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
            </select>
          </div>

          {/* Extra */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <input name="jobLevel" onChange={handleChange} placeholder="Job Level" className={inputClasses} />
            <input name="education" onChange={handleChange} placeholder="Education" className={inputClasses} />
            <input name="experience" onChange={handleChange} placeholder="Experience" className={inputClasses} />
          </div>

          {/* Description */}
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Description *"
            className={`${inputClasses} mt-4 h-28`}
          />

          {/* Requirements & Benefits */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <textarea name="requirements" onChange={handleChange} placeholder="Requirements" className={`${inputClasses} h-24`} />
            <textarea name="benefits" onChange={handleChange} placeholder="Benefits" className={`${inputClasses} h-24`} />
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
          >
            {isSubmitting ? "Posting..." : "Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;