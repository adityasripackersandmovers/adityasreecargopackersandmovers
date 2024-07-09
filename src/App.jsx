import React,{ useState, useEffect } from 'react'
import './App.css'
import Preloader from './components/Preloader'
import Error from './components/Error'

import Hero from './components/Hero'
import PromoSection from './components/PromoSection'
import About from './components/About'
import Feature from './components/Feature'
import Team from './components/Team'

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
