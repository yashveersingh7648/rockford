import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"]
  });

  // Spring-based smooth scroll for the entire page
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Optional: Add scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      // You can add custom scroll logic here
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Scroll Progress Bar - Optional */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B31942] to-[#0A3161] z-50"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />
      {children}
    </div>
  );
};

export default SmoothScroll;