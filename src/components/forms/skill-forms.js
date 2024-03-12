import React, { useState } from 'react';

export default function SkillsForm({ onSubmit }) {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    skill: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, skill: e.target.value });
  };

  const addSkill = () => {
    if (formData.skill.trim() !== '') {
      setSkills([...skills, formData.skill]);
      setFormData({ skill: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(skills); // Pass the entire skills array
    setSkills([]); 
  };

  return (
    <section>
      <div className='information'>
        <div className='col-1'>
          <h2>Input your various Skills</h2>
          <form id='form' className='form-class' onSubmit={handleSubmit}>
            {skills.map((skill, index) => (
              <div key={index} className="skill-entry">
                {skill}
              </div>
            ))}
            <div className="new-skill-input">
              <div>
                <input
                  type='text'
                  placeholder='Add Skills'
                  value={formData.skill}
                  onChange={handleChange}
                />
                <button type='button' onClick={addSkill}>
                  Add
                </button>
              </div>
            </div>
            <button className='submitBtn' type='submit'>
              Submit Info
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
