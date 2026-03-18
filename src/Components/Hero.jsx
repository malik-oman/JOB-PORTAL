import React from "react";
import { assets, heroData } from "../assets/assets";

const Hero = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-[#F1F2F4] via-white to-[#E8E9EB] relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* LEFT SECTION */}
        <div className="max-w-lg w-full flex flex-col gap-6 text-center md:text-left animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Find a Job that suits your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              interest & skills
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            Discover thousands of job opportunities from top companies around
            the world. Build your career with confidence by applying to roles
            that match your skills, experience, and passion.
          </p>

        </div>

        {/* RIGHT SECTION */}
        <div className="w-full max-w-md md:max-w-lg relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <img
            src={assets.hero_img}
            alt="hero"
            className="w-full h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
        </div>
      </div>

      {/* HERO DATA SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          
          {heroData.map((item, index) => (
            <div
              key={item._id}
              className="group bg-white/80 backdrop-blur-md w-[280px] h-[120px] rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 flex items-center gap-5 px-6 justify-start border border-gray-100/50 hover:border-blue-200/50 hover:-translate-y-1 transition-all duration-300 ease-out"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                <img 
                  src={item.icon} 
                  alt="" 
                  className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {item.count}
                </p>
                <p className="text-sm text-gray-500 font-medium tracking-wide">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;