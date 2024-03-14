import React from 'react'
import { Navbar } from '../components/page-components/navbar'
import { useSelector } from 'react-redux';
import LeftPanel from '../components/page-components/left-panel'
import ExperienceItem from '../components/page-components/experience-item';

export default function Experience() {
  const experienceData = useSelector((state) => state.experience);
  return (
    <div>
    <Navbar />
    <LeftPanel />
    <h1>Experience</h1>
    <div id="experience">
        {experienceData.length > 0 ? (
          experienceData.map((expereince, index) => (
            <ExperienceItem key={index} experience={expereince} />
          ))
        ) : (
          <p>No expereince information available.</p>
        )}
      </div>
      </div>
    
  )
}
