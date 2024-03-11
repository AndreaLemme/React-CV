import React, { useState } from 'react'

export default function AchievementsForm( {onSubmit} ) {
  const [isAdding, setIsAdding] = useState(false);
  const [achievements,setAchievements]=useState([]);
  const [formData, setFormData]=useState({
    year:'',
    award: '',
    info: []
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const [newInfo, setNewInfo]=useState('');

  const handleInfoChange=(e)=>{
    setNewInfo(e.target.value);
  };

  const addInfo = () => {
    if (newInfo.trim() !== '') {
      setFormData({ ...formData, info: [...formData.info, newInfo] });
      setNewInfo('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(achievements);
    console.log(achievements); 
  };

  const addAchievement = () => {
    setAchievements([...achievements,{...formData, id: achievements.length +1}]);
    setFormData({year:'', award: '', info: []});
    setIsAdding(false);
    setNewInfo('');

  }

  const years = [];
  for (let i = 2024; i >= 1940; i--) {
    years.push(i);
  }


  return (
    <section>
      <div className='information'>
        <div className='col-1'>
          <h2>Input your various Achievements</h2>
          <form id='form' className='form-class' onSubmit={handleSubmit}>
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-entry">
                <select
                  name="year"
                  value={achievement.year}
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
                  placeholder='Award'
                  name="award"
                  value={achievement.award}
                  readOnly
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {achievement.info.map((desc, index) => (
                    <div key={index}>{desc}</div>
                  ))}
                </div>
              </div>
            ))}
            {isAdding && (
              <div className="new-achievement-input">
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
                  placeholder='Award'
                  name='award'
                  value={formData.award}
                  onChange={handleChange}
                />
                <div>
                  <input
                    type='text'
                    placeholder='Add information of Award'
                    value={newInfo}
                    onChange={handleInfoChange}
                  />
                  <button type='button' onClick={addInfo}>Add</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {formData.info.map((desc, index) => (
                    <div key={index}>{desc}</div>
                  ))}
                </div>
                <button className="addBtn" onClick={addAchievement}>
                  Add Achievements
                </button>
              </div>
            )}
            {!isAdding && (
              <button className="addBtn" onClick={() => setIsAdding(true)}>
                Add Achievement
              </button>
            )}
            <button className='submitBtn' type='submit'>Submit Info</button>
          </form>
        </div>
      </div>
    </section>
  )
}
