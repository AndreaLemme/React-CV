import React, { useContext, useState } from 'react';



const ContactSection = () => {
  

const [contact,setContactData]=useState('');
  
  // Helper function to extract the username from a LinkedIn URL
  const extractUsername = (url) => {
    const regex = /linkedin.com\/in\/([^/]+)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  return (
    <div>
      <h2>CONTACT</h2>
      <div id="contactContainer">
        {contact.length > 0 && contact[0].fullName && (
          <div className="contact-item">
            <img src="..styles/assets/user.png" alt="Full Name" />
            <p>Full Name: {contact[0].fullName}</p>
          </div>
        )}
        {/* Render email from formData */}
        {contact.length > 0 && contact[0].email && (
          <div className="contact-item">
            <img src="..styles/assets/email.png" alt="Email" />
            <p>Email: {contact[0].email}</p>
          </div>
        )}
        {/* Render phone from formData */}
        {contact.length > 0 && contact[0].phone && (
          <div className="contact-item">
            <img src="..styles/assets/phone.png" alt="Phone" />
            <p>Phone: {contact[0].phone}</p>
          </div>
        )}
        {/* Render LinkedIn from formData */}
        {contact.length > 0 && contact[0].linkedinURL && (
          <div className="contact-item">
            <img src="..styles/assets/linkedin.png" alt="LinkedIn" />
            <p>
              LinkedIn:
              <a
                href={contact[0].linkedinURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{extractUsername(contact[0].linkedinURL)}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;