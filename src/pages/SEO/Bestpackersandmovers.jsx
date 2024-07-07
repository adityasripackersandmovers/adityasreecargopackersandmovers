import React from 'react'
import { Link } from 'react-router-dom';

const Bestpackersandmovers = ({ city }) => {
    const formattedCity = city.toLowerCase().replace(/ /g, '-');
    const url = `/best-packers-and-movers-${formattedCity}.html`;
  
    return (
      <div className="city-service">
        <h2>Best Packers and Movers {city}</h2>
        <p>Welcome to our Best Packers and Movers services {city}. We provide top-notch moving services to ensure your relocation is smooth and hassle-free.</p>
        <Link to={url}>Learn more about our Best services {city}</Link>
      </div>
    );
}

export default Bestpackersandmovers
