import React from 'react'
import { Route } from 'react-router-dom';
import CityService from '../components/CityService';
import Packersandmovers from '../pages/SEO/Packersandmovers';
import Packersandmoversnearme from '../pages/SEO/Packersandmoversnearme';
import Packersandmoversnearmein from '../pages/SEO/Packersandmoversnearmein';
import BestPackersandMovers from '../pages/SEO/Bestpackersandmovers';
import BestPackersandMoversin from '../pages/SEO/Bestpackersandmoversin';
import LocalPackerandMovers from '../pages/SEO/Localpackersandmovers';
import LocalPackerandMoversin from '../pages/SEO/Localpackersandmoversin';
import ProfessionalPackerandMovers from '../pages/SEO/Professionalpackersandmovers';
import ProfessionalPackerandMoversin from '../pages/SEO/Professionalpackersandmoversin';
import cities from '../data/cities';

const Approutes = () => {
    return (
        <>
          {cities.map(city => {
            const formattedCity = city.toLowerCase().replace(/ /g, '-');
            const path1 = `/packers-and-movers-in-${formattedCity}.html`;
            const path2 = `/packers-and-movers-${formattedCity}.html`;
            const path3 = `/packers-and-movers-nearme-${formattedCity}.html`;
            const path4 = `/best-packers-and-movers-${formattedCity}.html`;
            const path5 = `/best-packers-and-movers-in-${formattedCity}.html`;
            const path6 = `/local-packers-and-movers-${formattedCity}.html`;
            const path7 = `/local-packers-and-movers-in-${formattedCity}.html`;
            const path8 = `/professional-packers-and-movers-${formattedCity}.html`;
            const path9 = `/professional-packers-and-movers-in-${formattedCity}.html`;
            const path10 = `/packers-and-movers-nearme-in-${formattedCity}.html`;
            return (
              <React.Fragment key={city}>
                <Route path={path1} element={<CityService city={city} />} />
                <Route path={path2} element={<Packersandmovers city={city} />} />
                <Route path={path3} element={<Packersandmoversnearme city={city} />} />
                <Route path={path4} element={<BestPackersandMovers city={city} />} />
                <Route path={path5} element={<BestPackersandMoversin city={city} />} />
                <Route path={path6} element={<LocalPackerandMovers city={city} />} />
                <Route path={path7} element={<LocalPackerandMoversin city={city} />} />
                <Route path={path8} element={<ProfessionalPackerandMovers city={city} />} />
                <Route path={path9} element={<ProfessionalPackerandMoversin city={city} />} />
                <Route path={path10} element={<Packersandmoversnearmein city={city} />} />
              </React.Fragment>
            );
          })}
        </>
      );
}

export default Approutes
