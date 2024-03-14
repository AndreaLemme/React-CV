import React from 'react'
import { Navbar } from '../components/page-components/navbar'
import { useSelector } from 'react-redux';
import LeftPanel from '../components/page-components/left-panel'
import SkillsItem from '../components/page-components/skills-item';

export default function Skills() {
  const skillData = useSelector((state) => state.skills)
  return (
    <div>
    <Navbar />
    <LeftPanel />
    <h1>Skills</h1>
    <div id="skills-section">
        {skillData.length > 0 ? (
          <ul>
            {skillData.map((skills, index) => (
              <SkillsItem key={index} skills={skills} />
            ))}
          </ul>
        ) : (
          <p>No skill information available.</p>
        )}
      </div>
    </div>
  )
}
