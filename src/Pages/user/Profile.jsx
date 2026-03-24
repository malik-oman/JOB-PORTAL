import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  FileText, 
  Camera, 
  Upload, 
  Save, 
  CheckCircle, 
  AlertCircle,
  X
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    experience: "",
    skills: "",
    about: "",
    profileImage: null,
    resume: null,
  });

  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      
      // Validation for image
      if (name === "profileImage" && file) {
        if (!file.type.startsWith('image/')) {
          toast.error('Please upload a valid image file!', {
            icon: '🖼️',
            style: {
              borderRadius: '12px',
              background: '#fef2f2',
              color: '#dc2626',
              border: '1px solid #fecaca',
            },
          });
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          toast.error('Image size should be less than 5MB!', {
            icon: '⚠️',
            style: {
              borderRadius: '12px',
              background: '#fef2f2',
              color: '#dc2626',
              border: '1px solid #fecaca',
            },
          });
          return;
        }
        setPreview(URL.createObjectURL(file));
        toast.success('Profile image uploaded!', {
          icon: '📸',
          style: {
            borderRadius: '12px',
            background: '#f0fdf4',
            color: '#16a34a',
            border: '1px solid #bbf7d0',
          },
        });
      }

      // Validation for resume
      if (name === "resume" && file) {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
          toast.error('Please upload PDF or Word document!', {
            icon: '📄',
            style: {
              borderRadius: '12px',
              background: '#fef2f2',
              color: '#dc2626',
              border: '1px solid #fecaca',
            },
          });
          return;
        }
        if (file.size > 10 * 1024 * 1024) {
          toast.error('Resume size should be less than 10MB!', {
            icon: '⚠️',
            style: {
              borderRadius: '12px',
              background: '#fef2f2',
              color: '#dc2626',
              border: '1px solid #fecaca',
            },
          });
          return;
        }
        toast.success(`Resume "${file.name}" uploaded!`, {
          icon: '📎',
          style: {
            borderRadius: '12px',
            background: '#eff6ff',
            color: '#2563eb',
            border: '1px solid #bfdbfe',
          },
        });
      }

      setFormData({ ...formData, [name]: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(file));
        setFormData({ ...formData, profileImage: file });
        toast.success('Image dropped successfully!', {
          icon: '🎯',
          style: {
            borderRadius: '12px',
            background: '#f0fdf4',
            color: '#16a34a',
          },
        });
      }
    }
  };

  const removeImage = () => {
    setPreview(null);
    setFormData({ ...formData, profileImage: null });
    toast('Image removed', {
      icon: '🗑️',
      style: {
        borderRadius: '12px',
        background: '#f3f4f6',
        color: '#6b7280',
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email) {
      toast.error('Please fill in required fields!', {
        icon: '⚠️',
        style: {
          borderRadius: '12px',
          background: '#fef2f2',
          color: '#dc2626',
          border: '1px solid #fecaca',
        },
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    console.log("Final Data:", formData);
    
    toast.success('Profile saved successfully! 🎉', {
      duration: 4000,
      icon: '✨',
      style: {
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        padding: '16px 24px',
        fontWeight: '600',
        boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
      },
    });

    setIsSubmitting(false);
  };

  const inputFields = [
    { name: 'name', placeholder: 'Full Name', icon: User, type: 'text', required: true },
    { name: 'email', placeholder: 'Email Address', icon: Mail, type: 'email', required: true },
    { name: 'phone', placeholder: 'Phone Number', icon: Phone, type: 'tel', required: false },
    { name: 'location', placeholder: 'Location / City', icon: MapPin, type: 'text', required: false },
    { name: 'education', placeholder: 'Education (e.g., BS Computer Science)', icon: GraduationCap, type: 'text', required: false },
    { name: 'experience', placeholder: 'Experience (e.g., 3 years)', icon: Briefcase, type: 'text', required: false },
    { name: 'skills', placeholder: 'Skills (comma separated)', icon: Wrench, type: 'text', required: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Card */}
        <motion.div 
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 mb-6 relative overflow-hidden"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl" />
          
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Complete Your Profile
          </motion.h1>
          <p className="text-gray-500 text-center mt-2 text-lg">Showcase your skills and get hired faster! </p>
        </motion.div>

        {/* Main Form Card */}
        <motion.div 
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <form onSubmit={handleSubmit} className="p-8">
            
            {/* Profile Image Section */}
            <motion.div variants={itemVariants} className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                Profile Photo
              </label>
              <div 
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-blue-500 bg-blue-50/50 scale-105' 
                    : 'border-gray-300 hover:border-gray-400 bg-gray-50/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <AnimatePresence mode="wait">
                  {preview ? (
                    <motion.div 
                      key="preview"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="relative inline-block"
                    >
                      <img
                        src={preview}
                        alt="Profile Preview"
                        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
                      />
                      <motion.button
                        type="button"
                        onClick={removeImage}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X size={16} />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="upload"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                        <Camera className="w-10 h-10 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Drag & drop your photo here</p>
                        <p className="text-gray-400 text-sm mt-1">or click to browse</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <input
                  type="file"
                  name="profileImage"
                  onChange={handleChange}
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </motion.div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {inputFields.map((field, index) => (
                <motion.div key={field.name} variants={itemVariants} className="relative group">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                    {field.placeholder} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <div className="relative">
                    <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:bg-white hover:shadow-md text-gray-700 placeholder-gray-400"
                      required={field.required}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* About Section */}
            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                About Yourself
              </label>
              <div className="relative">
                <FileText className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  name="about"
                  placeholder="Tell us about your background, achievements, and career goals..."
                  value={formData.about}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:bg-white hover:shadow-md resize-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </motion.div>

            {/* Resume Upload */}
            <motion.div variants={itemVariants} className="mb-8">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">
                Resume / CV
              </label>
              <div className="relative group">
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 group-hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-gray-700 font-medium">
                        {formData.resume ? formData.resume.name : 'Upload your resume'}
                      </p>
                      <p className="text-gray-400 text-sm">PDF or Word (max 10MB)</p>
                    </div>
                  </div>
                </label>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      <span>Save Profile</span>
                    </>
                  )}
                </span>
              </motion.button>
            </motion.div>

          </form>
        </motion.div>

        {/* Footer Info */}
        <motion.p 
          className="text-center text-gray-400 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Your information is secure and encrypted 🔒
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Profile;