import React, { useState } from 'react';
import AboutForm from '../forms/about-form';


const AboutSection = ({ about }) => {
  return (
    <div>
      <div id="aboutMe">
        <h2>ABOUT ME</h2>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default AboutSection;