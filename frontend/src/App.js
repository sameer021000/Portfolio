// Portfolio/frontend/src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import MainScreen from './Folders/MainScreen';


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio_theme', next);
  }

  return (
    <div id="appRoot">
      <button id="themeToggleButton" onClick={toggleTheme}>
        <span id="themeToggleIcon">{theme === 'light' ? '🌙' : '☀️'}</span>
        <span id="themeToggleText">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </span>
      </button>
      <MainScreen />
    </div>
  );
}

export default App;
