import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./nav.css"; // import the CSS file

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the sidebar when the close button or a link is clicked
  };

  return (

    <>

<div className="top-bar">
        <div className="contact-info">
          <p><i className="phone-icon ">📞</i>+91 85558 25755</p>
          <p><i className="phone-icon">📱</i>+91 90309 22159</p>
          <p><i className="email-icon">✉️</i>info@triospaceoverseas.com</p>
        </div>
        <div className="social-icons">
          <FaFacebookF className="icon icons-1" />
          <FaInstagram className="icon icons-2" />
          <FaWhatsapp className="icon icons-3" />
        </div>
      </div>
    
    
  
    <nav className="navbar">
        
        
      <div className="navbar-logo">My Website</div>
      
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
      <div className="navbar-logo-small">
        <h1>My Website</h1>
        </div>

      <span className="close-button" onClick={closeMenu}>&times;</span>

        <ul className="main-nav-links">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a href="/study-abroad">Study Abroad</a>
              <div className="dropdown-menu">
                <a href="/study-abroad/country1">Study in USA</a>
                <a href="/study-abroad/country2">Study in UK</a>
                <a href="/study-abroad/country2">Study in Canada</a>
                <a href="/study-abroad/country2">Study in Australia</a>
                <a href="/study-abroad/country2">Study in France</a>
                <a href="/study-abroad/country2">Study in Ireland</a>
                <a href="/study-abroad/country2">More..</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="/test-prep">Media</a>
              <div className="dropdown-menu">
                <a href="/test-prep/ielts">Photography</a>
                <a href="/test-prep/gmat">Video Editing</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="/services">Services</a>
              <div className="dropdown-menu">
                <a href="/services/consulting">Consulting</a>
                <a href="/services/visa">Visa Assistance</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {!isOpen && <span className="hamburger-icon">&#9776;</span>}
      </div>
    </nav>
    </>
  );
};

export default NavbarNew;
