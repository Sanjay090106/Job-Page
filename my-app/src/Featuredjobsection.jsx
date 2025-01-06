import React from 'react';
import "./App.css";


const Featuredjobsection = () => {
  return (
    <div>
      {/* Latest Featured Jobs Header */}
      <div className="latest">
        <h1>Latest Featured Jobs</h1>
        <h4>
          Find the Jobs/Internships That Fit Your Career Aspirations
        </h4>
      </div>

      {/* Featured Job Listings */}
      <div className="latest-feat">
        {[1, 2, 3, 4].map((item, index) => (
          <div className="list" key={index}>
            <div className="im">
              <h3>50 20</h3>
            </div>
            <div className="cont">
              <h3>TechSolutions</h3>
              <h4>Full-time worker</h4>
            </div>
            <div className="descr">
              <h3>Destinations</h3>
              <h4>Locations</h4>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia nemo culpa! Aperiam, quas dolorem.</h4>
            </div>
            <h5 className="h5c">Skill 1</h5>
            <h5 className="h5c">Skill 2</h5>
            <h5 className="h5c">Skill 3</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredjobsection;
