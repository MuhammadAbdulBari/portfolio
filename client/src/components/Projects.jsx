// components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'Orrento Rental App',
      category: 'mobile',
      description: 'A comprehensive rental application for various products with secure payment integration and real-time tracking.',
      image: '/images/orrento.jpg',
      technologies: ['Flutter', 'Firebase', 'Stripe'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: 'Eventure Event Management',
      category: 'web',
      description: 'Platform for creating, managing, and promoting events with ticket sales and attendee management.',
      image: '/images/eventure.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'Ondule Clothing Brand',
      category: 'web',
      description: 'E-commerce platform for a modern clothing brand with product customization and AR try-on features.',
      image: '/images/ondule.jpg',
      technologies: ['Next.js', 'Shopify', 'Three.js'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 4,
      title: 'MogMark Agency',
      category: 'branding',
      description: 'Digital marketing agency website with portfolio showcase, service listings, and client management system.',
      image: '/images/mogmark.jpg',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 5,
      title: 'DecorVista',
      category: 'web',
      description: 'Home decor e-commerce platform with interior design consultation and augmented reality preview.',
      image: '/images/decovista.jpg',
      technologies: ['React', 'Node.js', 'AR.js'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 6,
      title: 'SadarCables',
      category: 'web',
      description: 'E-commerce store for electronic cables and accessories with inventory management and order tracking.',
      image: '/images/sadarcables.jpg',
      technologies: ['Laravel', 'MySQL', 'Bootstrap'],
      links: {
        live: '#',
        github: '#'
      }
    },
  ];
  
  const filters = [
    { key: 'all', name: 'All Projects' },
    { key: 'web', name: 'Web Apps' },
    { key: 'mobile', name: 'Mobile Apps' },
    { key: 'branding', name: 'Branding' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRINnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0SDZWNkg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
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
            My Projects
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
            A collection of my finest work, showcasing innovation and excellence in digital craftsmanship
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-cyan-700/30 to-purple-700/30 text-white shadow-lg border border-cyan-500/20'
                  : 'bg-gray-900/70 text-gray-400 hover:text-white hover:border-gray-600/30 border border-gray-800/30'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group rounded-3xl overflow-hidden bg-gray-900/70 backdrop-blur-xl border border-gray-800/30 hover:border-cyan-500/20 transition-all duration-500 relative"
              layout
            >
              <div className="overflow-hidden relative">
                <div className="h-60 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative">
                  <span className="text-5xl text-gray-600 font-bold opacity-60">{project.title.charAt(0)}</span>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex gap-3">
                      {project.links.live && (
                        <motion.a 
                          href={project.links.live} 
                          className="px-5 py-2.5 text-sm rounded-full bg-cyan-700/30 backdrop-blur-sm text-white font-medium hover:bg-cyan-600/40 transition-colors border border-cyan-500/20"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                      {project.links.github && (
                        <motion.a 
                          href={project.links.github} 
                          className="px-5 py-2.5 text-sm rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 text-gray-300 font-medium hover:bg-gray-700/50 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">{project.title}</h3>
                <p className="text-gray-400 mb-5 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={i}
                      className="px-3 py-1.5 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/30 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute -inset-5 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;