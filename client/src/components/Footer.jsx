// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Muhammad Abdul Bari</h3>
            <p className="text-gray-400">Software Engineer & Developer</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {[
              { name: 'GitHub', icon: 'github', url: '#', color: 'hover:text-gray-300' },
              { name: 'LinkedIn', icon: 'linkedin', url: '#', color: 'hover:text-blue-400' },
              { name: 'Instagram', icon: 'instagram', url: '#', color: 'hover:text-pink-400' },
              { name: 'Twitter', icon: 'twitter', url: '#', color: 'hover:text-cyan-400' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="w-12 h-12 rounded-full bg-gray-900/50 border border-gray-800/30 flex items-center justify-center text-gray-400 backdrop-blur-sm transition-all duration-300 group"
                aria-label={social.name}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className={`transition-colors duration-300 ${social.color}`}>
                  <i className={`fab fa-${social.icon} text-lg`}></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-900/30 mt-8 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Muhammad Abdul Bari. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;