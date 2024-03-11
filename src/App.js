
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FormContainer from './pages/Form'; 
import Education from './pages/Education';
import Achievements from './pages/Achievements';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import './styles/App.scss';



function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/forms" />}
        />
        <Route
          path="/forms"
          element={<FormContainer />}
        />
        <Route
          path="/education"
          element={<Education />}
        />
        <Route 
        path='/experience'
        element={<Experience />}
        />
        <Route
        path='/achievements'
        element={<Achievements />}
        />
        <Route
        path='/skills'
        element={<Skills />}
        />
      </Routes>
    </Router>
  );
}

export default App;

