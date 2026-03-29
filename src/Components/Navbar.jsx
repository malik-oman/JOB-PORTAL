import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigate, setQuery, user, setUser } = useContext(AppContext);
  const [input, setInput] = useState("");
  const [mobileInput, setMobileInput] = useState(""); // ← NEW: Mobile search state
  const location = useLocation();

  const logout = () => {
    setUser(false);
    navigate("/");
    toast.success("Logout successfull");
  };

  // SEARCH FUNCTION - Desktop
  const handleSearch = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setQuery(input);
      navigate("/all-jobs");
      setInput("");
    }
  };

  // ← NEW: SEARCH FUNCTION - Mobile
  const handleMobileSearch = (e) => {
    if (e.key === "Enter" && mobileInput.trim() !== "") {
      setQuery(mobileInput);
      navigate("/all-jobs");
      setMobileInput("");
      setOpen(false);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/all-jobs", label: "Jobs" },
    { path: "/about", label: "About" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/20 py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={"/"}
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
                    ? "text-primary bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
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
              <div
                className={`flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 transition-all duration-300 ${
                  scrolled ? "w-48" : "w-56"
                } focus-within:w-64 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-primary/10 focus-within:ring-2 focus-within:ring-primary/20`}
              >
                <svg
                  className="w-4 h-4 text-gray-400 transition-colors duration-300 group-focus-within:text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="bg-transparent outline-none text-sm w-full placeholder-gray-400 transition-all duration-300"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleSearch}
                  placeholder="Search jobs..."
                />
              </div>
            </div>

            {/* ← MODIFIED: Desktop User Profile with new styling */}
            {user ? (
              <div
                className="relative inline-block"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {/* Profile Image with Gradient Ring Effect */}
                <div className="relative cursor-pointer group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                  <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-r from-primary to-primary-dark">
                    <img
                      src={assets.user_profile}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Online Status */}
                  <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></div>
                  {/* Hover indicator */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* ← MODIFIED: Dropdown Menu with modern styling */}
                {isOpen && (
                  <div className="absolute right-0 mt-4 w-60 bg-white rounded-2xl shadow-2xl shadow-gray-200/50 py-2 z-50 border border-gray-100 overflow-hidden">
                    {/* User Header */}
                    <div className="px-4 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <img
                          src={assets.user_profile}
                          alt="Profile"
                          className="w-10 h-10 rounded-full object-cover border border-gray-200"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Welcome Back!</p>
                          <p className="text-xs text-gray-500">Manage your account</p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items with Icons */}
                    <div className="py-2">
                      <button
                        onClick={() => navigate("/my-applications")}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <svg
                            className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">My Applications</span>
                      </button>

                      <button
                        onClick={() => navigate("/my-profile")}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <svg
                            className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">My Profile</span>
                      </button>

                      <div className="border-t border-gray-100 my-2 mx-4"></div>

                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-all duration-200 flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="relative overflow-hidden px-7 py-2.5 bg-primary text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Login
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-100 active:scale-95"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-left ${open ? "rotate-45 translate-x-0.5" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${open ? "opacity-0 translate-x-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-left ${open ? "-rotate-45 translate-x-0.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform ${
                isActive(link.path)
                  ? "bg-primary/10 text-primary translate-x-2"
                  : "text-gray-600 hover:bg-gray-50 hover:translate-x-2"
              }`}
              style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}

          {/* ← MODIFIED: Mobile Search with same functionality as Desktop */}
          <div className="px-4 py-3">
            <div className="relative group">
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3.5 transition-all duration-300 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-primary/10 focus-within:ring-2 focus-within:ring-primary/20">
                <svg
                  className="w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="bg-transparent outline-none text-sm w-full placeholder-gray-400 text-gray-700"
                  type="text"
                  value={mobileInput}
                  onChange={(e) => setMobileInput(e.target.value)}
                  onKeyDown={handleMobileSearch}
                  placeholder="Search jobs..."
                />
                {mobileInput && (
                  <button
                    onClick={() => {
                      setQuery(mobileInput);
                      navigate("/all-jobs");
                      setMobileInput("");
                      setOpen(false);
                    }}
                    className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full"
                  >
                    Go
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ← MODIFIED: Mobile User Section with new styling */}
          <div className="px-4 pt-2">
            {user ? (
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl  border border-gray-100">
                {/* Profile Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-r from-primary to-primary-dark">
                      <img
                        src={assets.user_profile}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">My Account</p>
                    <p className="text-xs text-gray-500">Manage your profile</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      navigate("/my-applications");
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="font-medium">My Applications</span>
                  </button>

                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="font-medium">My Profile</span>
                  </button>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-600 hover:bg-red-50 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </div>
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="w-full py-3.5 bg-primary text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary/25 active:scale-95 transition-all duration-200"
              >
                Login to Account
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;