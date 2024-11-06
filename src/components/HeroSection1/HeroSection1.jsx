import React from 'react';
import './HeroSection1.css';
import { Link } from 'react-router-dom';

const HeroSection1 = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Stream Like a Pro with Westream</h1>
        <p className="hero-subtitle">Reach a wider audience, effortlessly. Start streaming today with ease and flexibility.</p>
        <div className="hero-buttons">
          <Link to="/get-started" className="hero-button primary-button">Get Started</Link>
          <Link to="/learn-more" className="hero-button secondary-button">Learn More</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Streaming setup" className='hero_image' />
      </div>
    </div>
  );
};

export default HeroSection1;
