import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";
import { Link, Outlet, NavLink, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { 
HiOutlineBuildingOffice2, 
HiOutlinePlusCircle, 
HiOutlineBriefcase, 
HiOutlineDocumentPlus, 
HiOutlineClipboardDocumentList,
HiBars3,
HiXMark,
HiArrowRightOnRectangle,
HiChevronRight
} from "react-icons/hi2";

const EmployerLayout = () => {
const { navigate, setEmployer } = useContext(AppContext);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const location = useLocation();

const sidebarLinks = [
  { 
    name: "Companies", 
    path: "/employer", 
    icon: HiOutlineBuildingOffice2 
  },
  { 
    name: "Add Company", 
    path: "/employer/add-company", 
    icon: HiOutlinePlusCircle 
  },
  { 
    name: "Jobs", 
    path: "/employer/job-list", 
    icon: HiOutlineBriefcase 
  },
  { 
    name: "Post Jobs", 
    path: "/employer/post-job", 
    icon: HiOutlineDocumentPlus 
  },
  { 
    name: "Applications", 
    path: "/employer/applicants", 
    icon: HiOutlineClipboardDocumentList 
  },
];

// Exact match check for active route
const isActiveRoute = (path) => {
  return location.pathname === path;
};

const handleLogout = () => {
  setEmployer(false);
  navigate('/');
  toast.success("Logout Successful", {
    icon: '👋',
    style: {
      borderRadius: '12px',
      background: '#1f2937',
      color: '#fff',
    },
  });
};

return (
  <div className="min-h-screen bg-slate-50">
    {/* Header */}
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-8 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 p-2">
            <img 
              className="h-6 w-auto object-contain brightness-0 invert" 
              src={assets.logo} 
              alt="Job Portal"
            />
          </div>
          <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Employer Portal
          </span>
        </Link>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-full">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-violet-500/30">
              E
            </div>
            <span className="text-sm font-semibold text-slate-700">Employer</span>
          </div>
          
          <button 
            onClick={handleLogout}
            className="group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-rose-600 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300"
          >
            <HiArrowRightOnRectangle className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <span>Logout</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          {isMobileMenuOpen ? (
            <HiXMark className="w-6 h-6 text-slate-700" />
          ) : (
            <HiBars3 className="w-6 h-6 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile User Info */}
      <div className="md:hidden border-t border-slate-100 px-4 py-3 bg-slate-50/80 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
              E
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Employer Account</p>
              <p className="text-xs text-slate-500">Manage your jobs</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-500 rounded-full shadow-md"
          >
            <HiArrowRightOnRectangle className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </header>

    <div className="flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:block w-72 min-h-[calc(100vh-64px)] bg-white border-r border-slate-200 sticky top-16">
        <div className="p-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">
            Main Menu
          </p>
          <nav className="space-y-1">
            {sidebarLinks.map((item, index) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item.path);
              
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className={`
                    group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 ease-out relative overflow-hidden
                    ${isActive 
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30" 
                      : "text-slate-600 hover:bg-slate-100 hover:text-violet-600"
                    }
                  `}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                  )}
                  
                  <div className="flex items-center gap-3">
                    <div className={`
                      p-2 rounded-lg transition-all duration-300
                      ${isActive 
                        ? "bg-white/20" 
                        : "bg-slate-100 group-hover:bg-violet-100"
                      }
                    `}>
                      <Icon className={`
                        w-5 h-5 transition-transform duration-300
                        ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                      `} />
                    </div>
                    <span className="font-semibold text-sm">{item.name}</span>
                  </div>

                  {/* Arrow for active */}
                  {isActive && (
                    <HiChevronRight className="w-5 h-5 animate-pulse" />
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
              <div>
                <p className="text-sm font-bold">Pro Tip</p>
                <p className="text-xs text-slate-400">Quick Support</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Need help posting jobs? Our team is here 24/7.
            </p>
          
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Mobile */}
      <aside className={`
        fixed md:hidden top-[129px] left-0 w-80 h-[calc(100vh-129px)] bg-white border-r border-slate-200 z-50
        transition-transform duration-300 ease-out shadow-2xl
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">
            Main Menu
          </p>
          <nav className="space-y-1">
            {sidebarLinks.map((item, index) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item.path);
              
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden
                    ${isActive 
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg" 
                      : "text-slate-600 hover:bg-slate-100"
                    }
                  `}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                  )}
                  
                  <div className="flex items-center gap-3">
                    <div className={`
                      p-2 rounded-lg
                      ${isActive ? "bg-white/20" : "bg-slate-100"}
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm">{item.name}</span>
                  </div>

                  {isActive && (
                    <HiChevronRight className="w-5 h-5" />
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-[calc(100vh-64px)] p-4 lg:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto animate-fadeIn">
          <Outlet />
        </div>
      </main>
    </div>
  </div>
);
};

export default EmployerLayout;