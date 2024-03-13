import React from 'react';
import { useSelector } from 'react-redux';

const LeftPanel = () => {
  const contactData = useSelector((state) => state.contact);
  const abouttData = useSelector((state) => state.about);
  const languageData = useSelector((state) => state.languages);
  console.log('Contact data from Redux store:', languageData); // Add this line



  return (
    <div>
      <h2>Contact</h2>
      {Object.keys(contactData).length > 0 ? (
        <div>
          <p>Full Name: {contactData.fullName}</p>
          <p>Email: {contactData.email}</p>
          <p>Phone: {contactData.phone}</p>
          <p>LinkedIn URL: {contactData.linkedinURL}</p>
        </div>
      ) : (
        <p>No contact information available.</p>
      )}
      <h2>About Me</h2>
      <p>{abouttData}</p>
      <h2>Languages</h2>
      {languageData.length > 0 ? (
        languageData.map((language, index) => (
          <div key={index}>
            <p>
              Language: {language.language} - Proficiency: {language.proficiency}
            </p>
          </div>
        ))
      ) : (
        <p>No language information available.</p>
      )}
    </div>
  );
};

export default LeftPanel;