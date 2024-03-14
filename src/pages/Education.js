import React from 'react'
import { Navbar } from '../components/page-components/navbar'
import { useSelector } from 'react-redux';
import LeftPanel from '../components/page-components/left-panel'
import EducationItem from '../components/page-components/education-item';


export default function Education() {
  const educationData = useSelector((state) => state.educations);

  return (
    <div>
      <Navbar />
      <LeftPanel />
      <h1>Education</h1>
      <div id="education">
        {educationData.length > 0 ? (
          educationData.map((education, index) => (
            <EducationItem key={index} education={education} />
          ))
        ) : (
          <p>No education information available.</p>
        )}
      </div>
      
    </div>
  );
}
