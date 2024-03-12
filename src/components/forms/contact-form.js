import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedinURL: '',
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact); 
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
              value={contact.fullName}
              onChange={handleChange}/>
                <input 
                type='text'
                placeholder='Email address'
                name='email'
                value={contact.email}
                onChange={handleChange} />    
                <input 
                type='text'
                placeholder='Cell phone number'
                name='phone' 
                value={contact.phone}
                onChange={handleChange}/>
                <input 
                type='url' 
                placeholder='Linkedin URL'
                name='linkedinURL'
                value={contact.linkedinURL}
                onChange={handleChange} />
                <button className='submitBtn' type='submit'>Submit Info</button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default ContactForm;