import React from 'react';
import './App.css';
import BackToTop from './components/BackToTop';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Edu from './components/Edu';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <BackToTop />
    <Navbar />
    <Home />
    <About />
    <Work />
    <Edu />
    <Contact />
    </>
  );
}

export default App;
