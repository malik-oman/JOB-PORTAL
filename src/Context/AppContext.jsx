import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";
import { jobs } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [admin, setAdmin] = useState(false);

  const [categoriesData, setCategoriesData] = useState([]);
  const [jobsData, setJobsData] = useState([]);


  const fetchCategories = () => {
    setCategoriesData(categories);
  }

    const fetchJobsData = () => {
    setJobsData(jobs);
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
    setJobsData

  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;