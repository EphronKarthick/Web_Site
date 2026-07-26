import React from 'react';
import Navbar from './components/Navbar';
//import Hero from './components/Hero';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import TransformationFlow from './components/TransformationFlow';
import Services from './components/Services';
import Values from './components/Values';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroCarousel />
      <About />
      <TransformationFlow />
      <Services />
      <Values />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;