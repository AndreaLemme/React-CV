// FormContainer.js
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; 
import AboutForm from '../components/forms/about-form';
import ContactForm from '../components/forms/contact-form';
import EducationForm from '../components/forms/education-form';
import LanguagesForm from '../components/forms/languages-form';
import SkillsForm from '../components/forms/skill-forms';
import AchievementsForm from '../components/forms/achievement-form';
import ExperienceForm from '../components/forms/expereince-form';

const formPages = [
  'contact',
  'about',
  'languages',
  'education',
  'experience',
  'skills',
  'achievements',
];

const FormContainer = () => {
  const [formData, setFormData] = useState({
    contact: [],
    about: [],
    languages: [],
    education: [],
    experience: [],
    skills: [],
    achievements: [],
  });
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (page, data) => {
    setFormData((prevData) => ({ ...prevData, [page]: data }));
    if (currentPage < formPages.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      navigate('/Education');
    }
  };
  
  const renderForm = () => {
    const currentPageName = formPages[currentPage];
    switch (currentPageName) {
      case 'contact':
        return <ContactForm onSubmit={(data) => handleSubmit('contact', data)} />;
      case 'about':
        return <AboutForm onSubmit={(data) => handleSubmit('about', data)} />;
      case 'languages':
        return <LanguagesForm onSubmit={(data) => handleSubmit('languages', data)} />;
      case 'education':
        return <EducationForm onSubmit={(data) => handleSubmit('education', data)} />;
      case 'experience':
        return <ExperienceForm onSubmit={(data) => handleSubmit('experience', data)} />;
      case 'skills':
        return <SkillsForm onSubmit={(data) => handleSubmit('skills', data)} />;
      case 'achievements':
        return <AchievementsForm onSubmit={(data) => handleSubmit('achievements', data)} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <Outlet />
      {renderForm()}
    </div>
  );
};

export default FormContainer;