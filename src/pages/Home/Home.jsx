import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import HeroSection1 from '../../components/HeroSection1/HeroSection1'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <HeroSection1/>
    </div>
  )
}

export default Home
