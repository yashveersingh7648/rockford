// src/pages/Home/HeritageFilm.jsx
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

const HeritageFilm = () => {
  const ref = useRef(null);
  const cardsRef = useRef([]);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animation 1: Scale and opacity for the main video container (NO ROTATION)
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.7, 0.95, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.6]);

  // Animation 2: Parallax for the decorative elements
  const decorativeY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const decorativeY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // India heritage data - 3 images per card with your image URLs
  const heritageHighlights = [
    {
      title: "Architecture",
      description: "Symbol of eternal love and architectural marvels",
      category: "Architecture",
      images: [
        "https://wallpaperaccess.com/full/5917499.jpg?w=800&h=600&fit=crop",
        "https://4.bp.blogspot.com/-IYPUecGZTZ0/UCcUA8SrOHI/AAAAAAAAB6w/wX1pZaPKiy8/s1600/Temple4.JPG",
        "https://image3.mouthshut.com/images/imagesp/925747858s.jpg?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Dance Forms",
      description: "Storytelling through graceful movement and rhythm",
      category: "Performing Arts",
      images: [
        "https://www.sattriyakristi.com/wp-content/uploads/2021/03/Krishnakshi-Kashyap-Sattriya-Dancer-Sattriyakristi-1-768x944.jpg",
        "https://www.poojn.in/wp-content/uploads/2025/05/The-8-Classical-Dances-of-India-An-Exploration.jpeg.jpg?w=800&h=600&fit=crop",
        "https://mediaim.expedia.com/localexpert/213788/532e75b6-04d7-4b01-9a0c-0a41fcd3094c.jpg?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Crafts & Artistry",
      description: "Ancient clay artistry and traditional crafts",
      category: "Traditional Crafts",
      images: [
        "https://img.rooftopapp.com/eyJidWNrZXQiOiJydC1iYWNrYm9uZS1pbWciLCJrZXkiOiJleHBlcmllbmNlL21lZGlhL0FsNldHOEdsUDEucG5nIn0=",
        "https://i.pinimg.com/originals/28/28/d2/2828d29358865d385ea01682c804f085.jpg?w=800&h=600&fit=crop",
        "https://deih43ym53wif.cloudfront.net/Shilpagram-Udaipur-pottery-shutterstock_1686481294.jpg_728332e45d.jpg?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Spiritual Heritage",
      description: "The spiritual heart of India's cultural legacy",
      category: "Heritage Sites",
      images: [
        "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=540,dpr=2/tour_img/d3c6b55cfb416039268a90b9f87cabcfe9c1ee2ec313cef62a986d05eeebb88e.jpg",
        "https://wallpapers.com/images/hd/winter-kedarnath-temple-4k-sz7w9nycqezm10ys.jpg?w=800&h=600&fit=crop",
        "https://cdn.magicdecor.in/com/2024/01/30181307/Kedarnath-Temple-in-Winter-Wallpaper-for-Wall.jpg?w=800&h=600&fit=crop"
      ]
    }
  ];

  // GSAP slideshow with smooth 2-second transitions and card rotation
  useEffect(() => {
    const premiumAnimations = [
      'morph',
      'cinematic',
      'reveal',
      'dimensional'
    ];

    cardsRef.current.forEach((card, cardIndex) => {
      if (!card) return;
      
      const images = card.querySelectorAll('.card-image');
      if (images.length === 0) return;

      let currentIndex = 0;
      const animationType = premiumAnimations[cardIndex % premiumAnimations.length];

      const slideshow = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        const currentImg = images[currentIndex];
        const nextImg = images[nextIndex];

        // Rotate the card container clockwise
        gsap.to(card, {
          rotation: 2,
          duration: 1.0,
          ease: 'power1.inOut',
          onComplete: () => {
            gsap.to(card, {
              rotation: 0,
              duration: 1.0,
              ease: 'power1.inOut'
            });
          }
        });

        // Premium smooth 2-second transitions
        switch(animationType) {
          case 'morph':
            gsap.to(currentImg, {
              opacity: 0,
              scale: 0.85,
              rotation: 3,
              filter: 'blur(6px) brightness(1.2)',
              duration: 1.0,
              ease: 'power2.inOut'
            });
            gsap.set(nextImg, { 
              scale: 1.15, 
              opacity: 0, 
              rotation: -3,
              filter: 'blur(6px) brightness(0.9)'
            });
            gsap.to(nextImg, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              filter: 'blur(0px) brightness(1)',
              duration: 1.2,
              ease: 'power2.out',
              delay: 0.1
            });
            break;

          case 'cinematic':
            gsap.to(currentImg, {
              opacity: 0,
              x: -60,
              y: 30,
              scale: 0.95,
              filter: 'brightness(0.6)',
              duration: 1.0,
              ease: 'power1.inOut'
            });
            gsap.set(nextImg, { 
              x: 60, 
              y: -30, 
              opacity: 0,
              scale: 1.05,
              filter: 'brightness(0.4)'
            });
            gsap.to(nextImg, {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: 'brightness(1)',
              duration: 1.2,
              ease: 'power2.out',
              delay: 0.1
            });
            break;

          case 'reveal':
            gsap.to(currentImg, {
              opacity: 0,
              scale: 1.05,
              filter: 'brightness(1.2) blur(4px)',
              duration: 1.0,
              ease: 'power1.in'
            });
            gsap.set(nextImg, { 
              scale: 0.8,
              opacity: 0,
              filter: 'brightness(0.8) blur(8px)'
            });
            gsap.to(nextImg, {
              opacity: 1,
              scale: 1,
              filter: 'brightness(1) blur(0px)',
              duration: 1.2,
              ease: 'power2.out',
              delay: 0.1
            });
            break;

          case 'dimensional':
            gsap.to(currentImg, {
              opacity: 0,
              scale: 0.8,
              rotation: 8,
              filter: 'blur(4px) brightness(0.7)',
              duration: 1.0,
              ease: 'power1.inOut'
            });
            gsap.set(nextImg, { 
              scale: 0.7,
              opacity: 0,
              rotation: -8,
              filter: 'blur(8px) brightness(0.5)'
            });
            gsap.to(nextImg, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              filter: 'blur(0px) brightness(1)',
              duration: 1.2,
              ease: 'power2.out',
              delay: 0.1
            });
            break;

          default:
            gsap.to(currentImg, {
              opacity: 0,
              scale: 0.97,
              duration: 1.0,
              ease: 'power1.inOut'
            });
            gsap.to(nextImg, {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: 'power2.out',
              delay: 0.1
            });
        }

        currentIndex = nextIndex;
      }, 3000);

      // Cleanup
      return () => clearInterval(slideshow);
    });
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-4 bg-india-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-india-red/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Decorative Background Elements with Parallax */}
      <motion.div 
        style={{ y: decorativeY }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-india-red/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: decorativeY2 }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
      />

      <div className="max-w-8xl mx-auto relative">
        {/* Section Header with Magazine-style Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16"
        >
          <motion.span 
            className="text-sm uppercase tracking-wider text-india-red font-semibold flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-6 h-px bg-india-red"></span>
            Heritage in Motion
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mt-2 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            India's stories,<br />
            <span className="text-india-red">brought to life.</span>
          </motion.h2>
          
          <motion.p
            className="text-white/60 mt-4 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            From majestic architecture to rhythmic dance forms, 
            explore India's rich cultural tapestry through visual storytelling.
          </motion.p>
        </motion.div>

        {/* Magazine-style Grid with Cards - Rotating Clockwise on Desktop */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {heritageHighlights.map((item, index) => (
            <motion.div
              key={index}
              ref={el => cardsRef.current[index] = el}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transformOrigin: 'center center'
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* 3 Images with Premium Smooth Slideshow */}
                {item.images.map((img, imgIndex) => (
                  <img 
                    key={imgIndex}
                    src={img} 
                    alt={`${item.title} - ${imgIndex + 1}`}
                    className="card-image absolute inset-0 w-full h-full object-cover"
                    style={{ 
                      opacity: imgIndex === 0 ? 1 : 0,
                      willChange: 'transform, opacity, filter'
                    }}
                  />
                ))}

                {/* Image Counter Badge with Animation */}
                <motion.div 
                  className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.images.length} photos
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs text-india-red font-semibold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Main Video Container - CLEAN, NO OVERLAYS */}
        <motion.div
          style={{ scale, opacity }}
          className="aspect-video bg-gradient-to-br from-india-blue to-india-red rounded-3xl overflow-hidden relative shadow-2xl"
        >
          {/* YouTube Video Embed with Autoplay */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/AsDhoLMFiRQ?autoplay=1&mute=1&loop=1&playlist=AsDhoLMFiRQ&controls=0&rel=0&modestbranding=1&showinfo=0"
            title="The Spirit of India"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
          
          {/* Decorative overlay with parallax - always visible */}
          <motion.div 
            style={{ y: decorativeY }}
            className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/30 to-transparent pointer-events-none"
          />
        </motion.div>

        {/* Decorative Magazine-style Elements */}
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
          className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden lg:block"
        >
          <div className="w-px h-32 bg-white/20"></div>
          <span className="text-xs uppercase tracking-widest text-white/30 font-light writing-vertical">Heritage</span>
        </motion.div>

        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden lg:block"
        >
          <div className="w-px h-32 bg-white/20"></div>
          <span className="text-xs uppercase tracking-widest text-white/30 font-light writing-vertical">Culture</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeritageFilm;