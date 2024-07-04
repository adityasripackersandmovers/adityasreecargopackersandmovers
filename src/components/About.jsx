import React from 'react';
import logo from '../assets/img/about-logo.png';
import aboutImage1 from '../assets/img/about/05.jpg';
import aboutImage2 from '../assets/img/about/06.jpg';
import aboutImage3 from '../assets/img/about/07.jpg';
import { FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section-2 fix">
      <div className="container">
        <div className="org-logo-wrap text-center">
          <div className="org-logo wow fadeInUp" data-wow-delay=".3s">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <FaHeart /> Packers and Movers
          </span>
          <h2 className="mt-char-animation">
            Our services <span className="color-2">make moving</span> <br />
            <span>easy and stress-free</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="about-image-items">
              <img src={aboutImage1} alt="Packing Services" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="about-image-items">
              <img src={aboutImage2} alt="Moving Services" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="about-image-items">
              <img src={aboutImage3} alt="Storage Services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
