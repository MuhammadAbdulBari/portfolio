// components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
// Add this to your handleSubmit function in Contact.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    console.log('Sending form data:', formData);
    
    const response = await fetch('http://localhost:5000/api/contact/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log('Server response:', response.status, data);

    if (response.ok) {
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      throw new Error(data.message || `Server responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error sending message:', error);
    
    // More specific error messages
    let errorMessage = 'Failed to send message. Please try again.';
    if (error.message.includes('Failed to fetch')) {
      errorMessage = 'Cannot connect to server. Please check your connection.';
    } else if (error.message.includes('Authentication failed')) {
      errorMessage = 'Server configuration error. Please contact the site administrator.';
    }
    
    setSubmitMessage(errorMessage);
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  }
};
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-black to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxs="
        style={{ opacity: 0.1 }}
      ></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-48 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 192 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out—I'm always open to new connections and ideas.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl p-10 h-full border border-gray-800/30 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
              
              <h3 className="text-2xl font-semibold text-white mb-8 relative z-10">Contact Information</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-full bg-gray-800/50 flex items-center justify-center mr-5 border border-gray-700/30 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:nizamabdulbari13@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      nizamabdulbari13@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-full bg-gray-800/50 flex items-center justify-center mr-5 border border-gray-700/30 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 relative z-10">
                <h4 className="text-white font-semibold mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', icon: 'github', url: '#', color: 'hover:text-gray-300' },
                    { name: 'LinkedIn', icon: 'linkedin', url: '#', color: 'hover:text-blue-400' },
                    { name: 'Instagram', icon: 'instagram', url: '#', color: 'hover:text-pink-400' },
                    { name: 'Twitter', icon: 'twitter', url: '#', color: 'hover:text-cyan-400' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="w-14 h-14 rounded-full bg-gray-800/50 border border-gray-700/30 flex items-center justify-center text-gray-400 backdrop-blur-sm transition-all duration-300 group"
                      aria-label={social.name}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <div className={`transition-colors duration-300 ${social.color}`}>
                        <i className={`fab fa-${social.icon} text-xl`}></i>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl p-10 border border-gray-800/30 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"></div>
              
              <h3 className="text-2xl font-semibold text-white mb-8 relative z-10">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-3 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30 transition-all backdrop-blur-sm"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-3 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30 transition-all backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-3 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30 transition-all backdrop-blur-sm resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-700/30 to-purple-700/30 text-white font-medium hover:from-cyan-600/40 hover:to-purple-600/40 disabled:opacity-50 transition-all duration-300 flex items-center justify-center border border-cyan-500/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {submitMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${submitMessage.includes('successfully') ? 'bg-cyan-900/20 text-cyan-400 border border-cyan-500/20' : 'bg-red-900/20 text-red-400 border border-red-500/20'} backdrop-blur-sm`}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;