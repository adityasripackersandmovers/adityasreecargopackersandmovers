import React from 'react';
import logo from '../assets/img/logo/logo1.png';
import home1 from '../assets/img/header/home-1.jpg';
import home2 from '../assets/img/header/home-2.jpg';
import home3 from '../assets/img/header/home-3.jpg';
import home4 from '../assets/img/header/home-4.jpg';

const Header = () => {
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
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      {/* 
                      <li className="has-dropdown active menu-thumb">
                        <a href="index.html">
                          Home
                          <i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="submenu has-homemenu">
                          <li>
                            <div className="homemenu-items">
                              <div className="homemenu">
                                <div className="homemenu-thumb">
                                  <img src={home1} alt="img" />
                                  <div className="demo-button">
                                    <a href="index.html" className="theme-btn">
                                      <span>View Demo</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    Home 01
                                  </h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img src={home2} alt="img" />
                                  <div className="demo-button">
                                    <a href="index-2.html" className="theme-btn">
                                      <span>View Demo</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    Home 02
                                  </h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img src={home3} alt="img" />
                                  <div className="demo-button">
                                    <a href="index-3.html" className="theme-btn">
                                      <span>View Demo</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    Home 03
                                  </h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img src={home4} alt="img" />
                                  <div className="demo-button">
                                    <a href="index-4.html" className="theme-btn">
                                      <span>View Demo</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">
                                    Home 04
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown active d-xl-none">
                        <a href="team.html" className="border-none">
                          Home
                          <i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="index.html">Home 01</a></li>
                          <li><a href="index-2.html">Home 02</a></li>
                          <li><a href="index-3.html">Home 03</a></li>
                          <li><a href="index-4.html">Home 04</a></li>
                        </ul>
                      </li>
                      */}
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="about.html">Services</a>
                      </li>
                      <li>
                        <a href="about.html">Why Us</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
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
                <div className="sidebar__toggle">
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
