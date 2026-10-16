import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   WORK DATA
========================================================= */

const WORKS = [
  {
    number: "01",
    title: "Product Branding",
    subtitle:
      "Roakfield will define your product’s positioning, identity and value proposition to help it stand out in a competitive market.",
    tags: ["Identity", "Positioning", "Value Proposition"],
    category: "Product Branding",

    animation: "fadeZoom",
    interval: 1800,
    startDelay: 0,

    image:
      "public/Images//Branding - 1.png",

    accentImage:
      "public/Images//Branding - 2.png",

    images: [
      "public/Images//Branding - 2.png",
      "public/Images//Branding - 3.png",
      "public/Images//Branding - 4.png",

      "public/Images//Branding - 5.png",
      "public/Images//Branding - 6.png",
      "public/Images//Branding - 7.png",
    ],

    outcome:
      "Brand awareness · Content system · Demand generation",
  },

  {
    number: "02",
    title: "Personal Branding",
    subtitle:
      "We position you as a thought leader around your expertise, personality and vision to establish a memorable professional identity.",
    tags: ["Personal equity", "Recognition", "Niche"],
    category: "PERSONAL BRANDING",

    animation: "slideHorizontal",
    interval: 2150,
    startDelay: 600,

    image:
      "Images/Branding - 8.png",

    accentImage:
     "Images/Branding - 9.png",

    images: [
         "Images/Branding - 10.png",
 "Images/Branding - 11.png",
      "Images/Branding - 12.png",

          "Images/Branding - 13.png",
 "Images/Branding - 14.png",
     
    ],

    outcome:
      "Brand positioning · Brand promise · Personal authority",
  },

  {
    number: "03",
    title: "Social Currency",
    subtitle:
      "We will create distinctive brand experiences and creatives that encourage people to talk about, share and recommend your brand.",
    tags: ["Advocacy", "Cult", "Appeal", "Lifestyle"],
    category: "Social Currency",

    animation: "slideVertical",
    interval: 1950,
    startDelay: 1050,

    image:
      "Images/socil.avif",

    accentImage:
      "Images/socil1.avif",

    images: [
      "Images/socil2.avif",
      "Images/socil3.jpg",
      "Images/socil4.jpg",
      "Images/socil5.jpg",
      "Images/socil6.jpg",
    ],

    outcome:
      "Brand identity · Brand purpose · Brand equity",
  },

  {
    number: "04",
    title: "Content strategy",
    subtitle:
      "We craft strategic content roadmaps, produce premium AI-powered videos and studio-led storytelling, and transform audience engagement into brand awareness, market influence, and qualified leads.",
    tags: ["Storytelling", "Creation", "Distribution"],
    category: "Content strategy",

    animation: "clipReveal",
    interval: 2400,
    startDelay: 1500,

    image:
      "Images/CS - 2.png",

    accentImage:
      "Images/CS - 3.png",

    images: [
      "Images/CS - 4.png",
      "Images/CS - 5.png",
      "Images/CS - 6.png",
      "Images/CS - 7.png",
      "Images/CS - 8.png",
      "Images/CS - 9.png",

       "Images/CS - 10.png",
      "Images/CS - 11.png",
      "Images/CS - 12.png",
      "Images/CS - 13.png",
      "Images/CS - 14.png",

    ],

    outcome:
      "Market entry · Positioning · Sales enablement",
  },

  {
    number: "05",
    title: "SOP",
    subtitle:
      "We build structured workflows, standardise business operations, and implement performance-driven systems that strengthen accountability, ensure consistency, and enable scalable growth.",
    tags: ["Standardisation", "Workflow management", "Scalability"],
    category: "SOP",

    animation: "rotateScale",
    interval: 2050,
    startDelay: 850,

    image:
      "Images/sop1.jpg",

    accentImage:
      "Images/sop2.jpg",

    images: [
      "Images/sop3.jpg",
      "Images/sop4.jpg",
      "Images/sop5.jpg",
      "Images/sop6.jpg",
      // "Images/sop5.jpg",
    ],

    outcome:
      "Brand relevance · Community · Influence · Conversation",
  },



   {
    number: "06",
    title: "Customer Experience",
    subtitle:
      "We optimise productivity, systems and processes, free leadership to focus on business growth, empower employee engagement and retention, and deliver seamless customer experiences that build trust, loyalty, referrals, and long-term value.",
    tags: ["Journey", "Engagement", "Loyalty"],
    category: "Customer Experience",

    animation: "blurFade",
    interval: 2200,
    startDelay: 300,

    image:
     "Images/CustomerExperience1.jpg",

    accentImage:
      "Images/CustomerExperience2.jpg",

    images: [
      "Images/CustomerExperience3.jpg",
      "Images/CustomerExperience4.jpg",
      "Images/CustomerExperience5.jpg",
      "Images/CustomerExperience6.jpg",
      "Images/CustomerExperience7.jpg",
    ],

    outcome:
      "Clarity · Direction · Competitive edge",
  },

  {
    number: "07",
    title: "Go To Market Strategy",
    subtitle:
      "We craft data-driven go-to-market strategies that define your ideal customer profile (ICP), expand market reach, sharpen positioning, align pricing and channels, and accelerate customer engagement, acquisition, retention, and scalable growth.",
    tags: ["Glocal", "Media vehicles", "Expansion"],
    category: "Go To Market Strategy",

    animation: "zoomOut",
    interval: 2000,
    startDelay: 750,

    image:
      "Images/GTM - 1.png",

    accentImage:
      "Images/GTM - 2.png",

    images: [
      "Images/GTM - 3.png",
      "Images/GTM - 4.png",
      "Images/GTM - 5.png",
      "Images/GTM - 6.png",
      "Images/GTM - 7.png",
      "Images/GTM - 8.png",

       "Images/GTM - 9.png",
      "Images/GTM - 10.png",
      "Images/GTM - 11.png",
      "Images/GTM - 12.png",
    ],

    outcome:
      "Qualified leads · Lower acquisition cost · ROI",
  },

  {
    number: "08",
    title: "Talent Management",
    subtitle:
      "We craft role-specific JDs, hire the right talent, and drive performance through structured onboarding, continuous development, KPI-led management and implement Reward & Recognition programmes for employee satisfaction, maximise productivity and accelerate growth.",
    tags: ["Productivity optimization", "Training & Development", "Work culture"],
    category: "Talent Management",

    animation: "flipY",
    interval: 2300,
    startDelay: 1200,

    image:
      "Images/TalentManagement1.jpg",

    accentImage:
      "Images/TalentManagement2.jpg",

    images: [
      "Images/TalentManagement3.jpg",
      "Images/TalentManagement4.jpg",
      "Images/TalentManagement5.jpg",
     
    ],

    outcome:
      "Better engagement · Higher conversions · Brand presence",
  },

  {
    number: "09",
    title: "Performance Marketing",
    subtitle:
      "We deliver integrated digital, ATL and BTL campaigns across social media, websites and AI-powered platforms, build scalable lead-generation engines, optimise marketing spend and ROAS, and strengthen cost-efficient customer acquisition and sustained brand visibility among target audiences.",
    tags: ["Engagement", "Advocacy", "Loyalty"],
    category: "Performance Marketing",

    animation: "diagonalWipe",
    interval: 2500,
    startDelay: 1700,

    image:
       "Images/PerformanceMarketing1.jpg",

    accentImage:
      "Images/PerformanceMarketing2.jpg",

    images: [
      "Images/PerformanceMarketing3.jpg",
      "Images/PerformanceMarketing4.jpg",
      "Images/PerformanceMarketing5.jpg",
      "Images/PerformanceMarketing6.jpg",
    ],

    outcome:
      "Community · Advocacy · Long-term loyalty",
  }
];

/* =========================================================
   REVEAL
========================================================= */

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* =========================================================
   WORK IMAGE SLIDER

   Every work gets its own:
   - animation
   - timing
   - start delay
========================================================= */

function WorkImageSlider({
  images,
  category,
  number,
  animation = "fadeZoom",
  interval = 2000,
  startDelay = 0,
}) {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const progressRef = useRef(null);

  const currentIndex = useRef(0);
  const intervalRef = useRef(null);
  const transitionRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const image = imageRef.current;
    const progress = progressRef.current;

    if (!wrapper || !image || !images?.length) return;

    let mounted = true;

    const ctx = gsap.context(() => {
      /* =====================================================
         INITIAL IMAGE
      ===================================================== */

      image.src = images[0];

      gsap.set(image, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
      });

      /* =====================================================
         PROGRESS BAR
      ===================================================== */

      const startProgress = () => {
        if (!progress) return;

        gsap.killTweensOf(progress);

        gsap.fromTo(
          progress,
          {
            width: "0%",
          },
          {
            width: "100%",
            duration: interval / 1000,
            ease: "none",
          }
        );
      };

      /* =====================================================
         IMAGE TRANSITION
      ===================================================== */

      const animateImage = (nextImage) => {
        if (!mounted) return;

        if (transitionRef.current) {
          transitionRef.current.kill();
        }

        const tl = gsap.timeline();

        tl.timeScale(1.8);
        
        transitionRef.current = tl;

        /* ===================================================
           01 — FADE + ZOOM
        =================================================== */

        if (animation === "fadeZoom") {
          tl.to(image, {
            opacity: 0,
            scale: 1.08,
            duration: 0.38,
            ease: "power2.inOut",
          })
            .set(image, {
              attr: {
                src: nextImage,
              },
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              scale: 0.96,
              opacity: 0,
              clipPath: "inset(0% 0% 0% 0%)",
            })
            .to(image, {
              opacity: 1,
              scale: 1,
              duration: 0.75,
              ease: "power3.out",
            });
        }

        /* ===================================================
           02 — HORIZONTAL SLIDE
        =================================================== */

        else if (animation === "slideHorizontal") {
          tl.to(image, {
            xPercent: -100,
            duration: 0.62,
            ease: "power4.inOut",
          })
            .set(image, {
              attr: {
                src: nextImage,
              },
              xPercent: 100,
              yPercent: 0,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0%)",
            })
            .to(image, {
              xPercent: 0,
              duration: 0.72,
              ease: "power4.out",
            });
        }

        /* ===================================================
           03 — VERTICAL SLIDE
        =================================================== */

        else if (animation === "slideVertical") {
          tl.to(image, {
            yPercent: -100,
            duration: 0.62,
            ease: "power4.inOut",
          })
            .set(image, {
              attr: {
                src: nextImage,
              },
              yPercent: 100,
              xPercent: 0,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0%)",
            })
            .to(image, {
              yPercent: 0,
              duration: 0.72,
              ease: "power4.out",
            });
        }

        /* ===================================================
           04 — CLIP REVEAL

           More dramatic specifically for GTM
        =================================================== */

        else if (animation === "clipReveal") {
          tl.to(image, {
            clipPath: "inset(0% 100% 0% 0%)",
            scale: 1.07,
            duration: 0.7,
            ease: "power4.inOut",
          })
            .set(image, {
              attr: {
                src: nextImage,
              },
              clipPath: "inset(0% 0% 0% 100%)",
              scale: 1.07,
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              opacity: 1,
            })
            .to(image, {
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              duration: 0.9,
              ease: "power4.out",
            });
        }

        /* ===================================================
           05 — ROTATE + SCALE
        =================================================== */

        else if (animation === "rotateScale") {
          tl.to(image, {
            opacity: 0,
            scale: 1.13,
            rotation: 2.8,
            duration: 0.42,
            ease: "power2.inOut",
          })
            .set(image, {
              attr: {
                src: nextImage,
              },
              opacity: 0,
              scale: 0.91,
              rotation: -2.8,
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              clipPath: "inset(0% 0% 0% 0%)",
            })
            .to(image, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.82,
              ease: "power3.out",
            });
        }

        /* ===================================================
           FALLBACK
        =================================================== */

        else {
          tl.to(image, {
            opacity: 0,
            duration: 0.3,
          })
            .set(image, {
              attr: {
                src: nextImage,
              },
            })
            .to(image, {
              opacity: 1,
              duration: 0.5,
            });
        }
      };

      /* =====================================================
         CHANGE IMAGE

         IMPORTANT:
         We no longer wait forever for image.onload.
         If image fails, slider still continues.
      ===================================================== */

      const changeImage = () => {
        if (!mounted) return;

        const nextIndex =
          (currentIndex.current + 1) % images.length;

        const nextImage = images[nextIndex];

        currentIndex.current = nextIndex;

        animateImage(nextImage);

        startProgress();
      };

      /* =====================================================
         PRELOAD ALL IMAGES
      ===================================================== */

      images.forEach((src) => {
        const preload = new Image();

        preload.src = src;
      });

      /* =====================================================
         START AFTER INDIVIDUAL DELAY
      ===================================================== */

      const startTimer = setTimeout(() => {
        if (!mounted) return;

        startProgress();

        intervalRef.current = setInterval(
          changeImage,
          interval
        );
      }, startDelay);

      /* =====================================================
         MOUSE PARALLAX
      ===================================================== */

      const handleMouseMove = (event) => {
        const rect = wrapper.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) / rect.width - 0.5;

        const y =
          (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(image, {
          x: x * 10,
          y: y * 7,
          duration: 0.7,
          ease: "power3.out",
          overwrite: false,
        });
      };

      /* =====================================================
         MOUSE ENTER
      ===================================================== */

      const handleMouseEnter = () => {
        gsap.to(image, {
          scale: 1.025,
          duration: 0.7,
          ease: "power3.out",
          overwrite: false,
        });
      };

      /* =====================================================
         MOUSE LEAVE
      ===================================================== */

      const handleMouseLeave = () => {
        gsap.to(image, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          overwrite: false,
        });
      };

      wrapper.addEventListener(
        "mousemove",
        handleMouseMove
      );

      wrapper.addEventListener(
        "mouseenter",
        handleMouseEnter
      );

      wrapper.addEventListener(
        "mouseleave",
        handleMouseLeave
      );

      /* =====================================================
         CLEANUP
      ===================================================== */

      return () => {
        mounted = false;

        clearTimeout(startTimer);

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        if (transitionRef.current) {
          transitionRef.current.kill();
        }

        wrapper.removeEventListener(
          "mousemove",
          handleMouseMove
        );

        wrapper.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );

        wrapper.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );

        gsap.killTweensOf(image);
        gsap.killTweensOf(progress);
      };
    }, wrapper);

    return () => {
      mounted = false;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      ctx.revert();
    };
  }, [
    images,
    animation,
    interval,
    startDelay,
  ]);

  return (
    <div
      ref={wrapperRef}
      className="
        group
        relative
        aspect-[4/3]
        w-full
        overflow-hidden
        bg-[#01295C]
      "
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <img
        ref={imageRef}
        src={images[0]}
        alt={category}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          will-change-transform
        "
        draggable="false"
      />

      {/* =================================================
          SUBTLE OVERLAY
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#01295C]/[0.06]
          transition-opacity
          duration-500
          group-hover:bg-transparent
        "
      />

      {/* =================================================
          CATEGORY
      ================================================= */}

      <div
        className="
          absolute
          left-5
          top-5
          z-10
          text-[10px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-white

          md:left-6
          md:top-6
        "
      >
        {category}
      </div>

      {/* =================================================
          NUMBER
      ================================================= */}

      <div
        className="
          absolute
          bottom-5
          left-5
          z-10
          text-[11px]
          font-medium
          tracking-[0.12em]
          text-white

          md:bottom-6
          md:left-6
        "
      >
        {number}
      </div>

      {/* =================================================
          EXPLORE
      ================================================= */}

      <div
        className="
          absolute
          right-5
          top-5
          z-10
          flex
          items-center
          gap-2
          text-[10px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-white

          md:right-6
          md:top-6
        "
      >
        <span>Explore</span>

        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#EB2226]
          "
        />
      </div>

      {/* =================================================
          PROGRESS
      ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-[2px]
          w-full
          bg-white/20
        "
      >
        <div
          ref={progressRef}
          className="
            h-full
            w-0
            bg-[#EB2226]
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   WORK CARD
========================================================= */

function WorkCard({ work, index }) {
  const cardRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const line = lineRef.current;
    const title = titleRef.current;

    if (!card) return;

    const ctx = gsap.context(() => {
      /* ===================================================
         CARD REVEAL
      =================================================== */

      gsap.fromTo(
        card,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        }
      );

      /* ===================================================
         TITLE REVEAL
      =================================================== */

      if (title) {
        gsap.fromTo(
          title,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      /* ===================================================
         RED LINE
      =================================================== */

      if (line) {
        gsap.fromTo(
          line,
          {
            width: "0%",
          },
          {
            width: "100%",
            duration: 1,
            delay: 0.35,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, card);

    return () => ctx.revert();
  }, []);




  const handleTagClick = (tag) => {
    const target = document.getElementById("contact");

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Tag clicked:", tag);
    }
  };

  return (
    <article
      ref={cardRef}
      className={`
        relative
        opacity-0
        ${index % 2 === 1 ? "md:mt-24" : ""}
      `}
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <WorkImageSlider
        images={work.images}
        category={work.category}
        number={work.number}
        animation={work.animation}
        interval={work.interval}
        startDelay={work.startDelay}
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="pt-7 md:pt-8">

        {/* TITLE */}

        <div className="flex items-start justify-between gap-6">
          <div className="max-w-[720px]">
            <h3
              ref={titleRef}
              className="
                text-[clamp(2rem,4vw,4rem)]
                font-medium
                leading-[0.95]
                tracking-[-0.045em]
                text-[#01295C]
              "
            >
              {work.title}
            </h3>
          </div>

          <span
            className="
              hidden
              shrink-0
              pt-1
              text-[11px]
              font-medium
              tracking-[0.14em]
              text-[#A7A9AC]
              md:block
            "
          >
            {work.number}
          </span>
        </div>

        {/* RED LINE */}

        <div
          className="
            mt-6
            h-[2px]
            w-full
            overflow-hidden
            bg-[#A7A9AC]/30
          "
        >
          <div
            ref={lineRef}
            className="
              h-full
              w-0
              bg-[#EB2226]
            "
          />
        </div>

        {/* DESCRIPTION */}

        <div
          className="
            mt-6
            grid
            gap-7

            md:grid-cols-[1fr_1.3fr]
            md:gap-12
          "
        >
          {/* SUBTITLE */}

          <p
            className="
              max-w-[360px]
              text-[15px]
              leading-[1.5]
              tracking-[-0.01em]
              text-[#01295C]

              md:text-[16px]
            "
          >
            {work.subtitle}
          </p>

          <div>
            {/* TAGS */}

            <div className="flex flex-wrap gap-2">
              {/* {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    border
                    border-[#A7A9AC]
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-[#01295C] 
                  "
                >
                  {tag}
                </span>
              ))} */}


              {work.tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  aria-label={`${tag} - ${work.title}`}
                  className="
                    cursor-pointer
                    border
                    border-[#A7A9AC]
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-[#01295C]
                    transition-colors
                    duration-300
                    hover:border-[#01295C]
                    hover:bg-[#01295C]
                    hover:text-white
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-[#EB2226]
                  "
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* OUTCOME */}

            {/*<div className="mt-7">
              <span
                className="
                  block
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#A7A9AC]
                "
              >
                Outcome
              </span>

              <p
                className="
                  mt-2
                  max-w-[500px]
                  text-[13px]
                  leading-[1.5]
                  text-[#01295C]

                  md:text-[14px]
                "
              >
                {work.outcome}
              </p>
            </div>*/}
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN WORKS SECTION
========================================================= */

export default function Works() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const intro = introRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* ===================================================
         SECTION HEADING
      =================================================== */

      if (heading) {
        gsap.fromTo(
          heading,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      /* ===================================================
         INTRO
      =================================================== */

      if (intro) {
        gsap.fromTo(
          intro,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: intro,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="design"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-5
        py-24
        text-[#01295C]

        md:px-8
        md:py-32

        lg:px-10
        lg:py-40
      "
    >
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div
        className="
          mb-20
          grid
          gap-10

          md:mb-28
          md:grid-cols-[1fr_1.3fr]
          md:gap-20
        "
      >
        {/* LEFT HEADER */}

        <div ref={headingRef}>
          <div
            className="
              mb-5
              flex
              items-center
              gap-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#A7A9AC]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#EB2226]
              "
            />

            Selected Work
          </div>

          <h2
            className="
              max-w-[650px]
              text-[clamp(3rem,7vw,7rem)]
              font-medium
              leading-[0.86]
              tracking-[-0.06em]
              text-[#01295C]
            "
          >
            Work that
            <br />
            moves
            <br />
            business.
          </h2>
        </div>

        {/* RIGHT INTRO */}

        <div
          ref={introRef}
          className="
            flex
            items-end
            md:pb-2
          "
        >
          <p
            className="
              max-w-[560px]
              text-[clamp(1.1rem,1.7vw,1.5rem)]
              leading-[1.3]
              tracking-[-0.025em]
              text-[#01295C]
            "
          >
            From brand identity to demand generation, we build
            the strategy, systems and creative that help
            businesses scale.
          </p>
        </div>
      </div>

      {/* =====================================================
          WORK GRID
      ===================================================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-x-8
          gap-y-24

          md:grid-cols-2
          md:gap-y-32

          lg:gap-x-12
          lg:gap-y-40
        "
      >
        {WORKS.map((work, index) => (
          <WorkCard
            key={work.number}
            work={work}
            index={index}
          />
        ))}
      </div>

      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}

      <div
        className="
          mt-32
          border-t
          border-[#A7A9AC]/40
          pt-8

          md:mt-48
          md:pt-10
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5

            md:flex-row
            md:items-start
            md:justify-between
          "
        >
          {/* LEFT */}

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#A7A9AC]
            "
          >
            Roakfield / Approach
          </span>

          {/* RIGHT */}

          <p
            className="
              max-w-[720px]
              text-[clamp(1.4rem,2.5vw,2.5rem)]
              leading-[1.05]
              tracking-[-0.04em]
              text-[#01295C]
            "
          >
            Strategy first.
            <br />
            Creative with purpose.
            <br />
            Growth that compounds.
          </p>
        </div>
      </div>
    </section>
  );
}