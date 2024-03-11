import React, { useState } from 'react';
import { useLeftPanel } from '../../contexts/Left-panel-context';


const AboutSection = () => {
  const { aboutText } = useLeftPanel();

  return (
    <div>
      <div id="aboutMe">
        <h2>ABOUT ME</h2>
        <p>{aboutText}</p>
      </div>
    </div>
  );
};

export default AboutSection;