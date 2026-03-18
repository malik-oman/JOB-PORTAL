import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { navigate } = useContext(AppContext)
    const location = useLocation()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/all-jobs', label: 'Jobs' },
        { path: '/about', label: 'About' }
    ]

    const isActive = (path) => location.pathname === path

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
            scrolled 
                ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/20 py-3' 
                : 'bg-white py-4'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link 
                        to={'/'} 
                        className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
                    >
                        <img 
                            src={assets.logo} 
                            alt="Logo" 
                            className="h-8 w-auto transition-all duration-300 group-hover:brightness-110"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                                    isActive(link.path)
                                        ? 'text-primary bg-primary/10'
                                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                }`}
                            >
                                {link.label}
                                {isActive(link.path) && (
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Search & Login - Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Search */}
                        <div className="relative group">
                            <div className={`flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 transition-all duration-300 ${
                                scrolled ? 'w-48' : 'w-56'
                            } focus-within:w-64 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-primary/10 focus-within:ring-2 focus-within:ring-primary/20`}>
                                <svg className="w-4 h-4 text-gray-400 transition-colors duration-300 group-focus-within:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input 
                                    className="bg-transparent outline-none text-sm w-full placeholder-gray-400 transition-all duration-300" 
                                    type="text" 
                                    placeholder="Search jobs..." 
                                />
                            </div>
                        </div>

                        {/* Login Button */}
                        <button 
                            onClick={() => navigate('/login')} 
                            className="relative overflow-hidden px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 group"
                        >
                            <span className="relative z-10">Login</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setOpen(!open)} 
                        aria-label="Menu" 
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-100 active:scale-95"
                    >
                        <div className="w-5 h-4 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-left ${open ? 'rotate-45 translate-x-0.5' : ''}`} />
                            <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${open ? 'opacity-0 translate-x-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-left ${open ? '-rotate-45 translate-x-0.5' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden transition-all duration-500 ease-out ${
                open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-4 py-4 space-y-1">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform ${
                                isActive(link.path)
                                    ? 'bg-primary/10 text-primary translate-x-2'
                                    : 'text-gray-600 hover:bg-gray-50 hover:translate-x-2'
                            }`}
                            style={{ transitionDelay: open ? `${index * 50}ms` : '0ms' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    
                    {/* Mobile Search */}
                    <div className="px-4 py-2">
                        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input 
                                className="bg-transparent outline-none text-sm w-full placeholder-gray-400" 
                                type="text" 
                                placeholder="Search jobs..." 
                            />
                        </div>
                    </div>

                    {/* Mobile Login */}
                    <div className="px-4 pt-2">
                        <button 
                            onClick={() => {
                                setOpen(false)
                                navigate('/login')
                            }} 
                            className="w-full py-3 bg-primary text-white text-sm font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar