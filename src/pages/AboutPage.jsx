import React from 'react';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';

const AboutPage = ({ darkMode }) => {
  return (
    <div className="pt-20">
      <About darkMode={darkMode} />
      <Timeline darkMode={darkMode} />
      <Skills darkMode={darkMode} />
    </div>
  );
};

export default AboutPage;
