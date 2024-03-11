import React from "react";

const ContactSection = ({ formData }) => {
  console.log(formData);

  return (
    <div>
      <h2>CONTACT</h2>
      <div id="contactContainer">
        {/* Render full name from formData */}
        {formData.fullName && (
          <div className="contact-item">
            <img src="..styles/assets/user.png" alt="Full Name" />
            <p>Full Name: {formData.fullName}</p>
          </div>
        )}

        {/* Render email from formData */}
        {formData.email && (
          <div className="contact-item">
            <img src="..styles/assets/email.png" alt="Email" />
            <p>Email: {formData.email}</p>
          </div>
        )}

        {/* Render phone from formData */}
        {formData.phone && (
          <div className="contact-item">
            <img src="..styles/assets/phone.png" alt="Phone" />
            <p>Phone: {formData.phone}</p>
          </div>
        )}

        {/* Render LinkedIn from formData */}
        {formData.linkedinURL && (
          <div className="contact-item">
            <img src="..styles/assets/linkedin.png" alt="LinkedIn" />
            <p>
              LinkedIn:
              <a href={formData.linkedinURL} target="_blank" rel="noopener noreferrer">
                @{/* Extract username from the URL */}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;