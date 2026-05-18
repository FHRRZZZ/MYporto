import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage = ({ darkMode }) => {
  return (
    <div className="pt-20">
      <Projects darkMode={darkMode} />
    </div>
  );
};

export default ProjectsPage;
