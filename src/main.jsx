import React from 'react';
import { createRoot } from 'react-dom';
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

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
  </Router>
);