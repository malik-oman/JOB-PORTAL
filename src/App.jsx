import React from 'react'
import { Route,  Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Alljobs from './Pages/Alljobs'
import JobDetails from './Pages/JobDetails'
import About from './Pages/About'
import SingUp from './Pages/Auth/SingUp'
import Login from './Pages/Auth/Login'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {

 const adminPath = useLocation().pathname.includes("admin")
 const employerPath = useLocation().pathname.includes("employer")

  return (
    <div >

      {adminPath || employerPath? null :   <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all-jobs' element={<Alljobs/>}/>
        <Route path='/job-details/:id' element={<JobDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/singup' element={<SingUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

           {adminPath || employerPath? null :   <Footer/>}
    </div>
  )
}

export default App