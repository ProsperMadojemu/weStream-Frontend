import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1 className="pricing-title">Choose the Best Plan for You</h1>
      <div className="pricing-container">
        {/* Basic Plan */}
        <div className="pricing-card basic">
          <h2>Basic Plan</h2>
          <p className="price">$9.99/month</p>
          <p className="description">For individuals just starting out with streaming.</p>
          <ul className="features">
            <li>Stream in SD quality</li>
            <li>Up to 3 concurrent viewers</li>
            <li>Access to limited templates</li>
            <li>Standard support</li>
          </ul>
          <button className="cta-button">Choose Basic</button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card pro">
          <h2>Pro Plan</h2>
          <p className="price">$29.99/month</p>
          <p className="description">Perfect for growing streamers and small teams.</p>
          <ul className="features">
            <li>Stream in HD quality</li>
            <li>Up to 50 concurrent viewers</li>
            <li>Access to all templates</li>
            <li>Priority support</li>
          </ul>
          <button className="cta-button">Choose Pro</button>
        </div>

        {/* Enterp Plan */}
        <div className="pricing-card enterprise">
          <h2>Enterprise Plan</h2>
          <p className="price">$99.99/month</p>
          <p className="description">Ideal for businesses with a large streaming audience.</p>
          <ul className="features">
            <li>Stream in 4K Ultra HD</li>
            <li>Unlimited viewers</li>
            <li>Custom templates & branding</li>
            <li>24/7 dedicated support</li>
          </ul>
          <button className="cta-button">Choose Enterprise</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
