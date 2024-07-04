import React from 'react'
import { Outlet } from 'react-router-dom';
import MinNavbar from '../components/MinNavbar'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiniFooter from '../components/MiniFooter'

const Layout = () => {
  return (
    <div className="layout">
      <MinNavbar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MiniFooter />
    </div>
  )
}

export default Layout
