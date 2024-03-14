import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar=()=> {
  return (
    <nav>
        <ul>
            <li>
                <Link to ="/education">EDUCATION</Link>
            </li>
            <li>
                <Link to ="/achievements">ACHIEVEMENTS</Link>
            </li>
            <li>
                <Link to ="/experience">EXPERIENCE AND PROJECTS</Link>
            </li>
            <li>
                <Link to ="/skills">SKILLS</Link>
            </li>
        </ul>
    </nav>
  )
}
