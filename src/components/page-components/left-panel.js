import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const LeftPanel = () => {
  const aboutData = useSelector((state) => state.form.about);
  return (
    <div>
       <h2>Contact</h2>
      <h2>About Me</h2>
      <p>{aboutData}</p>
    </div>
    
  );
};

export default LeftPanel;