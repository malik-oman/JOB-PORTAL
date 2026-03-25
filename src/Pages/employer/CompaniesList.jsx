import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import toast from 'react-hot-toast';

const CompaniesList = () => {

 const {companyData, setCompanyData} = useContext(AppContext);

 const handleDelete = (id) => {
  const updatedCompanies = companyData.filter((company) => company._id !== id)
  setCompanyData(updatedCompanies);
  toast.success("Company Deleted Successfully")
 }

  return (
    <div>CompaniesList</div>
  )
}

export default CompaniesList