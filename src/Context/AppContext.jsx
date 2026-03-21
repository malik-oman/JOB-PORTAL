import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";
import { jobs } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [admin, setAdmin] = useState(false);

  const [categoriesData, setCategoriesData] = useState([]);
  const [jobsData, setJobsData] = useState([]);
  const [query,setQuery] = useState("");

  const [isJobApplied,setIsJobApplied] = useState(false);
  const [savedJobs,setSavedJobs] = useState([])


  const fetchCategories = () => {
    setCategoriesData(categories);
  }

    const fetchJobsData = () => {
    setJobsData(jobs);
  }

  const savejob = (job) => {
    setSavedJobs((prev)=>{
      const exists = prev.find((item)=>item._id === job._id);
      if (exists) {
        return prev
      } else {
        return [...prev, job]
      }
    })
    toast.success("Job Saved Successfully")
  }

  useEffect(() => {
    fetchCategories()
    fetchJobsData()
  },[])

  const value = {
    navigate,
    user,
    setUser,
    employer,
    setEmployer,
    admin,
    setAdmin,
    categoriesData,
    setCategoriesData,
    jobsData,
    setJobsData,
    query,
    setQuery,
    isJobApplied,
    setIsJobApplied,
    savedJobs,
    setSavedJobs,
    savejob,

  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;