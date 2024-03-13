import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLanguages } from '../../redux';


export default function LanguagesForm( {onSubmit} ) {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [formData, setFormData] = useState({ 
    language: '', 
    proficiency: '' });

  const handleChange=(e)=> {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const addLanguage = () => {
    if (formData.language.trim() !== '' && formData.proficiency.trim() !== '') {
      const newLanguage = { ...formData, id: languages.length + 1 };
      setLanguages([...languages, newLanguage]);
      setFormData({ language: '', proficiency: '' });
      setIsAdding(false);
    } else {
      alert('Please enter both language and proficiency.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(languages);
    dispatch(updateLanguages(languages)); 
    setLanguages([]);
  };
  return (
    <section>
      <div className='information'>
        <div className='col-1'>
          <h2>Input the languages you know and the level of competency in them</h2>
          <form id='form' className='form-class' onSubmit={handleSubmit}>
            {languages.map((language) => (
              <div key={language.id} className="language-entry">
                <input
                  type="text"
                  placeholder="Language spoken"
                  name="language"
                  value={language.language}
                  readOnly
                />
                <select
                  name="proficiency"
                  value={language.proficiency}
                  onChange={handleChange}
                  disabled
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="fluent">Fluent</option>
                </select>
              </div>
            ))}
            {isAdding && (
              <div className="new-language-input">
                <input
                  type="text"
                  placeholder="Language spoken"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                />
                <select
                  name="proficiency"
                  value={formData.proficiency}
                  onChange={handleChange}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="fluent">Fluent</option>
                </select>
                <button
                  className="addBtn"
                  onClick={() => {
                    addLanguage();
                    setIsAdding(false);
                  }}
                >
                  Add Language
                </button>
              </div>
            )}
            {!isAdding && (
              <button className="addBtn" onClick={() => setIsAdding(true)}>
                Add Language
              </button>
            )}
            <button className='submitBtn' type='submit'>Submit Info</button>
          </form>
        </div>
      </div>
    </section>
  );
}
