import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Palette, UtensilsCrossed, PartyPopper, Building2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DiversityDesign = () => {
  const ref = useRef(null);
  const imageRefs = useRef({});
  const slideIntervals = useRef({});
  const [activeIndices, setActiveIndices] = useState({});

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax animations
  const leftImageY = useTransform(smoothProgress, [0, 0.5, 1], [80, 0, -40]);
  const rightImageY = useTransform(smoothProgress, [0, 0.5, 1], [-80, 0, 40]);
  const leftImageRotate = useTransform(smoothProgress, [0, 0.5, 1], [8, 0, -4]);
  const rightImageRotate = useTransform(smoothProgress, [0, 0.5, 1], [-8, 0, 4]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1, 0.93]);

  // Cultural elements with 3 images each
  const culturalElements = [
    {
      title: "Art & Crafts",
      description: "From Madhubani paintings to Pashmina weaves, every state boasts unique artistic traditions spanning centuries.",
      icon: Palette,
      images: [
        "https://c9admin.cottage9.com/uploads/2611/exploring-the-elegance-of-eadha-krishna-in-madhubani-paintings.jpg",
        "https://mandalameadow.com/wp-content/uploads/2020/06/Traditional-art-and-crafts-in-India-_-Warli-Art.jpg?w=800&h=600&fit=crop",
        "https://tse2.mm.bing.net/th/id/OIP.VPd8a8LcR8_6Lgvpbh2MfwHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3?w=800&h=600&fit=crop"
      ],
      accent: "#D4464E"
    },
    {
      title: "Cuisine",
      description: "A culinary journey from the spicy curries of the South to the rich gravies of the North, each bite tells a story.",
      icon: UtensilsCrossed,
      images: [
        "https://thumbs.dreamstime.com/b/vibrant-aigenerated-indian-food-photography-culinary-journey-south-asian-flavors-stunning-black-borders-immerse-380774586.jpg",
        "https://www.bunkarvalley.com/wp-content/uploads/2025/07/Chappan-Bhog.jpg?w=800&h=600&fit=crop",
        "https://static2.tripoto.com/media/filter/tst/img/1977753/TripDocument/1625028759_traditions_indian_dishes.png?w=800&h=600&fit=crop"
      ],
      accent: "#0A3161"
    },
    {
      title: "Festivals",
      description: "Celebrations like Diwali, Holi, and Onam showcase the nation's vibrant spirit and the essence of unity in diversity.",
      icon: PartyPopper,
      images: [
        "https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/07/62b39ecb38dcf42dc6e6be36ea36bee21678184593935594_original.jpg",
        "https://i.pinimg.com/originals/24/af/d9/24afd9e8b7ed048bcd962b9f38c39747.jpg?w=800&h=600&fit=crop",
        "https://media.cntraveller.com/photos/63fdf5557b4cdb0e8f4adab9/16:9/w_2560%2Cc_limit/GettyImages-1359478157.jpeg?w=800&h=600&fit=crop"
      ],
      accent: "#D4464E"
    },
    {
      title: "Architecture",
      description: "From the grandeur of ancient forts to the intricate carvings of temple towns and the elegance of royal palaces, India's architecture tells stories of craftsmanship and culture.",
      icon: Building2,
      images: [
        "https://t4.ftcdn.net/jpg/09/01/43/69/360_F_901436949_9PvEYN0w9wBQlbvVC9FAI5QpKsoy8Waj.jpg",
        "https://wanderersplanet.com/wp-content/uploads/2022/10/Famous-Buildings-In-India-6-1024x576.jpg?w=800&h=600&fit=crop",
        "https://www.zoopindia.com/blog/wp-content/uploads/2024/01/Ram-Mandir-in-Ayodhya.webp?w=800&h=600&fit=crop"
      ],
      accent: "#0A3161"
    }
  ];

  // GSAP Image Carousel with Ken Burns effect
  useEffect(() => {
    culturalElements.forEach((element, elementIndex) => {
      const container = imageRefs.current[elementIndex];
      if (!container) return;

      const images = container.querySelectorAll('.carousel-image');
      if (images.length === 0) return;

      let currentIndex = 0;
      const imageCount = images.length;

      // Initialize active index
      setActiveIndices(prev => ({ ...prev, [elementIndex]: 0 }));

      // Initialize all images
      images.forEach((img, idx) => {
        gsap.set(img, {
          opacity: idx === 0 ? 1 : 0,
          x: 0,
          scale: idx === 0 ? 1 : 0.9,
          filter: idx === 0 ? 'brightness(0.95)' : 'brightness(0.7)',
          display: 'block',
          zIndex: idx === 0 ? 2 : 1
        });

        // Ken Burns effect on active image
        if (idx === 0) {
          gsap.to(img, {
            scale: 1.08,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }
      });

      // Clear existing interval
      if (slideIntervals.current[elementIndex]) {
        clearInterval(slideIntervals.current[elementIndex]);
      }

      // Carousel animation
      const carousel = setInterval(() => {
        const nextIndex = (currentIndex + 1) % imageCount;
        const currentImg = images[currentIndex];
        const nextImg = images[nextIndex];

        // Update indicator
        setActiveIndices(prev => ({ ...prev, [elementIndex]: nextIndex }));

        // Kill any existing animations on these images
        gsap.killTweensOf(currentImg);
        gsap.killTweensOf(nextImg);

        // Exit animation - current image
        gsap.to(currentImg, {
          opacity: 0,
          x: -80,
          scale: 0.8,
          filter: 'brightness(0.3) blur(10px)',
          duration: 1,
          ease: 'power2.inOut',
          zIndex: 1
        });

        // Prepare entrance - next image
        gsap.set(nextImg, {
          opacity: 0,
          x: 80,
          scale: 0.85,
          filter: 'brightness(0.5) blur(5px)',
          display: 'block',
          zIndex: 2
        });

        // Entrance animation
        gsap.to(nextImg, {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: 'brightness(0.95) blur(0px)',
          duration: 1.2,
          ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          delay: 0.2
        });

        // Ken Burns on new image
        gsap.to(nextImg, {
          scale: 1.08,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.2
        });

        currentIndex = nextIndex;
      }, 4500);

      slideIntervals.current[elementIndex] = carousel;
    });

    return () => {
      Object.values(slideIntervals.current).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  // Manual carousel controls - FIXED
  const goToImage = (elementIndex, imageIndex) => {
    const container = imageRefs.current[elementIndex];
    if (!container) return;

    const images = container.querySelectorAll('.carousel-image');
    if (images.length === 0) return;
    
    const currentIndex = activeIndices[elementIndex] || 0;
    if (currentIndex === imageIndex) return;

    const currentImg = images[currentIndex];
    const nextImg = images[imageIndex];

    // Kill existing animations
    gsap.killTweensOf(currentImg);
    gsap.killTweensOf(nextImg);

    // Exit current
    gsap.to(currentImg, {
      opacity: 0,
      x: -80,
      scale: 0.8,
      filter: 'brightness(0.3) blur(10px)',
      duration: 0.9,
      ease: 'power2.inOut',
      zIndex: 1
    });

    // Prepare next
    gsap.set(nextImg, {
      opacity: 0,
      x: 80,
      scale: 0.85,
      filter: 'brightness(0.5) blur(5px)',
      display: 'block',
      zIndex: 2
    });

    // Enter next
    gsap.to(nextImg, {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'brightness(0.95) blur(0px)',
      duration: 1.1,
      ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      delay: 0.15
    });

    setActiveIndices(prev => ({ ...prev, [elementIndex]: imageIndex }));
  };

  return (
    <section ref={ref} className="relative py-40 px-4 bg-gradient-to-b from-white via-white to-blue-50/30 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -left-1/2 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A3161' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-96 h-96 bg-india-red rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-india-blue rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-8xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-24 text-center"
        >
          <motion.span
            className="inline-block text-sm uppercase tracking-[0.3em] text-india-red font-bold border-b-2 border-india-red/40 pb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Diversity by Design
          </motion.span>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-india-blue">Celebrating the art, crafts,</span>
            <br />
            <span className="text-india-red">and designs from every corner of India.</span>
          </motion.h2>

          <motion.p
            className="text-gray-700 max-w-3xl mx-auto text-lg font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            A visual journey through India's rich cultural heritage, where tradition meets innovation and every image tells a story
          </motion.p>
        </motion.div>

        {/* Magazine-Style Cards with Image Carousels */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
          {culturalElements.map((item, index) => {
            const IconComponent = item.icon;
            const isLeft = index % 2 === 0;
            const currentImageIndex = activeIndices[index] || 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.15 }}
                className="group relative"
              >
                <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-stretch`}>
                  {/* Image Carousel Container */}
                  <motion.div
                    className="lg:w-1/2 relative overflow-hidden rounded-3xl shadow-2xl bg-gray-900"
                    style={{
                      y: isLeft ? leftImageY : rightImageY,
                      rotate: isLeft ? leftImageRotate : rightImageRotate,
                      scale: scale
                    }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Carousel Images */}
                    <div
                      ref={el => imageRefs.current[index] = el}
                      className="relative w-full h-96 overflow-hidden"
                    >
                      {item.images.map((image, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={image}
                          alt={`${item.title} - Image ${imgIdx + 1}`}
                          className="carousel-image absolute inset-0 w-full h-full object-cover"
                          style={{
                            opacity: imgIdx === 0 ? 1 : 0,
                            willChange: 'transform, opacity, filter',
                            zIndex: imgIdx === 0 ? 2 : 1
                          }}
                          loading="lazy"
                        />
                      ))}
                    </div>

                    {/* Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 z-10 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      style={{
                        background: `linear-gradient(135deg, transparent 0%, rgba(10, 49, 97, 0.1) 50%, rgba(212, 70, 78, 0.15) 100%)`
                      }}
                    />

                    {/* Top Info Badges */}
                    <motion.div
                      className="absolute top-6 left-6 z-20 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <span className="text-xs font-bold text-india-blue uppercase tracking-wide">{item.title}</span>
                      </div>
                      
                    </motion.div>

                    {/* Navigation Arrows */}
                    <motion.button
                      onClick={() => goToImage(index, (currentImageIndex - 1 + item.images.length) % item.images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition-all group/nav"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.5)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </motion.button>

                    <motion.button
                      onClick={() => goToImage(index, (currentImageIndex + 1) % item.images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition-all group/nav"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.5)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </motion.button>

                    {/* Image Indicator Dots */}
                    <motion.div
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {item.images.map((_, imgIdx) => (
                        <motion.button
                          key={imgIdx}
                          onClick={() => goToImage(index, imgIdx)}
                          className="rounded-full transition-all cursor-pointer"
                          style={{
                            backgroundColor: currentImageIndex === imgIdx ? item.accent : 'rgba(255,255,255,0.4)',
                            width: currentImageIndex === imgIdx ? '28px' : '10px',
                            height: '10px'
                          }}
                          animate={{
                            scale: currentImageIndex === imgIdx ? 1 : 0.9,
                            opacity: currentImageIndex === imgIdx ? 1 : 0.6
                          }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </motion.div>

                    {/* Accent Bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 z-30"
                      style={{ backgroundColor: item.accent }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    />
                  </motion.div>

                  {/* Content Container */}
                  <motion.div
                    className="lg:w-1/2 flex flex-col justify-center space-y-6"
                    initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: `${item.accent}15` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <IconComponent className="w-8 h-8" style={{ color: item.accent }} strokeWidth={1.5} />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold font-serif" style={{ color: item.accent }}>
                          {item.title}
                        </h3>
                        <div className="w-8 h-1 mt-2" style={{ backgroundColor: item.accent, opacity: 0.4 }} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-base font-light">
                      {item.description}
                    </p>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full bg-white border-2 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-3 transition-all group/btn"
                      style={{ borderColor: item.accent, color: item.accent }}
                      whileHover={{
                        backgroundColor: item.accent,
                        color: 'white',
                        scale: 1.02
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore {item.title}
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Page Number - Magazine Style */}
                <motion.div
                  className="absolute -top-6 -right-6 text-8xl font-black select-none pointer-events-none"
                  style={{ color: `${item.accent}08` }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Magazine Style Bottom Section */}
        <motion.div
          className="mt-32 pt-16 border-t-2 border-india-red/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p
            className="text-sm text-gray-500 uppercase tracking-[0.3em] font-semibold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            — Exploring India's Living Heritage —
          </motion.p>

          {/* Animated Dots */}
          <motion.div
            className="flex justify-center gap-3 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[0, 1, 2].map((idx) => (
              <motion.div
                key={idx}
                className="w-3 h-3 rounded-full"
                animate={{
                  backgroundColor: idx % 2 === 0 ? '#D4464E' : '#0A3161',
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: idx * 0.3
                }}
              />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              className="px-8 py-3 bg-india-red text-white font-bold rounded-full inline-flex items-center gap-2 hover:bg-india-blue transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More Cultures
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiversityDesign;