import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IncredibleStates = () => {
  const ref = useRef(null);
  const imageRefs = useRef([]);
  const slideIntervals = useRef([]);
  const textRefs = useRef([]);
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

  const headerY = useTransform(smoothProgress, [0, 0.5, 1], [80, 0, -80]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const statesData = [
    {
      name: "Uttar Pradesh",
      highlight: "Banaras & Agra",
      description: "The spiritual heart of India. Home to the ancient city of Banaras. Experience the Ganga Aarti and centuries-old temples.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6daImREcNu9kpsLFbm0Fjdf5W3a1yK85ZViL-uTkYPdmYPNTKyL4_7qnp&s=10",
        "https://4.bp.blogspot.com/-IYPUecGZTZ0/UCcUA8SrOHI/AAAAAAAAB6w/wX1pZaPKiy8/s1600/Temple4.JPG",
        "https://image3.mouthshut.com/images/imagesp/925747858s.jpg"
      ],
      culture: "Ganga Aarti • Kathak • Mughal Architecture",
      cuisine: "Awadhi Biryani • Kebabs • Petha",
      accent: "#D4464E",
      accentLight: "#D4464E20"
    },
    {
      name: "Rajasthan",
      highlight: "Jaipur & Jodhpur",
      description: "The land of kings. Vibrant forts, palaces, and the vast Thar Desert. Famous for its rich textiles, jewelry, and folk music.",
      images: [
        "https://discoveryprimetours.com/wp-content/uploads/2026/03/Shopping-for-Handicrafts-and-Traditional-Textiles.jpg",
        "https://png.pngtree.com/thumb_back/fh260/background/20241026/pngtree-camel-in-the-desert-at-sunset-image_16421177.jpg?w=800&h=600&fit=crop",
        "https://c8.alamy.com/comp/ET0W7B/woman-wearing-rajasthani-traditional-jewellery-and-costume-rajasthan-ET0W7B.jpg?w=800&h=600&fit=crop"
      ],
      culture: "Folk Music • Puppetry • Ghoomar Dance",
      cuisine: "Dal Baati Churma • Laal Maas",
      accent: "#4169E1",
      accentLight: "#4169E120"
    },
    {
      name: "Kerala",
      highlight: "God's Own Country",
      description: "Backwaters, lush greenery, and serene beaches. Known for its Ayurveda, Kathakali dance, and distinct Malayali culture.",
      images: [
        "https://mediaim.expedia.com/localexpert/213788/532e75b6-04d7-4b01-9a0c-0a41fcd3094c.jpg",
        "https://indiatravel.app/wp-content/uploads/2024/04/idukki-arch-dam-1024x585.jpg?w=800&h=600&fit=crop",
        "https://images.slurrp.com/prodfoodTrail/e0ijbouvtmg.webp?w=800&h=600&fit=crop"
      ],
      culture: "Kathakali • Ayurveda • Theyyam",
      cuisine: "Sadya • Appam with Stew",
      accent: "#228B22",
      accentLight: "#228B2220"
    },
    {
      name: "Punjab",
      highlight: "Land of Five Rivers",
      description: "Vibrant and lively, known for its Bhangra music, delicious cuisine, and the Golden Temple in Amritsar. A land of warriors and farmers.",
      images: [
        "https://www.caleidoscope.in/wp-content/uploads/2022/02/Architecture-of-Punjab-1068x528.jpg",
        "https://www.allaboutsikhs.com/wp-content/uploads/2021/02/Punjabi_meals.jpg?w=800&h=600&fit=crop",
        "https://cdn.britannica.com/04/60404-050-77D978DF/Bhangra-folk-dance-region-Punjab-India-Pakistan.jpg?w=800&h=600&fit=crop"
      ],
      culture: "Bhangra • Giddha • Sikh Heritage",
      cuisine: "Butter Chicken • Sarson da Saag",
      accent: "#F4A460",
      accentLight: "#F4A46020"
    },
    {
      name: "Gujarat",
      highlight: "Rann of Kutch & Dwarka",
      description: "A land of vibrant festivals, white desert, and ancient temples. Known for its rich textiles, handicrafts, and the legendary Somnath temple.",
      images: [
        "https://i.pinimg.com/originals/f5/0b/cf/f50bcfc70a0efc6fc0346ca8e5fe6e36.jpg",
        "https://dynamic.tourtravelworld.com/blog_images/14-gujarati-dishes-that-you-must-try-when-you-visit-gujarat-20170927121204.jpg?w=800&h=600&fit=crop",
        "https://theliveahmedabad.com/wp-content/uploads/2022/08/873729-garba-2.jpg?w=800&h=600&fit=crop"
      ],
      culture: "Garba • Dandiya • Kutchi Crafts",
      cuisine: "Dhokla • Khandvi • Undhiyu",
      accent: "#E86B3A",
      accentLight: "#E86B3A20"
    },
    {
      name: "Tamil Nadu",
      highlight: "Tanjore & Chennai",
      description: "The land of magnificent temples, classical dance forms, and rich Dravidian culture. Home to the famous Brihadeeswarar Temple and Bharatanatyam.",
      images: [
        "https://3.bp.blogspot.com/-0QpZZOggVp0/VK1tLTg0PxI/AAAAAAAAGQA/wpt8qGZBmTI/s1600/Thanjavur%2BBrihadeeswarar%2BTemple%2BView%2Bfrom%2BBack1.jpg",
        "https://www.hoteldekho.com/blog/wp-content/uploads/2021/12/CHENNAI-.jpg?w=800&h=600&fit=crop",
        "https://th.bing.com/th/id/OIP.gcyjmWmw8fT9F-Fj3PDaBwHaE7?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3?w=800&h=600&fit=crop"
      ],
      culture: "Bharatanatyam • Temple Architecture",
      cuisine: "Dosa • Idli • Chettinad Chicken",
      accent: "#9B59B6",
      accentLight: "#9B59B620"
    },
    {
      name: "Karnataka",
      highlight: "Mysore Palace & Hampi",
      description: "A state of royal heritage, ancient ruins, and modern tech cities. Home to the iconic Mysore Palace and the ruins of Vijayanagara Empire.",
      images: [
        "https://www.oyorooms.com/blog/wp-content/uploads/2015/11/shutterstock_276471710.jpg",
        "https://lokmarg.com/wp-content/uploads/2023/03/ISRO-Rocket-Launch.jpg?w=800&h=600&fit=crop",
        "https://holidaybays.com/wp-content/uploads/2015/09/mysore-palace-night-places-to-visit-in-karnataka.jpg?w=800&h=600&fit=crop"
      ],
      culture: "Yakshagana • Carnatic Music",
      cuisine: "Bisi Bele Bath • Mysore Pak",
      accent: "#2980B9",
      accentLight: "#2980B920"
    },
    {
      name: "West Bengal",
      highlight: "Kolkata & Darjeeling",
      description: "The cultural capital of India. Known for its literature, art, cinema, and the famous Durga Puja festival. Home to the Himalayan foothills and tea gardens.",
      images: [
        "https://image3.mouthshut.com/images/imagesp/925754603s.jpg",
        "https://thetempleguru.com/wp-content/uploads/2023/04/kalighat-kali-temple-shaktipeeth-6.jpg?w=800&h=600&fit=crop",
        "https://wallpapercave.com/wp/wp8800691.jpg?w=800&h=600&fit=crop"
      ],
      culture: "Durga Puja • Rabindra Sangeet",
      cuisine: "Rasgulla • Macher Jhol",
      accent: "#D4A017",
      accentLight: "#D4A01720"
    },
    {
      name: "Maharashtra",
      highlight: "Mumbai & Ajanta Caves",
      description: "The land of Bollywood, ancient caves, and rich history. Home to the vibrant city of Mumbai, the Ajanta-Ellora caves, and the famous Ganesh Chaturthi.",
      images: [
        "https://www.noblehousetours.com/wp-content/uploads/2025/04/How-To-Visit-The-Ajanta-And-Ellora-Caves-From-Aurangabad-%E2%80%93-Complete-Guide-1.jpg",
        "https://images.news18.com/ibnlive/uploads/2022/08/ganesh-chaturthi-2022-rituals.jpg?w=800&h=600&fit=crop",
        "https://im.whatshot.in/img/2021/Mar/pjimage-2021-03-04t104623528-1614835035.jpg?w=800&h=600&fit=crop"
      ],
      culture: "Lavani • Ganesh Chaturthi • Warli Art",
      cuisine: "Vada Pav • Puran Poli",
      accent: "#DC143C",
      accentLight: "#DC143C20"
    }
  ];

  // Enhanced GSAP text animations
  useEffect(() => {
    textRefs.current.forEach((textEl, index) => {
      if (!textEl) return;

      const text = textEl.textContent;
      textEl.innerHTML = '';
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px) rotateX(-90deg)';
        span.style.transformOrigin = 'center center';
        span.style.color = '#4B5563';
        span.style.transformStyle = 'preserve-3d';
        textEl.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.4,
          delay: 0.1 + i * 0.025 + (index * 0.05),
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: textEl,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    });
  }, []);

  // Enhanced GSAP image slideshow with Ken Burns effect
  useEffect(() => {
    imageRefs.current.forEach((container, groupIndex) => {
      if (!container) return;
      
      const images = container.querySelectorAll('.state-image');
      if (images.length === 0) return;

      let currentIndex = 0;
      const isLeft = groupIndex % 2 === 0;
      const state = statesData[groupIndex];

      // Initialize all images
      images.forEach((img, idx) => {
        gsap.set(img, {
          opacity: idx === 0 ? 1 : 0,
          x: idx === 0 ? 0 : (isLeft ? 120 : -120),
          scale: idx === 0 ? 1 : 0.85,
          display: 'block',
          filter: 'brightness(0.95)',
          transformOrigin: idx % 2 === 0 ? 'center right' : 'center left'
        });

        // Subtle Ken Burns effect on active image
        if (idx === 0) {
          gsap.to(img, {
            scale: 1.05,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }
      });

      if (slideIntervals.current[groupIndex]) {
        clearInterval(slideIntervals.current[groupIndex]);
      }

      const slideshow = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        const currentImg = images[currentIndex];
        const nextImg = images[nextIndex];

        // Update active index for indicators
        setActiveIndices(prev => ({ ...prev, [groupIndex]: nextIndex }));

        // Enhanced exit animation for current image
        gsap.to(currentImg, {
          opacity: 0,
          x: isLeft ? -120 : 120,
          scale: 0.75,
          filter: 'brightness(0.5) blur(8px)',
          duration: 0.9,
          ease: 'power2.inOut'
        });

        // Prepare next image with staggered entrance
        gsap.set(nextImg, {
          opacity: 0,
          x: isLeft ? 120 : -120,
          scale: 0.8,
          filter: 'brightness(0.7)',
          display: 'block'
        });

        // Animated entrance with smooth arrival
        gsap.to(nextImg, {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: 'brightness(0.95)',
          duration: 1.1,
          ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          delay: 0.15
        });

        // Ken Burns effect on new active image
        gsap.to(nextImg, {
          scale: 1.05,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.15
        });

        currentIndex = nextIndex;
      }, 4000);

      slideIntervals.current[groupIndex] = slideshow;
    });

    return () => {
      slideIntervals.current.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  const cardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 40,
      rotateY: index % 2 === 0 ? -15 : 15
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.9,
        delay: Math.min(index * 0.12, 0.5),
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  });

  const imageContainerVariants = {
    hidden: { scale: 0.92, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section ref={ref} className="relative py-5 px-4 bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -left-1/2 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A3161' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-8xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-red-50 px-6 py-3 rounded-full border border-blue-200/30 mb-6 backdrop-blur-sm"
          >
            <Compass className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="text-blue-600 text-xs tracking-[0.3em] uppercase font-semibold">
              A Tapestry of Culture
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Incredible States
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              of India
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
          >
            Embark on a journey through India's most enchanting destinations, where ancient heritage meets vibrant culture
          </motion.p>
        </motion.div>

        {/* States Grid */}
        <div className="space-y-20">
          {statesData.map((state, index) => (
            <motion.div
              key={state.name}
              custom={index}
              variants={cardVariants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
            >
              {/* Image Container with Enhanced Animation */}
              <motion.div 
                className="lg:w-1/2 w-full relative group"
                variants={imageContainerVariants}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-1xl shadow-2xl bg-gradient-to-br from-blue-900 to-red-900 backdrop-blur" style={{ height: '450px' }}>
                  {/* Image Container */}
                  <div 
                    ref={el => imageRefs.current[index] = el}
                    className="absolute inset-0 w-full h-full"
                  >
                    {state.images.map((img, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={img} 
                        alt={`${state.name} - ${imgIndex + 1}`}
                        className="state-image absolute inset-0 w-full h-full object-cover"
                        style={{ 
                          opacity: imgIndex === 0 ? 1 : 0,
                          willChange: 'transform, opacity, filter'
                        }}
                        loading="lazy"
                      />
                    ))}
                  </div>
                  
                  {/* Enhanced Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 z-10 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                      background: `linear-gradient(135deg, 
                        transparent 0%, 
                        rgba(10, 49, 97, 0.15) 40%,
                        rgba(212, 70, 78, 0.2) 100%)`
                    }}
                  />

                  {/* Bottom Info */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black via-black/60 to-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-white/80" />
                      <span className="text-white/60 text-xs tracking-widest uppercase font-light">
                        Featured State
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">{state.name}</h3>
                  </motion.div>

                  

                  {/* Top Left Animation Indicator */}
                  <motion.div 
                    className="absolute top-6 left-6 z-20 backdrop-blur-md bg-black/40 px-4 py-2 rounded-full border border-white/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <motion.span 
                      className="text-white/70 text-xs font-medium tracking-wider inline-flex items-center gap-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {index % 2 === 0 ? '← Auto →' : '→ Auto ←'}
                    </motion.span>
                  </motion.div>

                  {/* Animated Accent Bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-full z-30"
                    style={{ backgroundColor: state.accent }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                  />

                  {/* Image Indicator Dots */}
                  <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                    {state.images.map((_, imgIdx) => (
                      <motion.div
                        key={imgIdx}
                        className="h-2 rounded-full transition-all"
                        style={{
                          backgroundColor: state.accent,
                          width: (activeIndices[index] ?? 0) === imgIdx ? '24px' : '8px',
                          opacity: (activeIndices[index] ?? 0) === imgIdx ? 1 : 0.4
                        }}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Content Container */}
              <motion.div 
                className="lg:w-1/2 w-full space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Highlight Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2"
                  style={{ 
                    borderColor: `${state.accent}40`,
                    backgroundColor: state.accentLight
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span 
                    className="text-sm font-bold tracking-wide"
                    style={{ color: state.accent }}
                    animate={{ opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {state.highlight}
                  </motion.span>
                </motion.div>

                {/* Animated Description */}
                <p 
                  ref={el => textRefs.current[index] = el}
                  className="text-gray-700 leading-relaxed text-lg font-light tracking-wide"
                >
                  {state.description}
                </p>

                {/* Culture & Cuisine Tags */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <motion.div 
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-full border border-blue-200/50 backdrop-blur-sm hover:border-blue-300 transition-all"
                    whileHover={{ scale: 1.05, translateY: -2 }}
                  >
                    <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Culture:</span>
                    <span className="text-sm font-semibold text-blue-900 tracking-wide">{state.culture}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-50 to-red-100/50 rounded-full border border-red-200/50 backdrop-blur-sm hover:border-red-300 transition-all"
                    whileHover={{ scale: 1.05, translateY: -2 }}
                  >
                    <span className="text-xs font-semibold text-red-700 tracking-wide uppercase">Cuisine:</span>
                    <span className="text-sm font-semibold text-red-900 tracking-wide">{state.cuisine}</span>
                  </motion.div>
                </div>

                {/* Explore Button */}
                <motion.button 
                  className="group inline-flex items-center gap-3 font-bold text-lg tracking-wide transition-all mt-6"
                  style={{ color: state.accent }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore {state.name}
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mt-32"
        >
          <motion.button
            className="group px-12 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg shadow-2xl border border-red-500/50 inline-flex items-center gap-4 tracking-wide uppercase overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
            />
            <span className="relative z-10">Discover All States</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default IncredibleStates;