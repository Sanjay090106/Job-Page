import React from 'react';
import HeaderSection from './HeaderSection';
import Featuredjobsection from './Featuredjobsection';
import Explore from './Explore';
import FeaturedCompanies from './FeaturedCompanies';
import StepsSection from './StepsSection';
import SignUpBox from './SignUpBox';
import FAQSection from './FAQSection';
import './App.css';

const App = () => {
  return (
    <div>
      <HeaderSection/>
      <Featuredjobsection/>
      <Explore/>
      <FeaturedCompanies />
      <StepsSection />
      <SignUpBox />
      <FAQSection />
    </div>
  );
};

export default App;