import React from 'react';

const MinNavbar = () => {
  return (
    <div className="header-top-section-3">
      <div className="container">
        <div className="header-top-wrapper-2 style-3">
          <ul className="contact-list">
            <li>
              <i className="fal fa-map-marker-alt"></i>
                 #7-20, Sri Nagar Colony, Vaikuntapuram Arch, M.R.Pally, Tirupathi, 517502
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <a href="mailto:adityasripackersandmovers@gmail.com" className="link">adityasripackersandmovers@gmail.com</a>
            </li>
          </ul>
          <div className="social-icon d-flex align-items-center">
            <span>Follow Us On:</span>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinNavbar;
