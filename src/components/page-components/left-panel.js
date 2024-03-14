import React from 'react';
import { useSelector } from 'react-redux';
import emailImg from '../../styles/assets/email.png';
import phoneImg from '../../styles/assets/phone.png';
import linkedinImg from '../../styles/assets/linkedin.png';

const LeftPanel = () => {
  const contactData = useSelector((state) => state.contact);
  const abouttData = useSelector((state) => state.about);
  const languageData = useSelector((state) => state.languages);
  



  return (
    <div class="left-panel">
      <h2>Contact</h2>
      {Object.keys(contactData).length > 0 ? (
        <div>
          <p>Full Name: {contactData.fullName}</p>
          <img src={emailImg} alt='email-icon' />
          <p>Email: {contactData.email}</p>
          <img src={phoneImg} alt='phone-icon' />
          <p>Phone: {contactData.phone}</p>
          <img src= {linkedinImg} alt='linkedin-icon' />
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