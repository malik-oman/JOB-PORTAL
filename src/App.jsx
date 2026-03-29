import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Alljobs from "./Pages/Alljobs";
import JobDetails from "./Pages/JobDetails";
import About from "./Pages/About";
import SingUp from "./Pages/Auth/SingUp";
import Login from "./Pages/Auth/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import MyApplication from "./Pages/user/MyApplication";
import Profile from "./Pages/user/Profile";
import EmployerLayout from "./Pages/employer/EmployerLayout";
import CompaniesList from "./Pages/employer/CompaniesList";
import AddCompany from "./Pages/employer/AddCompany";
import PostJob from "./Pages/employer/PostJob";
import JobList from "./Pages/employer/JobList";
import Applicants from "./Pages/employer/Applicants";
import AdminLayout from "./Pages/admin/AdminLayout";
import CategoryList from "./Pages/admin/CategoryList";
import AddCategory from "./Pages/admin/AddCategory";
import AllCompanies from "./Pages/admin/AllCompanies";
import AllApplications from "./Pages/admin/AllApplications";
import AllUsers from "./Pages/admin/AllUsers";
import AllJobs from "./Pages/admin/AllJobs";

const App = () => {
  const adminPath = useLocation().pathname.includes("admin");
  const employerPath = useLocation().pathname.includes("employer");

  return (
    <div>
      {adminPath || employerPath ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-jobs" element={<Alljobs />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />

        {/* =================USER ROUTES===================== */}
        <Route path="/my-applications" element={<MyApplication />} />
        <Route path="/my-profile" element={<Profile />} />

        {/* ================ EMPLOYER ROUTES======================== */}

        <Route path="/employer" element={<EmployerLayout />}>
        <Route index element={<CompaniesList/>}/>
        <Route path="add-company" element={<AddCompany/>}/>
        <Route path="post-job" element={<PostJob/>}/>
        <Route path="job-list" element={<JobList/>}/>
        <Route path="applicants" element={<Applicants/>}/>
        </Route>

        {/* =============== ADMIN ROUTE====================== */}

         <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<CategoryList/>}/>
        <Route path="add-category" element={<AddCategory/>}/>
        <Route path="all-companies" element={<AllCompanies/>}/>
        <Route path="all-applications" element={<AllApplications/>}/>
        <Route path="all-users" element={<AllUsers/>}/>
        <Route path="all-jobs" element={<AllJobs/>}/>
        </Route>
      </Routes>

      {adminPath || employerPath ? null : <Footer />}
      <Toaster />
    </div>
  );
};

export default App;
