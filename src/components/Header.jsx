import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/img/logo/logo1.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header id="header-sticky" className="header-3">
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main style-2">
            <div className="header-left">
              <div className="logo">
                <a href="index.html" className="header-logo">
                  <img src={logo} alt="logo-img" />
                </a>
              </div>
              <div className={`mean__menu-wrapper ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about.html">About</a>
                      </li>
                      <li>
                        <a href="/services.html">Services</a>
                      </li>
                      <li>
                        <a href="/why-us.html">Why Us</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                     {/* 
                      <li>
                      <button className="close-menu" onClick={closeMenu}>Close X</button>
                      </li>
                      */}
                    </ul>
                  </nav>
                  
                </div>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="author-icon">
                <div className="icon">
                  <i className="far fa-phone-alt"></i>
                </div>
                <div className="content">
                  <span>Call Us Now</span>
                  <h5>
                    <a href="tel:+91-7092826603">+91-7092826603</a>
                  </h5>
                </div>
              </div>
              <div className="header-button">
                <a href="tel:+91-7092826603" className="theme-btn">
                  Call for Quotation
                  <i className="ps-2 far fa-heart"></i>
                </a>
              </div>
              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle" onClick={toggleMenu}>
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
