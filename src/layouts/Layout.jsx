import React from 'react'
import { Outlet } from 'react-router-dom';
import MinNavbar from '../components/MinNavbar'
import Header from '../components/Header';
import Counter from '../components/Counter'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import ServiceAreas from '../components/ServiceAreas'
import ServicesList from '../components/ServicesList'
import Map from '../components/Map'
import Footer from '../components/Footer';
import MiniFooter from '../components/MiniFooter'
import ChatWidget from '../components/ChatWidget/ChatWidget';
const Layout = () => {
  return (
    <div className="layout">
      <MinNavbar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Services />
      <Counter />
      <Faq />
      <ServiceAreas />
      <ServicesList />
      <Testimonials />
      <Map />
      <Footer />
      <MiniFooter />
    </div>
  )
}

export default Layout
