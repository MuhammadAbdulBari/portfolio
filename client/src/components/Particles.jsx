// components/Particles.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Particles = ({ quantity = 100 }) => {
  const particles = Array.from({ length: quantity });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 5 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 10;
        const colors = [
          'rgba(103, 232, 249, 0.3)', // cyan
          'rgba(139, 92, 246, 0.3)', // purple
          'rgba(96, 165, 250, 0.3)', // blue
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${posX}%`,
              top: `${posY}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: color,
              boxShadow: `0 0 ${size * 2}px ${size}px ${color.replace('0.3', '0.1')}`,
            }}
            animate={{
              x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
              y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
              rotate: 360,
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;