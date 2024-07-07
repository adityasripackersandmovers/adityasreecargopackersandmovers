import React from 'react'
import { Route } from 'react-router-dom';
import CityService from '../components/CityService';
import Packersandmovers from '../pages/SEO/Packersandmovers';
import Packersandmoversnearme from '../pages/SEO/Packersandmoversnearme';
import cities from '../data/cities';

const Approutes = () => {
    return (
        <>
          {cities.map(city => {
            const formattedCity = city.toLowerCase().replace(/ /g, '-');
            const path1 = `/packers-and-movers-in-${formattedCity}.html`;
            const path2 = `/packers-and-movers-${formattedCity}.html`;
            const path3 = `/packers-and-movers-nearme-${formattedCity}.html`;
    
            return (
              <React.Fragment key={city}>
                <Route path={path1} element={<CityService city={city} />} />
                <Route path={path2} element={<Packersandmovers city={city} />} />
                <Route path={path3} element={<Packersandmoversnearme city={city} />} />
              </React.Fragment>
            );
          })}
        </>
      );
}

export default Approutes
