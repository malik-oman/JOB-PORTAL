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
  HiOutlineUsers,
  HiOutlineBriefcase as HiOutlineJobs,
  HiBars3,
  HiXMark,
  HiArrowRightOnRectangle,
  HiChevronRight,
  HiOutlineShieldCheck
} from "react-icons/hi2";

const AdminLayout = () => {
  const { navigate, setAdmin } = useContext(AppContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const sidebarLinks = [
    { name: "Categories", path: "/admin", icon: HiOutlineBuildingOffice2 },
    { name: "Add Category", path: "/admin/add-category", icon: HiOutlinePlusCircle },
    { name: "All Companies", path: "/admin/all-companies", icon: HiOutlineBriefcase },
    { name: "Applications", path: "/admin/all-applications", icon: HiOutlineDocumentPlus },
    { name: "All Users", path: "/admin/all-users", icon: HiOutlineUsers },
    { name: "Jobs", path: "/admin/all-jobs", icon: HiOutlineJobs },
  ];

  const isActiveRoute = (path) => location.pathname === path;

  const handleLogout = () => {
    setAdmin(false);
    navigate('/');
    toast.success("Logout Successful 👋");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="flex items-center justify-between px-4 lg:px-8 h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img className="h-8" src={assets.logo} alt="logo" />
            <span className="text-xl font-bold text-slate-800">Admin Panel</span>
          </Link>

          {/* PROFILE */}
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-100"
            >
              <div className="w-9 h-9 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold">
                A
              </div>
              <HiChevronRight className={`transition ${isProfileOpen ? "rotate-90" : ""}`} />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-red-50"
                >
                  <HiArrowRightOnRectangle /> Logout
                </button>
              </div>
            )}
          </div>

          {/* MOBILE BTN */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? <HiXMark size={26}/> : <HiBars3 size={26}/>}
          </button>

        </div>
      </header>

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="hidden lg:block w-72 min-h-screen border-r border-slate-200 bg-white p-5">
          <nav className="space-y-2">
            {sidebarLinks.map((item, i) => {
              const Icon = item.icon;
              const active = isActiveRoute(item.path);

              return (
                <NavLink
                  key={i}
                  to={item.path}
                  className={`flex items-center gap-3 p-3 rounded-xl transition
                  ${active 
                    ? "bg-violet-100 text-violet-700" 
                    : "hover:bg-slate-100"}
                  `}
                >
                  <Icon />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
        </aside>

        {/* MOBILE SIDEBAR */}
        {isMobileMenuOpen && (
          <aside className="fixed top-20 left-0 w-64 h-full bg-white border-r border-slate-200 p-5 z-50">
            {sidebarLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={i}
                  to={item.path}
                  onClick={()=>setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded hover:bg-slate-100"
                >
                  <Icon />
                  {item.name}
                </NavLink>
              );
            })}
          </aside>
        )}

        {/* CONTENT */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;