import React from 'react'
import { Link } from 'react-router-dom';

const Localpackersandmovers = ({ city }) => {
    const formattedCity = city.toLowerCase().replace(/ /g, '-');
    const url = `/local-packers-and-movers-${formattedCity}.html`;
  
    return (
      <div className="city-service">
        <h2>Local Packers and Movers {city}</h2>
        <p>Welcome to our Local Packers and Movers services {city}. We provide top-notch moving services to ensure your relocation is smooth and hassle-free.</p>
        <Link to={url}>Learn more about our local packing services {city}</Link>
      </div>
    );
}

export default Localpackersandmovers
