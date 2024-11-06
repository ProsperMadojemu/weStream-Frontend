import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home' 
import PastStreams from './pages/PastStreams/PastStreams'
import SignUp from './pages/SignUp/SignUp.jsx'
import Streams from './pages/Streams/Streams'
import Login from './pages/Login/Login'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Pricing from './pages/Pricing/Pricing'

const App = () => {  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/past-streams' element={<PastStreams />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/streams' element={<Streams />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
