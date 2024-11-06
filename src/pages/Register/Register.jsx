import React, { useState } from 'react';
import './Register.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted successfully', { email, password });
    }
  };

  return (
    <div className="Register">
      <div className="form-title">
        <h2>Westream</h2>
        <p>Create your account</p>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-signin">
          <button type="button">
            <GoogleIcon />
            Signup with Google!
          </button>
        </div>
        <Divider sx={{ borderColor: '#433D8B', fontSize: 12 }}>Or</Divider>

        <div className="input-group">
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="input-group">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="option">
          Already have an account?{' '}
          <Link to="/login" className="register-link">Login</Link>
        </div>
        <button
          type="submit"
          className="form-submit-button"
          disabled={isSubmitted || Object.keys(errors).length > 0}
        >
          Create your account
        </button>
      </form>
      <p className="agreement">
        By signing up, you agree to the Terms of Service. You also agree to receive emails from Westream.
      </p>
    </div>
  );
};

export default Register;
