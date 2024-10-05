import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Track screen size to detect small screens
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize(); // Check screen size on mount
    window.addEventListener('resize', handleResize); // Add resize event listener
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Study Abroad</div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
        <li className="nav-item">
          <a href="#home" className="nav-link" onClick={handleLinkClick}>Home</a>
        </li>
        <li className="nav-item dropdown" onClick={toggleDropdown}>
          <a href="#overseas-study" className="nav-link">
            Overseas Study {dropdownOpen ? <FiChevronUp className='drop-1' /> : <FiChevronDown className='drop-1' />}
          </a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#country1" onClick={handleLinkClick}>Country 1</a></li>
              <li><a href="#country2" onClick={handleLinkClick}>Country 2</a></li>
              <li><a href="#country3" onClick={handleLinkClick}>Country 3</a></li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="#photography" className="nav-link" onClick={handleLinkClick}>Photography & Video Editing</a>
        </li>
        <li className="nav-item">
          <a href="#security" className="nav-link" onClick={handleLinkClick}>Security Guards</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact Us</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link" onClick={handleLinkClick}>About Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
