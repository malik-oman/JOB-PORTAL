import React, { useContext, useEffect } from 'react'
import Hero from '../Components/Hero'
import PopularVacancies from '../Components/PopularVacancies'
import HowWorks from '../Components/HowWorks'
import Categories from '../Components/Categories'
import Jobs from '../Components/Jobs'
import { Testimonials } from '../Components/Testimonials'
import { AppContext } from '../Context/AppContext'

const Home = () => {

  const {setQuery} = useContext(AppContext)

  useEffect(() =>{
    setQuery("")
  },[])
  return (
    <div>
      <Hero/>
      <PopularVacancies/>
      <HowWorks/>
      <Categories/>
      <Jobs/>
      <Testimonials/>
    </div>
  )
}

export default Home