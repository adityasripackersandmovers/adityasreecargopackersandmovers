import React from 'react'
import { Link } from 'react-router-dom';
const Packersandmoversnearme = ({ city }) => {
    const formattedCity = city.toLowerCase().replace(/ /g, '-');
    const url = `/packers-and-movers-nearme-${formattedCity}.html`;
  
    return (
      <div className="city-service">
        <h2>Packers and Movers nearme {city}</h2>
        <p>Welcome to our Packers and Movers services nearme {city}. We provide top-notch moving services to ensure your relocation is smooth and hassle-free.</p>
        <Link to={url}>Learn more about our services  nearme {city}</Link>
      </div>
    );
}

export default Packersandmoversnearme
