import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        company: [
            { label: 'Home', href: '/' },
            { label: 'About us', href: '/about' },
            { label: 'Contact us', href: '/contact' },
            { label: 'Privacy policy', href: '/privacy' }
        ]
    }

    const socialLinks = [
        { icon: 'twitter', href: '#' },
        { icon: 'linkedin', href: '#' },
        { icon: 'github', href: '#' },
        { icon: 'instagram', href: '#' }
    ]

    return (
        <footer className="bg-black text-white relative overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-8 border-b border-white/10">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link to="/" className="inline-block group">
                            <div className="relative overflow-hidden rounded-xl bg-white p-3 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-105">
                                <img 
                                    alt="JobPilot Logo" 
                                    className="h-8 w-auto transition-transform duration-500 group-hover:scale-110" 
                                    src={assets.logo} 
                                />
                            </div>
                        </Link>
                        
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Connecting talent with opportunity. Your trusted partner in finding the perfect career match. Join thousands of professionals who've found their dream jobs through JobPilot.
                        </p>

                        {/* App Download Buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                            <a 
                                href="#" 
                                className="group flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-left">
                                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Get it on</span>
                                    <span className="block text-sm font-semibold text-white">Google Play</span>
                                </div>
                            </a>
                            
                            <a 
                                href="#" 
                                className="group flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                </svg>
                                <div className="text-left">
                                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Download on</span>
                                    <span className="block text-sm font-semibold text-white">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-3 lg:col-start-7">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 relative inline-block">
                            Company
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.href}
                                        className="group flex items-center gap-2 text-gray-400 text-sm transition-all duration-300 hover:text-primary hover:translate-x-2"
                                    >
                                        <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 relative inline-block">
                            Get in Touch
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
                        </h3>
                        <ul className="space-y-4">
                            <li className="group flex items-center gap-3 text-gray-400 transition-all duration-300 hover:text-primary cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-sm">+1-234-567-890</span>
                            </li>
                            <li className="group flex items-center gap-3 text-gray-400 transition-all duration-300 hover:text-primary cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-sm">contact@jobpilot.com</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-6">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
                                >
                                    <svg className="w-4 h-4 text-gray-400 transition-colors duration-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                        {social.icon === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
                                        {social.icon === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                                        {social.icon === 'github' && <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.67-.305-5.46-1.334-5.46-5.931 0-1.305.469-2.381 1.23-3.221-.12-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>}
                                        {social.icon === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        Copyright {currentYear} © <span className="text-primary font-medium">JobPilot</span>. All Rights Reserved.
                    </p>
                    
                    {/* Built by Malik Oman */}
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Built by <span className="text-primary font-semibold hover:text-white transition-colors duration-300 cursor-default">Malik Oman</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer