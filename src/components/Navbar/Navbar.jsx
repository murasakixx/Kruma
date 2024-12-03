import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has dark mode preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return (
    <nav className="p-4 shadow-md select-none bg-orange-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-orange-500 dark:text-orange-400">Kruma</Link>
        
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-orange-200 dark:bg-gray-700 mr-4"
        >
          {darkMode ? '🔅' : '🌙'}
        </button>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            <li><Link to="/" className="navbar-menu">Home</Link></li>
            <li><Link to="/about" className="navbar-menu">About</Link></li>
            <li><Link to="/Skills" className="navbar-menu">Skills</Link></li>
            <li><Link to="/contact" className="navbar-menu">Contact</Link></li>

          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-4 pt-4">
            <li><Link to="/" className="navbar-menu">Home</Link></li>
            <li><Link to="/about" className="navbar-menu">About</Link></li>
            <li><Link to="/Skills" className="navbar-menu">Skills</Link></li>
            <li><Link to="/contact" className="navbar-menu">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;