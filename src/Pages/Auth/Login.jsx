import React, { useState, useContext } from 'react'

import { 
    FiUser, 
    FiMail, 
    FiLock, 
    FiEye, 
    FiEyeOff, 
    FiArrowRight, 
    FiLogIn,
    FiUserPlus,
    FiLoader
} from 'react-icons/fi'
import { AppContext } from '../../Context/AppContext'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // AppContext se navigate function lena
    const { navigate,user,setUser } = useContext(AppContext)

    const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setUser(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsLoading(false)

    // ✅ YE LINE ADD KARO
    navigate('/')

    console.log(formData)
}

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Signup page pe redirect karne ka function
    const handleSignupRedirect = () => {
        navigate('/singup')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            {/* Floating Shapes */}
            <div className="absolute top-40 right-20 w-4 h-4 bg-primary/20 rounded-full animate-bounce delay-300" />
            <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/30 rounded-full animate-bounce delay-700" />

            <div className="relative z-10 w-full max-w-md">
                {/* Card Container */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-white/50 p-8 sm:p-10 transition-all duration-500 hover:shadow-3xl">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark mb-4 shadow-lg shadow-primary/30 animate-fade-in">
                            <FiLogIn className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Sign in to continue your journey
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Field */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiMail className="w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-primary" />
                            </div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                className="w-full h-12 pl-12 pr-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-gray-400 text-gray-700"
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FiLock className="w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-primary" />
                            </div>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                placeholder="Password" 
                                className="w-full h-12 pl-12 pr-12 bg-gray-50/50 border border-gray-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-gray-400 text-gray-700"
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-primary transition-colors duration-300"
                            >
                                {showPassword ? (
                                    <FiEyeOff className="w-5 h-5" />
                                ) : (
                                    <FiEye className="w-5 h-5" />
                                )}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <button 
                                type="button" 
                                className="text-sm text-primary hover:text-primary-dark transition-colors duration-300 hover:underline"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                        >
                            {isLoading ? (
                                <>
                                    <FiLoader className="animate-spin w-5 h-5" />
                                    <span>Please wait...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-400">New here?</span>
                        </div>
                    </div>

                    {/* Sign Up Redirect Button */}
                    <button 
                        type="button"
                        onClick={handleSignupRedirect}
                        className="w-full h-12 rounded-xl border-2 border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group"
                    >
                        <FiUserPlus className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        <span>Create Account</span>
                    </button>

                    {/* Toggle State Text */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have an account?
                        <button 
                            type="button"
                            onClick={handleSignupRedirect}
                            className="ml-1 text-primary font-semibold hover:text-primary-dark transition-colors duration-300 hover:underline"
                        >
                            Sign up here
                        </button>
                    </p>
                </div>

                {/* Footer Text */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    By continuing, you agree to our <a href="#" className="hover:text-primary transition-colors">Terms</a> and <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                </p>
            </div>
        </div>
    )
}

export default Login