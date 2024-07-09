import React,{ useState, useEffect } from 'react'
import './App.css'
import Preloader from './components/Preloader'
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
import Services from './components/Services'
import ServiceAreas from './components/ServiceAreas'
import ServicesList from './components/ServicesList'

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
          <Hero />
          <PromoSection />
          <About />
          <Services />
          <Counter />
          <Feature />
          {/* <Team /> */}
          <Faq />
          <ServiceAreas />
          <ServicesList />
          <Testimonials />
          <Map />
          {/* Other components go here */}
        </>
      )}
    </div>
  )
}

export default App
