import React from 'react';
import logo from '../assets/img/logo/logo1.png';

const Footer = () => {
  return (
    <footer className="footer-section footer-bg-color section-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div className="col-md-6 col-xl-4 col-12 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <img src={logo} alt="logo-img" />
                  <h4 className="text-white">Get In Touch</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact-items">
                      <div className="icon">
                        <i className="fal fa-phone"></i>
                      </div>
                      <div className="content">
                        <h6>
                          <a href="tel:+91-7092826603">+91-7092826603</a>
                          <a href="tel:+91-7092826603">+91-7092826603</a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-2">
                        <i className="fal fa-envelope"></i>
                      </div>
                      <div className="content">
                        <h6>
                          <a href="mailto:adityasripackersandmovers@gmail.com" className="link">adityasripackersandmovers@gmail.com</a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-3">
                        <i className="fal fa-map-marker-alt"></i>
                      </div>
                      <div className="content">
                        <h6>
                         #7-20, Sri Nagar Colony,  <br />
                         inside Vaikuntapuram Arch, <br />
                         M.R.Pally <br />
                         Tirupathi, 517502
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 offset-xl-1 col-12 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>About Us</h4>
                </div>
                <div className="special-menu">
                  <ul>
                    <li><a href="about.html">about</a></li>
                    <li><a href="faq.html">faq</a></li>
                    {/* 
                    <li><a href="events.html">events</a></li>
                    <li><a href="event-details.html">event details</a></li>
                    */}
                    <li><a href="team.html">Team</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
                <div className="special-menu">
                  <ul>
                    <li><a href="residential-moving.html">Residential Moving</a></li>
                    <li><a href="commercial-moving.html">Commercial Moving</a></li>
                    <li><a href="/transport-services.html">Transport Services</a></li>
                    <li><a href="contact.html">Get A Quote</a></li>
                    <li><a href="terms.html">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 col-12 wow fadeInUp" data-wow-delay=".7s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Popular Services</h4>
                </div>
                <ul className="list-area">
                  <li><a href="/packing-services.html">Packing Services</a></li>
                  <li><a href="/unpacking-services.html">Unpacking Services</a></li>
                  <li><a href="/loading-services.html">Loading Services</a></li>
                  <li><a href="/unloading-services.html">Unloading Services</a></li>
                  <li><a href="/furniture-assembly.html">Furniture Assembly</a></li>
                  <li><a href="/vehicle-transport.html">Vehicle Transport</a></li>
                  <li><a href="/specialty-moves.html">Specialty Moves</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
