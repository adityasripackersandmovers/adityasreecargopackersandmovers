import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/animate.css'
import './assets/css/magnific-popup.css'
import './assets/css/meanmenu.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/nice-select.css'
import './assets/css/main.css'
import './assets/css/style.css'

import Layout from './layouts/Layout.jsx';
import Home from './pages/Homepage.jsx';
import About from './pages/Aboutpage.jsx';
import Services from './pages/Servicespage.jsx';
import Contact from './pages/Contactpage.jsx';
import Whyuspage from './pages/Whyuspage.jsx';
import Teampage from './pages/Teampage.jsx';
import FaqPage from './pages/Faqpage.jsx';
import ResidentialMoving from './pages/ResidentialMoving/ResidentialMoving.jsx';
import CommercialMoving from './pages/CommercialMoving/CommercialMoving.jsx';
import TransportServices from './pages/TransportServices/TransportServices.jsx';
import FurnitureAssembly from './pages/services/FurnitureAssembly.jsx';
import LoadingServices from './pages/services/LoadingServices.jsx';
import PackingServices from './pages/services/PackingServices.jsx';
import SpecialtyMoves from './pages/services/SpecialtyMoves.jsx';
import UnloadingServices from './pages/services/UnloadingServices.jsx';
import UnpackingServices from './pages/services/UnpackingServices.jsx';
import VehicleTransport from './pages/services/VehicleTransport.jsx';

import CityService from './components/CityService';
import cities from './data/cities';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about.html" element={<About />} />
      <Route path="/services.html" element={<Services />} />
      <Route path="/why-us.html" element={<Whyuspage />} />
      <Route path="/contact.html" element={<Contact />} />
      <Route path="/team.html" element={<Teampage />} />
      <Route path="/faq.html" element={<FaqPage />} />
      <Route path="/residential-moving.html" element={<ResidentialMoving />} />
      <Route path="/commercial-moving.html" element={<CommercialMoving />} />
      <Route path="/transport-services.html" element={<TransportServices />} />
      <Route path="/furniture-assembly.html" element={<FurnitureAssembly />} />
      <Route path="/loading-services.html" element={<LoadingServices />} />
      <Route path="/packing-services.html" element={<PackingServices />} />
      <Route path="/specialty-moves.html" element={<SpecialtyMoves />} />
      <Route path="/unloading-services.html" element={<UnloadingServices />} />
      <Route path="/unpacking-services.html" element={<UnpackingServices />} />
      <Route path="/vehicle-transport.html" element={<VehicleTransport />} />
      {cities.map(city => {
        const formattedCity = city.toLowerCase().replace(/ /g, '-');
        const path = `/packers-and-movers-in-${formattedCity}.html`;
        return (
          <Route
            key={city}
            path={path}
            element={<CityService city={city} />}
          />
        );
      })}
    </Route>
  </Routes>
</Router>
);