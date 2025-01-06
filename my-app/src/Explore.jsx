import React from 'react';
import "./App.css";

const Explore = () => {
  return (
    <div>
      <h1 style={{ paddingLeft: '100px' }}>
        <span>Explore jobs in </span>
        <span style={{ color: 'orange' }}>400+</span>
        <span> cities</span>
      </h1>

      <p style={{ paddingLeft: '100px' }}>
        <span style={{ color: '#cdcdcd' }}>
          Find the jobs/Internship that fits your career aspirations
        </span>
      </p>

      <div className="image-container">
        {["mumbai.png", "mumbai2.png", "mumbai3.png", "mumbai4.png", "mumbai5.png"].map((image, index) => (
          <div className="image-item-wrapper" key={index}>
            <img 
              src={`/assets/images/${image}`} 
              alt={`Mumbai ${index + 1}`} 
              className="image-item" 
            />
            <div className="image-label image-label-bold">Mumbai</div>
            <div className="image-label" style={{ color: 'green' }}>10k jobs</div>
          </div>
        ))}
      </div>

      <button className="view">View all Cities</button>
    </div>
  );
};

export default Explore;