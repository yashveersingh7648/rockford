import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const LivingTraditions = () => {
  const ref = useRef(null);
  const imageRefs = useRef([]);
  const progressRefs = useRef([]);
  const slideIntervals = useRef([]);
  const currentIndices = useRef([]);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -80]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.95]);

  const traditions = [
    {
      id: 1,
      number: "01",
      name: "Classical Dances",
      description: "Bharatanatyam, Kathak, Odissi — each with its own unique story.",
      detail: "Ancient storytelling through movement",
      images: [
        "https://i.pinimg.com/originals/a6/3f/53/a63f5396ac2b018c7d38e9c9d36b5c1b.jpg",
        "https://www.poojn.in/wp-content/uploads/2025/05/The-8-Classical-Dances-of-India-An-Exploration.jpeg.jpg?w=800&h=600&fit=crop",
        "https://mediaim.expedia.com/localexpert/213788/532e75b6-04d7-4b01-9a0c-0a41fcd3094c.jpg?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      number: "02",
      name: "Folk Music",
      description: "From Bhangra to Baul, the soulful rhythms of India.",
      detail: "Melodies of the people",
      images: [
        "https://i.pinimg.com/originals/77/07/f1/7707f1b8f7ed4b7b4e925747c4da68d9.jpg",
        "https://files.prokerala.com/news/photos/imgs/1024/padma-shri-sakar-khan-at-the-amarrasss-desert-41713.jpg?w=800&h=600&fit=crop",
        "https://th.bing.com/th/id/R.b6bff8d511abf73422c6e0d750cade4d?rik=8W0r6YgV0FFaIg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-uRFswhtTuE4%2fTbYHXEHwryI%2fAAAAAAAACoI%2fuOLPYxQf1vo%2fs1600%2fTalavya%2bLive-c-JosephHammond.jpg&ehk=%2fafJFuFZeLvARzVlfgYOYoniRb%2br9i7DBovhQo2RDrA%3d&risl=&pid=ImgRaw&r=0?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      number: "03",
      name: "Spiritual Festivals",
      description: "Kumbh Mela, the world's largest peaceful gathering.",
      detail: "Celebrations of faith and unity",
      images: [
        "https://img.freepik.com/premium-photo/sea-devotees-gathered-feet-towering-durga-idol_756535-1251.jpg",
        "https://i.pinimg.com/originals/24/af/d9/24afd9e8b7ed048bcd962b9f38c39747.jpg?w=800&h=600&fit=crop",
        "https://media.cntraveller.com/photos/63fdf5557b4cdb0e8f4adab9/16:9/w_2560%2Cc_limit/GettyImages-1359478157.jpeg?w=800&h=600&fit=crop"
      ],
    },
    {
      id: 4,
      number: "04",
      name: "Natural Wonders",
      description: "From Himalayan peaks to Kerala's backwaters, India's landscapes enchant.",
      detail: "Beauty of the subcontinent",
      images: [
        "https://www.clubmahindra.com/blog/images/Manali-Himachal-Pradesh-2-resized.jpg?w=800&h=600&fit=crop",
        "https://www.postoast.com/wp-content/uploads/2018/10/Dudhsagar-Waterfall-Best-Falls-in-India.jpg?w=800&h=600&fit=crop",
        "https://static.vecteezy.com/system/resources/previews/000/742/601/large_2x/himalayas-mountain-landscape-photo.jpg?w=800&h=600&fit=crop"
      ]
    }
  ];

  // Enhanced GSAP slideshow with cinematic transitions
  useEffect(() => {
    imageRefs.current.forEach((container, groupIndex) => {
      if (!container) return;

      const images = container.querySelectorAll('.card-image');
      const progressBar = progressRefs.current[groupIndex];
      if (images.length === 0) return;

      let currentIndex = 0;
      let isTransitioning = false;
      let intervalId = null;

      // Create a lens flare overlay
      const flare = document.createElement('div');
      flare.className = 'flare-overlay';
      flare.style.cssText = `
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 40%, rgba(255,255,255,0) 80%);
        opacity: 0;
        pointer-events: none;
        z-index: 5;
        mix-blend-mode: overlay;
      `;
      container.appendChild(flare);

      // Set initial states
      images.forEach((img, idx) => {
        gsap.set(img, {
          opacity: idx === 0 ? 1 : 0,
          x: 0,
          scale: idx === 0 ? 1 : 0.9,
          rotateY: 0,
          filter: 'blur(0px)',
          display: 'block',
          zIndex: idx === 0 ? 2 : 1
        });
      });

      if (progressBar) {
        const dots = progressBar.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
          gsap.set(dot, {
            backgroundColor: i === 0 ? '#B31942' : 'rgba(255,255,255,0.3)',
            scale: i === 0 ? 1.2 : 1
          });
        });
      }

      const goToNext = () => {
        if (isTransitioning) return;
        isTransitioning = true;

        const nextIndex = (currentIndex + 1) % images.length;
        const currentImg = images[currentIndex];
        const nextImg = images[nextIndex];

        // Kill existing tweens
        gsap.killTweensOf(currentImg);
        gsap.killTweensOf(nextImg);
        gsap.killTweensOf(flare);

        // 1. Animate current out: slide left + scale down + blur + rotate
        gsap.to(currentImg, {
          x: -80,
          scale: 0.85,
          rotateY: -15,
          filter: 'blur(12px) brightness(0.6)',
          opacity: 0,
          duration: 1.5,
          ease: 'power3.inOut',
          zIndex: 1
        });

        // 2. Prepare next: start from right, scaled up, blurred, rotated
        gsap.set(nextImg, {
          x: 80,
          scale: 1.15,
          rotateY: 15,
          filter: 'blur(16px) brightness(0.5)',
          opacity: 0,
          display: 'block',
          zIndex: 2
        });

        // 3. Animate next in: slide to center, scale down, unblur, rotate back
        gsap.to(nextImg, {
          x: 0,
          scale: 1,
          rotateY: 0,
          filter: 'blur(0px) brightness(1)',
          opacity: 1,
          duration: 1.8,
          ease: 'power4.out',
          delay: 0.1,
          onComplete: () => {
            isTransitioning = false;
            currentIndex = nextIndex;

            // Update progress dots
            if (progressBar) {
              const dots = progressBar.querySelectorAll('.dot');
              dots.forEach((dot, i) => {
                gsap.to(dot, {
                  backgroundColor: i === currentIndex ? '#B31942' : 'rgba(255,255,255,0.3)',
                  scale: i === currentIndex ? 1.2 : 1,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              });
            }
          }
        });

        // 4. Animate lens flare across the image (left to right) during transition
        gsap.fromTo(flare,
          { opacity: 0, x: '-100%' },
          { opacity: 0.8, x: '100%', duration: 1.0, ease: 'power2.inOut', delay: 0.3 }
        );
        gsap.to(flare, { opacity: 0, duration: 0.3, delay: 1.4 });
      };

      // Start interval
      const startSlideshow = () => {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(goToNext, 5000);
      };

      // Pause on hover
      const handleMouseEnter = () => {
        if (intervalId) clearInterval(intervalId);
      };
      const handleMouseLeave = () => {
        startSlideshow();
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      // Store interval id for cleanup
      slideIntervals.current[groupIndex] = { intervalId, startSlideshow };

      startSlideshow();

      // Cleanup function for this card
      return () => {
        if (intervalId) clearInterval(intervalId);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        if (flare && flare.parentNode) flare.parentNode.removeChild(flare);
      };
    });

    // Cleanup all intervals on unmount
    return () => {
      slideIntervals.current.forEach(item => {
        if (item && item.intervalId) clearInterval(item.intervalId);
      });
    };
  }, []);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.9,
      rotateX: -15
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section ref={ref} className="relative py-24 px-4 bg-india-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 44v-6h-4v6h-6v4h6v6h4v-6h6v-4h-6zm0-40V0h-4v4h-6v4h6v4h4V8h6V4h-6zM10 44v-6H6v6H0v4h6v6h4v-6h6v-4H10zM10 4V0H6v4H0v4h6v4h4V8h6V4H10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Animated Orbs */}
      <motion.div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#B31942]/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#0A3161]/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -100, 50, 0],
          y: [0, 50, -100, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        style={{ opacity, y, scale }}
        className="max-w-8xl mx-auto relative"
      >
        {/* Header Section (unchanged) */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <motion.span 
                className="w-12 h-0.5 bg-[#B31942]"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8 }}
              />
              <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
                Living Heritage
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              <span className="text-white">Cultural</span>
              <br />
              <span className="bg-gradient-to-r from-[#B31942] to-white bg-clip-text text-transparent">
                Heartbeat
              </span>
              <br />
              <span className="text-white/80">of India.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
              From classical arts to regional expressions — explore the living traditions 
              that make India's diverse heritage truly unique and timeless.
            </p>
          </motion.div>
        </div>

        {/* Traditions Grid - Full Image Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traditions.map((tradition, index) => (
            <motion.div
              key={tradition.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Images Container */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                ref={el => imageRefs.current[index] = el}
              >
                {tradition.images.map((img, imgIndex) => (
                  <img 
                    key={imgIndex}
                    src={img} 
                    alt={`${tradition.name} - ${imgIndex + 1}`}
                    className="card-image absolute inset-0 w-full h-full object-cover"
                    style={{ 
                      opacity: imgIndex === 0 ? 1 : 0,
                      willChange: 'transform, opacity, filter',
                      zIndex: imgIndex === 0 ? 2 : 1
                    }}
                    loading="lazy"
                  />
                ))}
              </motion.div>

              {/* Progress Indicator - Dots */}
              <div 
                className="absolute top-4 right-4 z-20 flex gap-1.5"
                ref={el => progressRefs.current[index] = el}
              >
                {tradition.images.map((_, i) => (
                  <div
                    key={i}
                    className="dot w-2 h-2 rounded-full transition-colors"
                    style={{ 
                      backgroundColor: i === 0 ? '#B31942' : 'rgba(255,255,255,0.3)',
                      transform: i === 0 ? 'scale(1.2)' : 'scale(1)'
                    }}
                  />
                ))}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                >
                  <span className="text-sm font-mono text-white/40">{tradition.number}</span>
                  <motion.span 
                    className="w-12 h-0.5 bg-[#B31942]"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                  />
                </motion.div>

                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#B31942] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                >
                  {tradition.name}
                </motion.h3>

                <motion.p 
                  className="text-white/70 text-sm leading-relaxed mb-3 max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                >
                  {tradition.description}
                </motion.p>

                <motion.p 
                  className="text-white/40 text-xs italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.6 }}
                >
                  {tradition.detail}
                </motion.p>

                <motion.div
                  className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-full bg-[#B31942]"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{
                  background: `radial-gradient(circle at 50% 0%, rgba(179, 25, 66, 0.15), transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Stats (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {[
                { number: "22+", label: "Languages" },
                { number: "100+", label: "Dance Forms" },
                { number: "365+", label: "Festivals" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-center"
                >
                  <motion.p 
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#B31942] bg-clip-text text-transparent"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#B31942] to-[#0A3161] opacity-90" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative text-white text-sm font-medium inline-flex items-center gap-2">
                Explore Heritage
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>

          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ 
                  backgroundColor: i % 2 === 0 ? 'rgba(179, 25, 66, 0.5)' : 'rgba(255,255,255,0.2)' 
                }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3,
                  ease: "easeInOut" 
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LivingTraditions;