
import React, { useState } from 'react';

export default function AboutForm({ onSubmit }) {
  const [about, setAbout] = useState('');

  const handleChange = (e) => {
    setAbout(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit('about',about);
    console.log('Submitted about:', about);

  }

  return (
    <section>
      <div className='information'>
        <div className='col-1'>
          <h2>About Yourself</h2>
          <form id='form' className='form-class' onSubmit={handleSubmit}>
            <textarea
              placeholder='Paragraph about yourself'
              value={about}
              onChange={handleChange}
            />
            <button className='submitBtn' type='submit'>Submit Info</button>
          </form>
        </div>
      </div>
    </section>
  )
}
