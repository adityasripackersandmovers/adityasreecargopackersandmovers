import React, { useEffect } from 'react';
import { FaQuestionCircle, FaClock } from 'react-icons/fa';
import fa1 from '../assets/img/faq/fa1.jpeg'
import fa2 from '../assets/img/faq/fa2.jpeg'
import fa3 from '../assets/img/faq/fa3.jpeg'
import fa4 from '../assets/img/faq/fa4.jpeg'
/*
import bootstrapcss from '../assets/css/bootstrap.min.css'
import bootstrapjs from '../assets/js/bootstrap.bundle.min.js'
*/
const Faq = () => {
    useEffect(() => {
        const bsCollapseList = document.querySelectorAll('.accordion-collapse');
        bsCollapseList.forEach((collapse) => {
          collapse.addEventListener('show.bs.collapse', function () {
            const parentAccordion = document.querySelector(
              `[data-bs-target="#${collapse.id}"]`
            );
            if (parentAccordion) {
              parentAccordion.setAttribute('aria-expanded', 'true');
            }
          });
    
          collapse.addEventListener('hide.bs.collapse', function () {
            const parentAccordion = document.querySelector(
              `[data-bs-target="#${collapse.id}"]`
            );
            if (parentAccordion) {
              parentAccordion.setAttribute('aria-expanded', 'false');
            }
          });
        });
      }, []);

  return (
    <section className="faq-section fix section-padding">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="section-title">
                <span className="sub-title color-2 wow fadeInUp">
                  <FaQuestionCircle /> Why Choose Us
                </span>
                <h2 className="mt-char-animation">
                  We’ve Completed 5k <br />
                  Moves Successfully
                </h2>
              </div>
              <div className="faq-accordion mt-4 mt-md-0">
                <div className="accordion" id="accordion">
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="false"
                        aria-controls="faq1"
                      >
                        How To Schedule A Move?
                      </button>
                    </h4>
                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".5s">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="true"
                        aria-controls="faq2"
                      >
                        What Services Do You Offer?
                      </button>
                    </h4>
                    <div id="faq2" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                      >
                        How To Ensure The Safety Of My Belongings?
                      </button>
                    </h4>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-image-items">
              <div className="counter-box">
                <h2>
                  <span className="count">19</span>+
                </h2>
                <p>Years of Experience</p>
              </div>
              <div className="row g-4">
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="faq-image">
                    <img src={fa1} alt="img" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="faq-image">
                    <img src={fa2} alt="img" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="faq-image">
                    <img src={fa3} alt="img" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                  <div className="faq-image">
                    <img src={fa4} alt="img" />
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

export default Faq;
