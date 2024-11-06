import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-left">
        <div className="header-image">
          <img src={assets.image3} alt="" />
        </div>
        <div className="header-image">
          <img src={assets.image2} alt="" />
        </div>
        <div className="header-image">
          <img src={assets.image1} alt="" />
        </div>
      </div>
      <div className="header-right">
        <span className='header-title'>Westream</span>
        <span className='header-subTitle'>Connect with your audience, wherever they are.</span>
      </div>
    </div>
  )
}

export default Header
