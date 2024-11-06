import React from 'react'
import './Footer.css'
import { Divider } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="left-foot">
          WeStream
        </div>
        <div className="right-foot">
          <div className="links">
            <span className='link-title'>Products</span>
            <p>Studio</p>
            <p>Streaming</p>
            <p>Upload</p>
          </div>
          <div className="links">
            <span className='link-title'>Community</span>
            <p>Discord</p>
            <p>Customers</p>
            <p>Developers</p>
          </div>
          <div className="links">
            <span className='link-title'>Resources</span>
            <p>Blog</p>
            <p>Help Center</p>
            <p>Terms of use</p>
          </div>
        </div>
      </div>
      <Divider sx={{ borderColor: "#f0f0f06b" }}/>
      <div className="footer-bottom"> 
        <div className="bottom-left">
        © 2024 Westream, Inc. All Rights Reserved.
        Restream® is the property of Westream, Inc.
        </div>
        <div className="bottom-right">
          
        </div>
      </div>
    </div>
  )
}

export default Footer
