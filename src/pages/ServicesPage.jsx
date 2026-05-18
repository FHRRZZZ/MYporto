import React from 'react';
import Services from '../components/Services';

const ServicesPage = ({ darkMode }) => {
  return (
    <div className="pt-20">
      <Services darkMode={darkMode} />
    </div>
  );
};

export default ServicesPage;
