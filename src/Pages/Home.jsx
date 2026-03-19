import React from 'react'
import Hero from '../Components/Hero'
import PopularVacancies from '../Components/PopularVacancies'
import HowWorks from '../Components/HowWorks'
import Categories from '../Components/Categories'
import Jobs from '../Components/Jobs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <PopularVacancies/>
      <HowWorks/>
      <Categories/>
      <Jobs/>
    </div>
  )
}

export default Home