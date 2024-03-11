import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar=()=> {
  return (
    <nav>
        <ul>
            <li>
                <Link to ="/education">Education</Link>
            </li>
            <li>
                <Link to ="/achievements">Achievements</Link>
            </li>
            <li>
                <Link to ="/experience">Experience and Projects</Link>
            </li>
            <li>
                <Link to ="/skills">Skills</Link>
            </li>
        </ul>
    </nav>
  )
}
