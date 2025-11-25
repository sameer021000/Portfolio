import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './Folders/MainScreen';
import CertificatesScreen from './Folders/CertificatesScreen';
import EducationScreen from './Folders/EducationScreen';
import ContactScreen from './Folders/ContactScreen';
import ExperienceScreen from './Folders/ExperienceScreen';
import ProjectsScreen from './Folders/ProjectsScreen';
import SkillsScreen from './Folders/SkillsScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/education" element={<EducationScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/experience" element={<ExperienceScreen />} />
        <Route path="/skills" element={<SkillsScreen/>}/>
        <Route path="/certificates" element={<CertificatesScreen/>}/>
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
