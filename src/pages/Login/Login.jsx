import React from 'react'
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='login'>
        <div className="form-title">
          <h2>Westream</h2>
          <p>Sign in to your account</p>
        </div>
      <form action="" className='form-container'>
        <div className="form-signin">
          <button type="button">
            <GoogleIcon/>
            Continue with google
          </button>
        </div>
        <Divider sx={{ borderColor: "#433D8B", fontSize: 12 }}>Or</Divider>
        <div className="input-group">
          <p>Username</p>
          <input type="text" name="usersinput" id="" />
        </div>
        <div className="input-group">
          <p>Password</p>
          <input type="password" name="usersinput" id="" />
        </div>
        <div className="option">
          New to Westream?
          <Link to='/register' className='register-link'>Create account</Link>
        </div>
        <button type="submit" className="form-submit-button">Sign in to your account</button>
      </form>
    </div>
  )
}

export default Login
