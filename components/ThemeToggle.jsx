import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Apply saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') === 'dark';
    setDark(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    document.body.classList.toggle('dark-mode', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
