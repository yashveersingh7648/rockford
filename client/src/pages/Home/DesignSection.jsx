import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DesignSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm uppercase tracking-wider text-gray-500">Design</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
            Design is the backbone 
            <br />
            <span className="text-gray-600">of everything we do.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Brand Identity",
              description: "We build bold brand identities that don't just stand out, they belong."
            },
            {
              title: "Design Maturity",
              description: "Whether launching something new or refining what's already out there."
            },
            {
              title: "Visual Confidence",
              description: "We use design to create impact, provoke feeling, and give brands the confidence to lead."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignSection;