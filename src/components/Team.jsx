import React from 'react';
import { FaTruckMoving, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaUsers } from 'react-icons/fa';
import team from '../assets/img/volunter/01.jpg'
const Team = () => {
  return (
    <section className="team-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <FaUsers /> Our Team
          </span>
          <h2 className="mt-char-animation">
            Our Team Mates With <br />
            <span>Outstanding</span> Expertise
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="team-card-items">
              <div className="team-image">
                <img src={team} alt="Jane Cooper" />
                <div className="team-content">
                  <h3><a href="team-details.html">Jane Cooper</a></h3>
                  <p>Logistics Coordinator</p>
                  <div className="social-profile">
                    <ul>
                      <li><a href="#"><FaTwitter /></a></li>
                      <li><a href="#"><FaFacebookF /></a></li>
                      <li><a href="#"><FaInstagram /></a></li>
                      <li><a href="#"><FaLinkedinIn /></a></li>
                    </ul>
                    <span className="plus-btn"><FaTruckMoving /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="team-card-items">
              <div className="team-image">
                <img src={team} alt="Kane Saan" />
                <div className="team-content">
                  <h3><a href="team-details.html">Kane Saan</a></h3>
                  <p>Operations Manager</p>
                  <div className="social-profile">
                    <ul>
                      <li><a href="#"><FaTwitter /></a></li>
                      <li><a href="#"><FaFacebookF /></a></li>
                      <li><a href="#"><FaInstagram /></a></li>
                      <li><a href="#"><FaLinkedinIn /></a></li>
                    </ul>
                    <span className="plus-btn"><FaTruckMoving /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="team-card-items">
              <div className="team-image">
                <img src={team} alt="Jack Win" />
                <div className="team-content">
                  <h3><a href="team-details.html">Jack Win</a></h3>
                  <p>CEO of MoveFast</p>
                  <div className="social-profile">
                    <ul>
                      <li><a href="#"><FaTwitter /></a></li>
                      <li><a href="#"><FaFacebookF /></a></li>
                      <li><a href="#"><FaInstagram /></a></li>
                      <li><a href="#"><FaLinkedinIn /></a></li>
                    </ul>
                    <span className="plus-btn"><FaTruckMoving /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
