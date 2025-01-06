import React from 'react';
import "./App.css";


const HeaderSection = () => {
  return (
    <div className="first">
      <h2>One Step Closer to</h2>
      <h2>Get Your Dream Job</h2>
      <h6>
        Find Your New Job Today! New Job Posting Every Day Just for You. Browse
        the Jobs You Want and Apply Wherever You Want
      </h6>
      <div className="search-bar">
        <input type="text" placeholder="Job title or keyword | Location" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default HeaderSection;
