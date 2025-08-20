// components/TypingAnimation.jsx
import React, { useEffect, useRef } from 'react';

const TypingAnimation = ({ 
  strings, 
  typeSpeed = 50, 
  backSpeed = 30, 
  backDelay = 2000, 
  loop = true,
  className = "" 
}) => {
  const el = useRef(null);
  
  useEffect(() => {
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingTimeout;
    
    const type = () => {
      const currentString = strings[currentStringIndex];
      
      if (isDeleting) {
        // Remove characters
        el.current.textContent = currentString.substring(0, currentCharIndex - 1);
        currentCharIndex--;
      } else {
        // Add characters
        el.current.textContent = currentString.substring(0, currentCharIndex + 1);
        currentCharIndex++;
      }
      
      // Determine timeout speed
      let timeoutSpeed = isDeleting ? backSpeed : typeSpeed;
      
      // If word is complete
      if (!isDeleting && currentCharIndex === currentString.length) {
        timeoutSpeed = backDelay;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentStringIndex = (currentStringIndex + 1) % strings.length;
        timeoutSpeed = 500;
      }
      
      typingTimeout = setTimeout(type, timeoutSpeed);
    };
    
    typingTimeout = setTimeout(type, typeSpeed);
    
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);
  
  return <span ref={el} className={className} />;
};

export default TypingAnimation;