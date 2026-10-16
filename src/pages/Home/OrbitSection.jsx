import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const SERVICES = [
  {
    title: "Brand Strategy",
    number: "01",
    description:
      "Positioning, direction and strategic thinking that gives your brand a clear place in the market.",
    media:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Go to market strategy",
    number: "02",
    description:
      "Turning your offer into a focused market strategy built to create traction and growth.",
    media:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Content creation",
    number: "03",
    description:
      "Content systems designed to make your brand visible, relevant and consistently remembered.",
    media:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "AI Avatar cloning",
    number: "04",
    description:
      "AI-powered digital avatars that help brands scale communication and content production.",
    media:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Product shoot",
    number: "05",
    description:
      "Product visuals created to communicate value, quality and desire across every touchpoint.",
    media:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Podcast",
    number: "06",
    description:
      "Thoughtful conversations turned into a long-form content engine for your brand.",
    media:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Performance marketing",
    number: "07",
    description:
      "Data-led campaigns that turn attention into measurable demand and business growth.",
    media:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Consulting & Advisory",
    number: "08",
    description:
      "Senior strategic thinking to help you make sharper decisions and move with confidence.",
    media:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function OrbitSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  /*
   * Convert section scroll progress into active service.
   */
  React.useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (value) => {
      const index = Math.min(
        SERVICES.length - 1,
        Math.floor(value * SERVICES.length)
      );

      setActiveIndex(index);
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  const activeService = SERVICES[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="orbit"
      className="
        relative
        bg-[#111111]
        text-white
      "
    >
      {/*
        Large scroll area.
        Each service gets a portion of the scroll.
      */}
      <div className="relative h-[800vh]">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* =====================================================
              DESKTOP SUBTLE BACKGROUND GRID
              Hidden on mobile because image is the background
          ===================================================== */}

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div
              className="
                absolute
                inset-0
                opacity-[0.035]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(255,255,255,0.15) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,0.15) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          {/* =====================================================
              MOBILE FULL SECTION BACKGROUND IMAGE
              ONLY visible below lg
          ===================================================== */}

          <div
            className="
              absolute
              inset-0
              z-0
              lg:hidden
            "
          >
            <AnimatePresence mode="sync">
              <motion.div
                key={activeService.number}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute inset-0"
              >
                <img
                  src={activeService.media}
                  alt={activeService.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    grayscale-[15%]
                    brightness-[0.55]
                  "
                />

                {/* Main dark overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/30
                  "
                />

                {/* Bottom cinematic gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/35
                    to-black/10
                  "
                />

                {/* Left readability gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/40
                    via-transparent
                    to-transparent
                  "
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}

          <div
            className="
              relative
              z-10
              grid
              h-full
              grid-cols-1
              lg:grid-cols-[1fr_1fr]
            "
          >

            {/* =====================================================
                LEFT SIDE
            ===================================================== */}

            <div
              className="
                relative
                flex
                h-full
                flex-col
                justify-center
                px-6
                py-12
                sm:px-8
                md:px-12
                lg:px-16
                xl:px-20
              "
            >

              {/* =================================================
                  SECTION LABEL
              ================================================= */}

              <div
                className="
                  absolute
                  left-6
                  top-8
                  flex
                  items-center
                  gap-3
                  sm:left-8
                  md:left-12
                  lg:left-16
                  xl:left-20
                "
              >
                <span
                  className="
                    h-[6px]
                    w-[6px]
                    rounded-full
                    bg-[#EB2226]
                  "
                />

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-white/50
                    sm:text-[10px]
                  "
                >
                  Orbit
                </span>
              </div>

              {/* =================================================
                  MOBILE CURRENT NUMBER
              ================================================= */}

              <div
                className="
                  absolute
                  right-6
                  top-8
                  z-20
                  text-[9px]
                  tracking-[0.1em]
                  text-white/55
                  sm:right-8
                  lg:hidden
                "
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(SERVICES.length).padStart(2, "0")}
              </div>

              {/* =================================================
                  MAIN SERVICE LIST
              ================================================= */}

              <div className="w-full max-w-[760px]">
                {SERVICES.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <motion.div
                      key={service.title}
                      className="
                        relative
                        flex
                        cursor-pointer
                        items-center
                      "
                      onClick={() => setActiveIndex(index)}
                    >

                      {/* Plus sign */}

                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -12,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                        className="
                          absolute
                          -left-[4px]
                          text-[28px]
                          font-light
                          leading-none
                          text-white
                          sm:-left-[8px]
                          sm:text-[34px]
                          md:-left-[10px]
                          md:text-[40px]
                        "
                      >
                        +
                      </motion.div>

                      {/* Number */}

                      <motion.span
                        animate={{
                          opacity: isActive ? 0.85 : 0.35,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="
                          mr-3
                          w-[25px]
                          shrink-0
                          text-[8px]
                          tracking-[0.08em]
                          text-white
                          sm:mr-4
                          sm:w-[30px]
                          sm:text-[9px]
                        "
                      >
                        {service.number}
                      </motion.span>

                      {/* Title */}

                      <motion.div
                        animate={{
                          color: isActive
                            ? "#FFFFFF"
                            : "rgba(255,255,255,0.38)",
                          x: isActive ? 26 : 0,
                        }}
                        transition={{
                          duration: 0.55,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                        className="
                          relative
                          py-[5px]
                          text-[28px]
                          font-normal
                          leading-[0.98]
                          tracking-[-0.055em]
                          sm:py-[6px]
                          sm:text-[35px]
                          md:text-[43px]
                          lg:text-[47px]
                          xl:text-[54px]
                        "
                      >
                        {service.title}

                        {/* Active underline */}

                        <motion.span
                          initial={false}
                          animate={{
                            scaleX: isActive ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.45,
                            ease: [0.76, 0, 0.24, 1],
                          }}
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-[2px]
                            w-full
                            origin-left
                            bg-[#EB2226]
                          "
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* =================================================
                  BOTTOM DESCRIPTION
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-8
                  left-6
                  max-w-[430px]
                  sm:left-8
                  md:left-12
                  lg:left-16
                  xl:left-20
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.title}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <p
                      className="
                        text-[11px]
                        leading-[1.4]
                        tracking-[-0.01em]
                        text-white/65
                        sm:text-[12px]
                        md:text-[13px]
                      "
                    >
                      {activeService.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =================================================
                  MOBILE CAPABILITY INFO
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-8
                  right-6
                  z-20
                  flex
                  flex-col
                  items-end
                  sm:right-8
                  lg:hidden
                "
              >
                <p
                  className="
                    mb-2
                    text-[8px]
                    uppercase
                    tracking-[0.16em]
                    text-white/50
                  "
                >
                  Roakfield / Capability
                </p>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeService.title}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      max-w-[150px]
                      text-right
                      text-[12px]
                      tracking-[-0.02em]
                      text-white
                    "
                  >
                    {activeService.title}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* =====================================================
                RIGHT SIDE — DESKTOP ONLY
            ===================================================== */}

            <div
              className="
                relative
                hidden
                h-full
                overflow-hidden
                bg-black
                lg:block
              "
            >
              <AnimatePresence mode="sync">
                <motion.div
                  key={activeService.number}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeService.media}
                    alt={activeService.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      grayscale-[15%]
                      brightness-[0.72]
                    "
                  />

                  {/* Cinematic overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/20
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-transparent
                      to-black/10
                    "
                  />
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  IMAGE INFORMATION
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  right-8
                  z-20
                  flex
                  items-end
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      mb-2
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-white/45
                    "
                  >
                    Roakfield / Capability
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={activeService.title}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -15,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      className="
                        text-[18px]
                        font-normal
                        tracking-[-0.035em]
                        text-white
                      "
                    >
                      {activeService.title}
                    </motion.h3>
                  </AnimatePresence>
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-[12px]
                    text-white
                  "
                >
                  ↗
                </div>
              </div>

              {/* =================================================
                  VERTICAL PROGRESS
              ================================================= */}

              <div
                className="
                  absolute
                  right-6
                  top-1/2
                  z-20
                  h-[180px]
                  w-[1px]
                  -translate-y-1/2
                  bg-white/10
                "
              >
                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    w-full
                    origin-top
                    bg-[#EB2226]
                  "
                  animate={{
                    height: `${
                      ((activeIndex + 1) / SERVICES.length) * 100
                    }%`,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                />
              </div>

              {/* =================================================
                  DESKTOP CURRENT NUMBER
              ================================================= */}

              <div
                className="
                  absolute
                  right-8
                  top-8
                  z-20
                  text-[10px]
                  tracking-[0.1em]
                  text-white/50
                "
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(SERVICES.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM RED PROGRESS LINE
          ===================================================== */}

          <motion.div
            className="
              absolute
              bottom-0
              left-0
              z-30
              h-[2px]
              bg-[#EB2226]
            "
            animate={{
              width: `${((activeIndex + 1) / SERVICES.length) * 100}%`,
            }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </div>
      </div>
    </section>
  );
}