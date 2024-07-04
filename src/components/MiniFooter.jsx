import React from 'react';

const MiniFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-wrapper">
          <p className="wow fadeInUp text-center" data-wow-delay=".3s">
          © <a href="">Aditya Sri</a> Cargo Packers and Movers - {currentYear}. & Created by <a href="https://anuhyadigital.com/" target="_blank" rel="noopener noreferrer">Anuhya Digital</a> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniFooter;
