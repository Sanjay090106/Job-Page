// FeaturedCompanies.js
import React from 'react';
import './App.css';

const FeaturedCompanies = () => {
  return (
    <section className="featured-companies">
      <h2>Featured Companies Hiring Now</h2>
      <div className="company-logos">
        <div className="company-logo">
          <img src="amazon.png" alt="Amazon" />
          <span>Amazon</span>
        </div>
        <div className="company-logo">
          <img src="tcs.png" alt="TCS" />
          <span>TCS</span>
        </div>
        <div className="company-logo">
          <img src="wipro.png" alt="Wipro" />
          <span>Wipro</span>
        </div>
        <div className="company-logo">
          <img src="micro.png" alt="Microsoft" />
          <span>Microsoft</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
