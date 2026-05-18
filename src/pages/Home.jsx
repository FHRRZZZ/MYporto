import React from 'react';
import Hero from '../components/Hero';
import GithubStats from '../components/GithubStats';
import Testimonials from '../components/Testimonials';

const Home = ({ darkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} />
      <GithubStats darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
    </>
  );
};

export default Home;
