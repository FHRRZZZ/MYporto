import React from 'react';
import Playground from '../components/Playground';

const PlaygroundPage = ({ darkMode }) => {
  return (
    <div className="pt-20">
      <Playground darkMode={darkMode} />
    </div>
  );
};

export default PlaygroundPage;
