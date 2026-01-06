
import React, { useState, useEffect } from 'react';
import './App.css';
import MainScreen from './Folders/MainScreen';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = saved || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio_theme', next);
  };

  return (
    <div id="appRoot" className="min-h-screen transition-colors duration-500">
      <MainScreen theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
