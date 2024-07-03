import React,{ useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import MinNavbar from './components/MinNavbar'
import Preloader from './components/Preloader'

import Footer from './components/Footer'
import MiniFooter from './components/MiniFooter'
import Error from './components/Error'

import Hero from './components/Hero'


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
          <Footer />
          <MiniFooter />
          {/* Other components go here */}
        </>
      )}
    </div>
  )
}

export default App
