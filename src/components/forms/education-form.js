import React, { useState } from 'react';

export default function EducationForm({ onSubmit }) {
  const [isAdding, setIsAdding] = useState(false);
  const [educations, setEducations] = useState([]);
  const [formData, setFormData] = useState({
    year: '',
    name: '',
    place: '',
    description: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };


  const [newDescription, setNewDescription] = useState('');

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const addDescription = () => {
    if (newDescription.trim() !== '') {
      setFormData({ ...formData, description: [...formData.description, newDescription] });
      setNewDescription('');
    }
  };
  const addEducation = () => {
    if (formData.year || formData.name || formData.place) {
      const newEducation = { ...formData, id: educations.length + 1 };
      setEducations([...educations, newEducation]);
      setFormData({ year: '', name: '', place: '', description: [] });
      setIsAdding(false);
      setNewDescription('');
    } else {
      alert('Please enter at least one of the required fields: year, name, or place.');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSubmit(educations); 
    setEducations([]); 
  };

  const years = [];
  for (let i = 2024; i >= 1940; i--) {
    years.push(i);
  }


  return (
    <section>
      <div className='information'>
        <div className='col-1'>
          <h2>Input your various Educations</h2>
          <form id='form' className='form-class' onSubmit={handleSubmit}>
            {educations.map((education) => (
              <div key={education.id} className="education-entry">
                <select
                  name="year"
                  value={education.year}
                  onChange={handleChange}
                  disabled
                >
                  <option value="">Select Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <input
                  type='text'
                  placeholder='Education'
                  name='name'
                  value={education.name}
                  readOnly
                />
                <input
                  type='text'
                  placeholder='Place'
                  name='place'
                  value={education.place}
                  readOnly
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {education.description.map((desc, index) => (
                    <div key={index}>{desc}</div>
                  ))}
                </div>
              </div>
            ))}
            {isAdding && (
              <div className="new-education-input">
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option value="">Select Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <input
                  type='text'
                  placeholder='Education'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type='text'
                  placeholder='Place'
                  name='place'
                  value={formData.place}
                  onChange={handleChange}
                />
                <div>
                  <input
                    type='text'
                    placeholder='Add description'
                    value={newDescription}
                    onChange={handleDescriptionChange}
                  />
                  <button type='button' onClick={addDescription}>Add</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {formData.description.map((desc, index) => (
                    <div key={index}>{desc}</div>
                  ))}
                </div>
                <button className="addBtn" onClick={addEducation}>
                  Add Education
                </button>
              </div>
            )}
            {!isAdding && (
              <button className="addBtn" onClick={() => setIsAdding(true)}>
                Add Education
              </button>
            )}
            <button className='submitBtn' type='submit'>Submit Info</button>
          </form>
        </div>
      </div>
    </section>
  )
}
