import React from 'react';
import { Link } from 'react-router-dom';

const CityService = ({ city }) => {
  const formattedCity = city.toLowerCase().replace(/ /g, '-');
  const url = `/packers-and-movers-in-${formattedCity}.html`;

  return (
    <div className="city-service">
      <h2>Packers and Movers in {city}</h2>
      <p>Welcome to our Packers and Movers services in {city}. We provide top-notch moving services to ensure your relocation is smooth and hassle-free.</p>
      <Link to={url}>Learn more about our services in {city}</Link>
    </div>
  );
};

export default CityService;
