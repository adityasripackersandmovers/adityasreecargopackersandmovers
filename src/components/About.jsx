import React from 'react';
import logo from '../assets/img/about-logo.png';
import aboutImage1 from '../assets/img/about/1.jpg';
import aboutImage2 from '../assets/img/about/2.jpg';
import aboutImage3 from '../assets/img/about/3.jpg';
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
            <FaHeart /> Aditya Sri Packers and Movers
          </span>
          <h2 className="mt-char-animation">
            Our services <span className="color-2">make moving</span> <br />
            <span>easy and stress-free</span>
          </h2>
        </div>
        <div>
        <section className="about-us section-padding">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="wow fadeInUp">WELCOME TO</h2>
                <h1 className="wow fadeInUp">Aditya Sri Cargo</h1>
                <h3 className="wow fadeInUp">Packers And Movers</h3>
              </div>
              <div className="about-content wow fadeInUp">
                <p>Welcome to Aditya Sri Cargo Packers and Movers, your one-stop destination for reliable and efficient packing and moving services. Moving can be a daunting task, but with Aditya Sri Cargo Packers and Movers, you can rest assured that your belongings are in safe hands. We are a team of experienced professionals who take pride in delivering the highest quality of service to our clients.</p>
                <p>We understand that every move is unique, which is why we offer customized solutions to meet your specific requirements. Our services include packing, loading, transportation, unloading, and unpacking, all done with the utmost care and attention to detail.</p>
                <p>Our fleet of vehicles is well-maintained and equipped with the latest technology to ensure a smooth and hassle-free move. We use high-quality packing materials to safeguard your belongings during transit, and our team of experts ensures that everything is handled with care.</p>
                <p>At Aditya Sri Cargo Packers and Movers, we believe in transparency and integrity, and our pricing is always upfront and competitive. Our goal is to provide you with a stress-free moving experience, and we go above and beyond to ensure that everything is done to your satisfaction.</p>
                <p>Thank you for choosing Aditya Sri Cargo Packers and Movers. We look forward to serving you and making your move a success.</p>
              </div>
            </div>
          </section>
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
