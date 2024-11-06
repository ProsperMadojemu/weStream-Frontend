import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Drawer from '../Drawer/Drawer'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [nav, setNav] = useState("home")
  const [open, setOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className='Navbar_container'>
        <div className="left">
          <Link to="/" onClick={() => setNav("home")}>We</Link>
        </div>
        <div className="middle">
          <Link to="/" onClick={() => setNav("home")} className={nav === "home" ? "active" : ""}>Home</Link>
          <Link to="/about" onClick={() => setNav("about")} className={nav === "about" ? "active" : ""}>About</Link>
          <Link to="/pricing" onClick={() => setNav("pricing")} className={nav === "pricing" ? "active" : ""}>Pricing</Link>
        </div>
        <div className="right">
          <button className='signIn'>
            <Link to='/login'>Sign In</Link>
          </button>
          <button className='signUp'>
            <Link to='/register'>Get started</Link>
          </button>
          <button className='showDrawer' onClick={() => setOpen(true)}>
            <MenuIcon sx={{ fontSize: 32 }}/>
          </button>

        </div>
      </div>
      <Drawer open={open} setOpen={setOpen} />
    </div>
  )
}

export default Navbar
