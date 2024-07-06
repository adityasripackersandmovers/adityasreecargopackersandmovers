import React from 'react'

const ServicesList = () => {
    const servicesList = [
        "Packers and Movers",
        "Best Packers and Movers",
        "IBA Approved Packers and Movers",
        "Packers and Movers approximate cost",
        "Best Packers and Movers near me",
        "Packers and Movers for Bike",
        "Car Packers and Movers",
        "Cargo Packers and Movers",
        "Efficient Packers and Movers",
        "Packers and Movers free quotes",
        "Packers and Movers Local Shifting Live Support",
        "Packers and Movers for House Shifting",
        "Near by Packers and Movers",
        "Near me Packers and Movers",
        "Packers and Movers quote",
        "Top Packers and Movers",
        "Cheapest Packers and Movers",
        "Packers and Movers for Car",
        "24/7 Packers and Movers",
        "2 Wheeler Packers and Movers",
        "2 BHK Packers and Movers",
        "Packers and Movers for Local Shifting",
        "Packers and Movers for House Shifting Near Me"
      ];

  return (
    <div>
          <section className="services section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {servicesList.map((service, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="service-card">
                <h6>{service}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default ServicesList
