import React, { useContext, useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedinURL: '',
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit('contact', [contactData]); // Pass the contact data to the parent
    console.log(contactData); // You can now access the contact data from the context
  };
  return (
    <section>
        <div className='information'>
        <div className='col-1'>
            <h2>Contact Information</h2>
            <form id='form' className='form-class' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Full name'
              name='fullName'
              value={contactData.fullName}
              onChange={handleChange}/>
                <input 
                type='text'
                placeholder='Email address'
                name='email'
                value={contactData.email}
                onChange={handleChange} />    
                <input 
                type='text'
                placeholder='Cell phone number'
                name='phone' 
                value={contactData.phone}
                onChange={handleChange}/>
                <input 
                type='url' 
                placeholder='Linkedin URL'
                name='linkedinURL'
                value={contactData.linkedinURL}
                onChange={handleChange} />
                <button className='submitBtn' type='submit'>Submit Info</button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default ContactForm;