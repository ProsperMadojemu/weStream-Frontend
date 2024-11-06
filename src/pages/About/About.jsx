// src/pages/AboutPage/AboutPage.jsx
import React from 'react';
import './About.css';
import { assets } from '../../assets/assets';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <div className="about">
      <section className="section purpose">
        <h2>Our Purpose</h2>
        <p>
          WeStream is here to empower creators, businesses, and organizations by making 
          multi-streaming simple and accessible. Our goal is to help you reach your 
          audience across multiple platforms at once, whether you're streaming for entertainment, 
          education, or engagement.
        </p>
      </section>

      <section className="section audience">
        <h2>Who We Serve</h2>
        <p>
          We connect with live streamers, influencers, content creators, educators, and businesses 
          worldwide. Our platform is built for anyone looking to expand their reach across multiple 
          channels seamlessly and effectively.
        </p>
        <div className="audience_img">
          <img src={assets.Image3} alt="Our Audience" className="section-image" />
          <div className="images grid-col-2-span-row-1">
            {/* <img src={assets.image5} alt="Our Audience" className='section--image'/> */}
          </div>
          <img src={assets.image6} alt="Our Audience" className="section-image" />
          <img src={assets.Image1} alt="Our Audience" className="section-image" />
          <img src={assets.Image2} alt="Our Audience" className="section-image" />
        </div>
      </section>

      <section className="section reach">
        <h2>Our Reach</h2>
        <p>
          With a community of over 1 million active users and counting, WeStream is trusted globally. 
          From individual creators to large organizations, people use WeStream to deliver their 
          content to millions of viewers across various platforms.
        </p>
      </section>

      <section className="section features">
        <h2>Key Features</h2>
        <p>
          We offer high-quality streaming, easy-to-use tools, analytics, and robust support for 
          multi-streaming across popular platforms. Our innovative solutions help simplify the 
          streaming process for everyone.
        </p>
      </section>

      <section className="section testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          <div className='_container'>
            "WeStream has transformed the way we broadcast! Our reach has doubled since using it, 
            and our audience engagement has never been higher." <span className='sender'>– Streaming Pro</span>
          </div>
          <div className='_container'>
            "WeStream has transformed the way we broadcast! Our reach has doubled since using it, 
            and our audience engagement has never been higher." <span className='sender'>– Streaming Pro</span>
          </div>
          <div className='_container'>
            "WeStream has transformed the way we broadcast! Our reach has doubled since using it, 
            and our audience engagement has never been higher." <span className='sender'>– Streaming Pro</span>
          </div>
          <div className='_container'>
            "WeStream has transformed the way we broadcast! Our reach has doubled since using it, 
            and our audience engagement has never been higher." <span className='sender'>– Streaming Pro</span> 
          </div>
        </div>
      </section>

      <section className="section contact">
        <h2>Get In Touch</h2>
        <p>
          Have questions? Need assistance? Contact our support team anytime. We’re here to help 
          you make the most out of WeStream.
        </p>
      </section>
    </div>
  );
};

export default About;
