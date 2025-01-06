// StepsSection.js
import React from 'react';
import './App.css';

const StepsSection = () => {
  return (
    <section className="steps-section">
      <h2>Get Hired in 4 Quick Easy Steps</h2>
      <div className="steps-container">
        <div className="step">
          <div className="emoji">👤</div>
          <h3>Create an Account</h3>
          <p>Automate tracking invoices and save time by using our built-in templates. Get paid on time.</p>
        </div>
        <div className="step">
          <div className="emoji">🔍</div>
          <h3>Search Job</h3>
          <p>Search and categorize receipts in seconds and link to your bank account.</p>
        </div>
        <div className="step">
          <div className="emoji">📄</div>
          <h3>Upload CV/Resume</h3>
          <p>Set up a payroll and bonuses for all your employees, and never be late again.</p>
        </div>
        <div className="step">
          <div className="emoji">🎉</div>
          <h3>Get Job</h3>
          <p>Get real-time visibility into every expense and payment, with a clear dashboard.</p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
