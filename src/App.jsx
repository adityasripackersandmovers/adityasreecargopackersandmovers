import React,{ useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import MinNavbar from './components/MinNavbar'
import Preloader from './components/Preloader'

import Footer from './components/Footer'
import MiniFooter from './components/MiniFooter'
import Error from './components/Error'

import Hero from './components/Hero'
import PromoSection from './components/PromoSection'
import About from './components/About'
import Counter from './components/Counter'
import Feature from './components/Feature'
import Team from './components/Team'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'
import Map from './components/Map'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {loading ? <Preloader /> : (
        <>
          <MinNavbar />
          <Header />
          <Hero />
          <PromoSection />
          <About />
          <Counter />
          <Feature />
          <Team />
          <Faq />
          <Testimonials />
          <Map />
          <Footer />
          <MiniFooter />
          {/* Other components go here */}
        </>
      )}
    </div>
  )
}

export default App
