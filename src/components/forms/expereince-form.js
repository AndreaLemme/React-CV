import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateExperience } from '../../redux';

export default function ExperienceForm( {onSubmit} ) {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [experiences, setExperience] = useState([]);
  const [formData,setFormData] = useState({
    year: '',
    company: '',
    job: '',
    details: []
  });

  const [newDetails,setNewDetails]=useState('');

  const handleDetailsChange=(e)=>{
    setNewDetails(e.target.value);
  }
  const addDetails=()=> {
    if (newDetails.trim() !== '') {
      setFormData({ ...formData, details: [...formData.details, newDetails] });
      setNewDetails('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSubmit(experiences);
    dispatch(updateExperience(experiences))
    setExperience([]);
  };
  const addExperience = () => {
    if (formData.year || formData.company || formData.job) {
      const newExperience = { ...formData, id: experiences.length + 1 };
      setExperience([...experiences, newExperience]);
      setFormData({ year: '', company: '', job: '', details: [] });
      setIsAdding(false);
      setNewDetails('');
    } else {
      alert('Please enter at least one of the required fields: year, company, or job.');
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const years = [];
  for (let i = 2024; i >= 1940; i--) {
    years.push(i);
  }
  

  return (
    <section>
      <div className='information'>
        <div className='col-1'>
          <h2>Input your various Experiences</h2>
          <form id='form' className='form-class' onSubmit={handleSubmit}>
            {experiences.map((expereince) => (
              <div key={expereince.id} className="experience-entry">
                <select
                  name="year"
                  value={expereince.year}
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
                  placeholder='Job'
                  name="job"
                  value={expereince.job}
                  readOnly
                />
                <input
                  type='text'
                  placeholder='Company'
                  name='company'
                  value={expereince.company}
                  readOnly
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {expereince.details.map((desc, index) => (
                    <div key={index}>{desc}</div>
                  ))}
                </div>
              </div>
            ))}
            {isAdding && (
              <div className="new-experience-input">
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
                  placeholder='Job'
                  name='job'
                  value={formData.job}
                  onChange={handleChange}
                />
                <input
                  type='text'
                  placeholder='Comapany'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                />
                <div>
                  <input
                    type='text'
                    placeholder='Add details'
                    value={newDetails}
                    onChange={handleDetailsChange}
                  />
                  <button type='button' onClick={addDetails}>Add</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {formData.details.map((desc, index) => (
                    <div key={index}>{desc}</div>
                  ))}
                </div>
                <button className="addBtn" onClick={addExperience}>
                  Add Experience
                </button>
              </div>
            )}
            {!isAdding && (
              <button className="addBtn" onClick={() => setIsAdding(true)}>
                Add Experience
              </button>
            )}
            <button className='submitBtn' type='submit'>Submit Info</button>
          </form>
        </div>
      </div>
    </section>
  )
}
