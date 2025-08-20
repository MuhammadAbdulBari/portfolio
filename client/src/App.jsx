import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // This import should be correct now
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <footer className="py-10 text-center text-slate-500">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Muhammad Abdul Bari. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;