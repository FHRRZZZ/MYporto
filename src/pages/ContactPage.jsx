import React from 'react';
import Contact from '../components/Contact';

const ContactPage = ({ darkMode }) => {
  return (
    <div className="pt-20">
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default ContactPage;
