import React from 'react';
import './Services.css';

const PackingServices = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <h1 className="mt-char-animation">Packing Services</h1>
          <p className="sub-title color-2">Expert Packing Solutions for a Hassle-Free Move</p>
        </div>
        <div className="content-wrapper">
          <div className="contentser">
            <h2>Welcome to Aditya Sri Packers and Movers</h2>
            <p>
              Our professional packing services ensure that your belongings are safely and securely packed for the move. We use high-quality packing materials and techniques to protect your items from damage.
            </p>
            <h3>Why Choose Our Packing Services?</h3>
            <ul>
              <li>Experienced and trained packing professionals</li>
              <li>Use of high-quality packing materials</li>
              <li>Efficient and careful packing processes</li>
              <li>Custom packing solutions for fragile and valuable items</li>
              <li>Labeling and inventory management for easy unpacking</li>
              <li>Competitive pricing with no hidden charges</li>
            </ul>
            <h3>Get a Free Quote Today!</h3>
            <p>
              Contact Aditya Sri Packers and Movers today for a free, no-obligation quote on our packing services. Our team is here to assist you with all your packing needs.
            </p>
            <a href="contact.html" className="theme-btn">Get a Free Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackingServices;
