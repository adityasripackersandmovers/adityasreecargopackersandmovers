import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/css/swiper-bundle.min.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="testimonial-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">Client Testimonials</span>
          <h2 className="mt-char-animation">Our Clients Feedback</h2>
        </div>
      </div>
      <Swiper className="testimonial-swiper-2">
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="testimonial-card-item">
              <div className="star">
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="unfilled" />
              </div>
              <p>
                "The team was professional and efficient. They handled my belongings with care and made the moving process stress-free. Highly recommend!"
              </p>
              <div className="client-info">
                <div className="client-img bg-cover" style={{ backgroundImage: "url('assets/img/testimonial/client-1.png')" }}></div>
                <div className="content">
                  <h4>Shikhon Islam</h4>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card-item">
              <div className="star">
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="unfilled" />
              </div>
              <p>
                "They made my move seamless and hassle-free. The staff was friendly and punctual. Would definitely use their services again!"
              </p>
              <div className="client-info">
                <div className="client-img bg-cover" style={{ backgroundImage: "url('assets/img/testimonial/client-2.png')" }}></div>
                <div className="content">
                  <h4>Albert Flores</h4>
                  <span>Founder</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card-item">
              <div className="star">
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="unfilled" />
              </div>
              <p>
                "Excellent service from start to finish. The movers were careful and efficient. Highly recommend for any moving needs!"
              </p>
              <div className="client-info">
                <div className="client-img bg-cover" style={{ backgroundImage: "url('assets/img/testimonial/client-3.png')" }}></div>
                <div className="content">
                  <h4>Guy Hawkins</h4>
                  <span>Founder</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card-item">
              <div className="star">
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="filled" />
                <FaStar className="unfilled" />
              </div>
              <p>
                "The team was professional and efficient. They handled my belongings with care and made the moving process stress-free. Highly recommend!"
              </p>
              <div className="client-info">
                <div className="client-img bg-cover" style={{ backgroundImage: "url('assets/img/testimonial/client-2.png')" }}></div>
                <div className="content">
                  <h4>Albert Flores</h4>
                  <span>Founder</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-dot center pt-5">
          <div className="dot"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;