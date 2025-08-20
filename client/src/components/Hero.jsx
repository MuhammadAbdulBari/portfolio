// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import Particles from './Particles';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <Particles quantity={100} />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-900 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
            className="mb-12 mx-auto w-32 h-32 rounded-full border-2 border-gray-600/30 bg-gradient-to-br from-gray-900/50 to-black/50 flex items-center justify-center shadow-2xl shadow-purple-500/10 backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              rotate: 5,
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)"
            }}
          >
            <div className="w-24 h-24 rounded-full border border-gray-600/30 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine"></div>
              <span className="text-white font-bold text-3xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent relative z-10">MAB</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Muhammad
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent font-medium">
              Abdul Bari
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '280px' }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mx-auto h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent mb-8"
          ></motion.div>
          
          <motion.div 
            className="text-xl md:text-2xl mb-12 text-gray-300 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center justify-center gap-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-600 opacity-60"></div>
              <TypingAnimation
                strings={[
                  "Web & App Developer",
                  "Software Architect",
                  "Digital Craftsman",
                  "Visionary Engineer"
                ]}
                typeSpeed={60}
                backSpeed={40}
                className="text-gray-300 font-medium bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
              />
              <div className="w-8 h-px bg-gradient-to-r from-gray-600 to-transparent opacity-60"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a 
              href="#projects" 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700/30 text-white font-medium tracking-wider uppercase text-sm hover:border-purple-600/50 transition-all duration-500 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
                View Portfolio
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine"></div>
            </motion.a>
            
            <motion.a 
              href="/cv.pdf" 
              download
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(103, 232, 249, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 rounded-full border border-cyan-700/30 bg-gradient-to-r from-cyan-900/20 to-gray-900/30 text-white font-medium tracking-wider uppercase text-sm hover:bg-cyan-800/20 transition-all duration-500 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </span>
              <div className="absolute inset-0 bg-cyan-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <div className="text-gray-500 text-xs tracking-widest uppercase mb-2 opacity-70 font-medium">
            Scroll
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
        </div>
      </motion.div>
      
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-700/20 rounded-tl-lg"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-purple-700/20 rounded-tr-lg"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-blue-700/20 rounded-bl-lg"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-violet-700/20 rounded-br-lg"></div>
    </section>
  );
};

export default Hero;