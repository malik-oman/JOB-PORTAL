import React from 'react'
import Hero from '../Components/Hero'
import PopularVacancies from '../Components/PopularVacancies'
import HowWorks from '../Components/HowWorks'
import Categories from '../Components/Categories'
import Jobs from '../Components/Jobs'
import { Testimonials } from '../Components/Testimonials'

const Home = () => {
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