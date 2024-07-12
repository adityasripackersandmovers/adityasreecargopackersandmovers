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
                        What services do Aditya Sree Cargo Packers and Movers provide?
                      </button>
                    </h4>
                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                      Aditya Sree Cargo Packers and Movers offer a range of services including packing and unpacking, loading and unloading, transportation, car and bike transportation, office relocation, and warehousing services.
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
                        How are the packing materials chosen for my belongings?
                      </button>
                    </h4>
                    <div id="faq2" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                      <div className="accordion-body">
                      We use high-quality packing materials such as bubble wrap, corrugated boxes, packing tape, and specialized cartons to ensure the safety of your belongings during transit. Our team assesses your items and selects the appropriate materials to provide maximum protection.
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
                        How much will it cost to move my household items?
                      </button>
                    </h4>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                      The cost of moving your household items depends on various factors such as the volume of goods, the distance between the origin and destination, the type of packing materials used, and any additional services required. We provide a detailed quotation after an initial survey.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                      >
                        How long will it take to move my belongings?
                      </button>
                    </h4>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                      The duration of the move depends on the distance and the volume of goods. Local moves usually take 1-2 days, while long-distance moves can take several days. We provide an estimated timeline after assessing your requirements.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        aria-expanded="false"
                        aria-controls="faq5"
                      >
                        How can I schedule a move with Aditya Sree Cargo Packers and Movers?
                      </button>
                    </h4>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                      You can schedule a move by contacting us via phone, email, or through our website. Our team will arrange a survey, provide a quotation, and finalize the moving date based on your convenience
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq6"
                        aria-expanded="false"
                        aria-controls="faq6"
                      >
                        Can you help with the disassembly and reassembly of furniture?
                      </button>
                    </h4>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                      Yes, our experienced team can assist with the disassembly and reassembly of furniture. We ensure that your furniture is carefully handled and securely reassembled at your new location.
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
