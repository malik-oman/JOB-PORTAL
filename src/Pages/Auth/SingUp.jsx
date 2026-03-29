import React, { useState, useContext } from 'react'

import { 
    FiUser, 
    FiMail, 
    FiLock, 
    FiEye, 
    FiEyeOff, 
    FiArrowRight, 
    FiUserPlus,
    FiLoader,
    FiCheckCircle,
    FiBriefcase
} from 'react-icons/fi'
import { AppContext } from '../../Context/AppContext'

const Signup = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agreeTerms, setAgreeTerms] = useState(false)
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'jobseeker'
    })

    const { navigate } = useContext(AppContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsLoading(false)

    // ✅ Yahan login success ke baad redirect karo
    navigate('/')   // ya '/home' agar tumhara route wo hai

    console.log(formData)
}

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleLoginRedirect = () => {
        navigate('/login')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 relative overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            <div className="absolute top-40 left-20 w-4 h-4 bg-primary/20 rounded-full animate-bounce delay-300" />
            <div className="absolute bottom-40 right-20 w-3 h-3 bg-primary/30 rounded-full animate-bounce delay-700" />

            <div className="relative z-10 w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-white/50 p-8 sm:p-10 transition-all duration-500 hover:shadow-3xl">
                    
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark mb-4 shadow-lg shadow-primary/30">
                            <FiUserPlus className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                        <p className="text-gray-500 text-sm">Join us and start your career journey</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* User Type Selection */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, userType: 'jobseeker' }))}
                                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all duration-300 ${
                                    formData.userType === 'jobseeker' 
                                        ? 'border-primary bg-primary/5 text-primary' 
                                        : 'border-gray-200 hover:border-primary/50 text-gray-600'
                                }`}
                            >
                                <FiUser className="w-4 h-4" />
                                <span className="text-sm font-medium">Job Seeker</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, userType: 'employer' }))}
                                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all duration-300 ${
                                    formData.userType === 'employer' 
                                        ? 'border-primary bg-primary/5 text-primary' 
                                        : 'border-gray-200 hover:border-primary/50 text-gray-600'
                                }`}
                            >
                                <FiBriefcase className="w-4 h-4" />
                                <span className="text-sm font-medium">Employer</span>
                            </button>
                        </div>

                        {/* Full Name */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiUser className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            </div>
                            <input 
                                type="text" 
                                name="fullName" 
                                placeholder="Full Name" 
                                className="w-full h-12 pl-12 pr-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-gray-400 text-gray-700 transition-all"
                                value={formData.fullName} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        {/* Email */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiMail className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            </div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                className="w-full h-12 pl-12 pr-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-gray-400 text-gray-700 transition-all"
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        {/* Password */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiLock className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            </div>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                placeholder="Password" 
                                className="w-full h-12 pl-12 pr-12 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-gray-400 text-gray-700 transition-all"
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-primary transition-colors"
                            >
                                {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiCheckCircle className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            </div>
                            <input 
                                type={showConfirmPassword ? "text" : "password"} 
                                name="confirmPassword" 
                                placeholder="Confirm Password" 
                                className="w-full h-12 pl-12 pr-12 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-gray-400 text-gray-700 transition-all"
                                value={formData.confirmPassword} 
                                onChange={handleChange} 
                                required 
                            />
                            <button 
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-primary transition-colors"
                            >
                                {showConfirmPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-3">
                            <button
                                type="button"
                                onClick={() => setAgreeTerms(!agreeTerms)}
                                className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                    agreeTerms ? 'bg-primary border-primary text-white' : 'border-gray-300 hover:border-primary'
                                }`}
                            >
                                {agreeTerms && <FiCheckCircle className="w-3.5 h-3.5" />}
                            </button>
                            <p className="text-sm text-gray-500">
                                I agree to the <a href="#" className="text-primary hover:underline">Terms</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 flex items-center justify-center gap-2 group transition-all"
                        >
                            {isLoading ? (
                                <><FiLoader className="animate-spin w-5 h-5" /><span>Creating...</span></>
                            ) : (
                                <><span>Create Account</span><FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-400">Already member?</span>
                        </div>
                    </div>

                    {/* Login Redirect */}
                    <button 
                        type="button"
                        onClick={handleLoginRedirect}
                        className="w-full h-12 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white hover:shadow-lg flex items-center justify-center gap-2 group transition-all"
                    >
                        <FiUser className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Sign In</span>
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account?
                        <button onClick={handleLoginRedirect} className="ml-1 text-primary font-semibold hover:underline">Login here</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup