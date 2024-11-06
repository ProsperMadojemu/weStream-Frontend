import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home' 
import PastStreams from './pages/PastStreams/pastStreams'
import SignUp from './pages/SignUp/signUp'
import Streams from './pages/Streams/streams'
import Login from './pages/Login/Login'
import About from './pages/About/about'
import Navbar from './components/Navbar/Navbar'
import Signup from './pages/SignUp/signUp'
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
