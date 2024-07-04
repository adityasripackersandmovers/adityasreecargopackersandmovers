import React from 'react';
import { FaProjectDiagram, FaChild, FaUsers, FaAward } from 'react-icons/fa';

const Counter = () => {
  return (
    <section className="counter-section section-padding">
      <div className="container">
        <div className="counter-wrapper">
          <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
            <div className="icon">
               <FaProjectDiagram size={60} />
            </div>
            <div className="content">
              <h2>
                <span className="count">2</span>
                <span>K</span>+
              </h2>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
            <div className="icon">
              <FaChild size={60}/>
            </div>
            <div className="content">
              <h2>
                <span className="count">1</span>
                <span>K</span>+
              </h2>
              <p>Families Relocated</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
            <div className="icon">
              <FaUsers size={60}/>
            </div>
            <div className="content">
              <h2>
                <span className="count">15</span>+
              </h2>
              <p>Team Members</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
            <div className="icon">
              <FaAward size={60}/>
            </div>
            <div className="content">
              <h2>
                <span className="count">10</span>+
              </h2>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
