import React, { useState } from 'react';
import { LeftPanelProvider } from '../../contexts/Left-panel-context';
import ContactSection from './contact-section';
import AboutSection from './about-section';


const LeftPanel = () => {
  return (
    <LeftPanelProvider>
      {/* Other left-panel components */}
      <AboutSection />
    </LeftPanelProvider>
  );
};

export default LeftPanel;