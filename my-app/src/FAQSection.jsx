// FAQSection.js
import React from 'react';
import './App.css';

const FAQSection = () => {
  return (
    <section className="faq-section">
      <h3>Frequently Asked Questions</h3>
      <div className="faq">
        <details className="faq-item">
          <summary>
            <span>What is UX design?</span>
            <span className="arrow">▼</span>
          </summary>
          <p>UX design stands for User Experience design. It involves enhancing user satisfaction by improving usability, accessibility, and interaction with a product or service.</p>
        </details>
        <details className="faq-item">
          <summary>
            <span>What are the key principles of UX design?</span>
            <span className="arrow">▼</span>
          </summary>
          <p>The key principles include user-centric design, simplicity, consistency, accessibility, and feedback. These principles ensure a seamless and engaging user experience.</p>
        </details>
        <details className="faq-item">
          <summary>
            <span>What is the difference between UX and UI design?</span>
            <span className="arrow">▼</span>
          </summary>
          <p>UX focuses on the overall experience a user has with a product, while UI (User Interface) design focuses on the visual and interactive elements of the product.</p>
        </details>
        <details className="faq-item">
          <summary>
            <span>What is a wireframe?</span>
            <span className="arrow">▼</span>
          </summary>
          <p>A wireframe is a visual guide that represents the skeletal framework of a website or application. It helps in structuring content and functionality.</p>
        </details>
        <details className="faq-item">
          <summary>
            <span>What is user testing?</span>
            <span className="arrow">▼</span>
          </summary>
          <p>User testing involves evaluating a product by testing it with real users to identify usability issues and gather feedback for improvements.</p>
        </details>
      </div>
    </section>
  );
};

export default FAQSection;
