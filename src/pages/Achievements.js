import React from 'react'
import { Navbar } from '../components/page-components/navbar'
import { useSelector } from 'react-redux';
import AchievementItem from '../components/page-components/achievement-item';
import LeftPanel from '../components/page-components/left-panel'


export default function Achievements() {
  const achievementData = useSelector((state) => state.achievements);
  return (
    <div>
    <Navbar />
    <LeftPanel />
    <h1>Achievements</h1>
    <div id="achievement-section">
        {achievementData.length > 0 ? (
          achievementData.map((achievement, index) => (
            <AchievementItem key={index} achievement={achievement} />
          ))
        ) : (
          <p>No achievement information available.</p>
        )}
      </div>
    </div>
  )
}
