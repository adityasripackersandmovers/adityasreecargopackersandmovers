import React from 'react';
import { FaBoxOpen, FaTruckMoving, FaWarehouse, FaBroom, FaTruck, FaLock } from 'react-icons/fa';

const promoItems = [
  { icon: FaBoxOpen, title: 'Packing Services', delay: '.2s' },
  { icon: FaTruckMoving, title: 'Moving Services', delay: '.4s' },
  { icon: FaWarehouse, title: 'Storage Services', delay: '.6s' },
  { icon: FaBroom, title: 'Cleaning Services', delay: '.7s' },
  { icon: FaTruck, title: 'Transport Services', delay: '.8s' },
  { icon: FaLock, title: 'Secure Services', delay: '.9s' },
];

const PromoSection = () => {
  return (
    <section className="promo-section section-padding pt-0">
      <div className="container">
        <div className="promo-wrapper style-3">
          <div className="row g-4">
            {promoItems.map((item, index) => (
              <div className={`col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp`} data-wow-delay={item.delay} key={index}>
                <div className="single-causes-cat">
                  <a href="causes-details.html">
                    <div className="icon">
                      <item.icon size={53} />
                    </div>
                    <h6>{item.title}</h6>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
