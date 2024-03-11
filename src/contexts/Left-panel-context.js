import React, { createContext, useContext, useState } from 'react';

const LeftPanelContext = createContext();

export const LeftPanelProvider = ({ children }) => {
  const [aboutText, setAboutText] = useState('');

  const handleFormSubmit = (about) => {
    setAboutText(about);
  };

  return (
    <LeftPanelContext.Provider value={{ aboutText, handleFormSubmit }}>
      {children}
    </LeftPanelContext.Provider>
  );
};

export const useLeftPanel = () => {
  return useContext(LeftPanelContext);
};