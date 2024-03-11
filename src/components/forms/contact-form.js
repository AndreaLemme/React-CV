import React, { useState } from 'react';


export default function ContactForm({ onSubmit }) {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedinURL: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    console.log()
  
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
              value={formData.fullName}
              onChange={handleChange}/>
                <input 
                type='text'
                placeholder='Email address'
                name='email'
                value={formData.email}
                onChange={handleChange} />    
                <input 
                type='text'
                placeholder='Cell phone number'
                name='phone' 
                value={formData.phone}
                onChange={handleChange}/>
                <input 
                type='url' 
                placeholder='Linkedin URL'
                name='linkedinURL'
                value={formData.linkedinURL}
                onChange={handleChange} />
                <button className='submitBtn' type='submit'>Submit Info</button>
            </form>
        </div>
        </div>
    </section>
  )
}
