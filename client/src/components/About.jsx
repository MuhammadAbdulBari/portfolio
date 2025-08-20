// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjJnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRINnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0SDZWNkg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-48 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 192 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-800/30 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
              
              <div className="text-lg text-gray-300 leading-relaxed space-y-6 relative z-10">
                <p className="text-xl text-gray-400 mb-6 italic border-l-4 border-cyan-500/50 pl-4 py-2">
                  "Crafting digital excellence with timeless elegance"
                </p>
                <p>
                  I'm a 16-year-old Software Engineering student with a passion for creating 
                  innovative digital solutions. As an INTP personality type, I thrive on 
                  solving complex problems and building systems that make a difference.
                </p>
                <p>
                  My journey in development started at a young age, and I've since mastered 
                  various technologies across web and mobile development. I specialize in 
                  creating responsive, user-friendly applications with clean, efficient code.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or brainstorming my next big idea.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { name: 'HTML/CSS', level: 95, color: 'from-cyan-500 to-cyan-600' },
              { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-600' },
              { name: 'React.js', level: 85, color: 'from-blue-500 to-blue-600' },
              { name: 'Node.js', level: 80, color: 'from-green-500 to-green-600' },
              { name: 'Flutter', level: 75, color: 'from-sky-500 to-sky-600' },
              { name: 'Laravel', level: 70, color: 'from-red-500 to-red-600' },
              { name: 'ASP.NET', level: 65, color: 'from-purple-500 to-purple-600' },
              { name: 'MongoDB', level: 85, color: 'from-emerald-500 to-emerald-600' },
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-5 hover:shadow-2xl transition-all duration-500 group border border-gray-800/30 relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex justify-between mb-3 relative z-10">
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                  <span className="text-gray-400 font-semibold group-hover:text-white transition-colors">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2.5 relative z-10">
                  <motion.div 
                    className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} shadow-md`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gray-700/20 blur-xl group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;