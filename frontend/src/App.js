import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './Folders/MainScreen';
import About from './Folders/About';
import Skills from './Folders/Skills';
import Projects from './Folders/Projects';
import Experience from './Folders/Experience';
import Contact from './Folders/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
