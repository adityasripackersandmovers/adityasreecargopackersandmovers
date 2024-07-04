import React from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import truck from '../assets/img/childboy.jpg'

const Feature = () => {
  return (
    <section className="feature-section-2 fix section-padding">
      <div className="container">
        <div className="feature-wrapper style-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="feature-image-2">
                <img src={truck} alt="Moving truck" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-content">
                <div className="section-title">
                  <span className="sub-title color-2 wow fadeInUp">
                    <FaHandsHelping size={60}/> Why Choose Us
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    We’ve Successfully Moved <span className="count">1</span><span>k</span> Families
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Your trust in our services helps us provide smooth and safe relocation experiences. We ensure that your belongings reach their destination safely.
                </p>
                <div className="feature-icon-area wow fadeInUp" data-wow-delay=".3s">
                  <div className="icon-items">
                    <div className="icon">
                      <FaHandsHelping size={60}/>
                    </div>
                    <div className="content">
                      <h3>1000+ Happy Customers</h3>
                      <p>
                        Our customers trust us with their valuable possessions. Our expert team ensures every move is handled with utmost care and precision.
                      </p>
                    </div>
                  </div>
                </div>
                <a href="services.html" className="theme-btn transparent-btn-2 wow fadeInUp" data-wow-delay=".7s">
                  See Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
