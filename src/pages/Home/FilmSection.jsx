import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FilmSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm uppercase tracking-wider text-gray-500">Film</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
            We make films that look good, 
            <br />
            <span className="text-gray-600">and say something too.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-video bg-black rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </button>
          </div>
          {/* Placeholder for video - you can replace with actual video */}
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 mt-6 max-w-3xl"
        >
          From cinematic brand stories to product films and campaign content, 
          our work blends strategy with style. Every frame is crafted to connect, 
          not just decorate.
        </motion.p>
      </div>
    </section>
  );
};

export default FilmSection;