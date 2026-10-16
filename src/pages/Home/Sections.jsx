import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const BRANDS = [
  "Airbus",
  "Bodylines",
  "Mee Energy",
  "DreamDesk",
  "Pyxis",
  "Fourjaw",
  "Visune",
  "OSCO London",
  "Litta",
  "Meridian Space",
  "GRAMS(28)",
  "Fyous",
];

export function Play() {
  return (
    <section
      id="play"
      className="
        relative
        overflow-hidden
        border-t
        border-[#A7A9AC]/30
        bg-white
        px-5
        py-16
        md:px-10
        md:py-24
        lg:px-12
        lg:py-28
      "
    >
      {/* =====================================================
          TOP META
      ===================================================== */}

      <div className="mb-10 flex items-center justify-between md:mb-14">
        <Reveal>
          <div className="flex items-center gap-3">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#EB2226]
              "
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#A7A9AC]
                md:text-[10px]
              "
            >
              Play
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.15em]
              text-[#A7A9AC]
            "
          >
            01 / FILM
          </span>
        </Reveal>
      </div>

      {/* =====================================================
          CINEMATIC MEDIA
      ===================================================== */}

      <Reveal>
        <div
          className="
            group
            relative
            overflow-hidden
            bg-[#01295C]
          "
        >
          {/* RED TOP ACCENT */}

          <div
            className="
              absolute
              left-0
              top-0
              z-30
              h-[3px]
              w-full
              bg-[#EB2226]
            "
          />

          {/* IMAGE */}

          <motion.div
            className="
              relative
              aspect-[16/9]
              w-full
              overflow-hidden
            "
            initial={{ scale: 1.02 }}
            whileInView={{ scale: 1 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.img
              src="https://static.wixstatic.com/media/0b6ff1_7be0f6a0052943d7a5bcbb01b6b3a56df000.jpg/v1/fill/w_1364,h_744,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/0b6ff1_7be0f6a0052943d7a5bcbb01b6b3a56df000.jpg"
              alt="Behind the Design with Mee Energy"
              loading="lazy"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1400ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-[1.045]
              "
            />

            {/* BLUE BRAND TREATMENT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[#01295C]/10
                transition-opacity
                duration-700
                group-hover:bg-[#01295C]/5
              "
            />

            {/* CINEMATIC GRADIENT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#01295C]/70
                via-transparent
                to-[#01295C]/10
              "
            />

            {/* =================================================
                FRAME
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-4
                z-20
                border
                border-white/25
                transition-all
                duration-700
                group-hover:inset-5
                group-hover:border-white/40
                md:inset-6
                md:group-hover:inset-7
              "
            />

            {/* =================================================
                TOP LEFT
            ================================================= */}

            <div
              className="
                absolute
                left-6
                top-6
                z-30
                hidden
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-white/70
                sm:flex
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#EB2226]" />

              Roakfield / Film
            </div>

            {/* =================================================
                PLAY BUTTON
            ================================================= */}

            <motion.div
              className="
                absolute
                left-1/2
                top-1/2
                z-30
                flex
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
              "
              whileHover={{ scale: 1.08 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 15,
              }}
            >
              <motion.div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#EB2226]
                  bg-[#EB2226]/10
                  backdrop-blur-md
                  md:h-24
                  md:w-24
                "
              >
                <span
                  className="
                    ml-1
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#EB2226]
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  Play
                </span>
              </motion.div>

              {/* OUTER RING */}

              <motion.div
                className="
                  absolute
                  h-28
                  w-28
                  rounded-full
                  border
                  border-white/25
                  md:h-32
                  md:w-32
                "
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.35, 0.12, 0.35],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* =================================================
                BOTTOM INFO
            ================================================= */}

            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                z-30
                flex
                items-end
                justify-between
                md:bottom-8
                md:left-8
                md:right-8
              "
            >
              <div>
                <p
                  className="
                    mb-2
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-white/60
                    md:text-[9px]
                  "
                >
                  Behind the Design
                </p>

                <h3
                  className="
                    text-xl
                    font-medium
                    tracking-[-0.04em]
                    text-white
                    md:text-3xl
                  "
                >
                  Mee Energy
                </h3>
              </div>

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  text-sm
                  text-white
                  transition-all
                  duration-300
                  group-hover:border-[#EB2226]
                  group-hover:bg-[#EB2226]
                "
              >
                ↗
              </span>
            </div>
          </motion.div>
        </div>
      </Reveal>

      {/* =====================================================
          CONTENT BELOW MEDIA
      ===================================================== */}

      <div
        className="
          mt-10
          grid
          gap-8
          md:mt-12
          md:grid-cols-[0.8fr_1.2fr]
          md:gap-12
          lg:grid-cols-[0.72fr_1.28fr]
        "
      >
        {/* ===================================================
            LEFT
        =================================================== */}

        <Reveal>
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[9px] tracking-[0.12em] text-[#A7A9AC]">
                01
              </span>

              <span className="h-px w-8 bg-[#EB2226]" />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[#A7A9AC]
                "
              >
                Case Study
              </span>
            </div>

            <h3
              className="
                display
                text-[clamp(2rem,4vw,4rem)]
                leading-[0.95]
                tracking-[-0.055em]
                text-[#01295C]
              "
            >
              Behind the Design
              <br />
              with Mee Energy
              <span className="text-[#EB2226]">.</span>
            </h3>
          </div>
        </Reveal>

        {/* ===================================================
            RIGHT
        =================================================== */}

        <Reveal delay={0.1}>
          <div className="max-w-3xl">
            <p
              className="
                display
                text-[clamp(1.25rem,2.4vw,2.3rem)]
                leading-[1.08]
                tracking-[-0.045em]
                text-[#01295C]
              "
            >
              &ldquo;More important than taking the first step is facing the
              right direction.&rdquo; &mdash; one of the first things Jay
              Mukhey said, and it set the foundation for the entire Mee Energy
              project.
            </p>

            {/* RED ACCENT */}

            <div
              className="
                mt-7
                h-[2px]
                w-14
                bg-[#EB2226]
                md:mt-9
              "
            />

            {/* LINK */}

            <motion.a
              href="#work"
              whileHover={{ x: 7 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                border-b
                border-[#A7A9AC]/50
                pb-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.17em]
                text-[#01295C]
                transition-colors
                duration-300
                hover:border-[#EB2226]
                hover:text-[#EB2226]
                md:mt-8
                md:text-[11px]
              "
              style={{
                fontFamily: "'Archivo', sans-serif",
              }}
            >
              Case Study

              <span className="text-sm">
                ↗
              </span>
            </motion.a>
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          BOTTOM INDEX
      ===================================================== */}

      <div
        className="
          mt-12
          flex
          items-center
          justify-between
          border-t
          border-[#A7A9AC]/30
          pt-4
          text-[8px]
          uppercase
          tracking-[0.18em]
          text-[#A7A9AC]
          md:mt-16
        "
      >
        <span>Roakfield / Play</span>

        <span>Film · Strategy · Design</span>
      </div>
    </section>
  );
}

export function BrandsMarquee() {
  return (
    <section className="border-t border-gray-200 bg-white py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4 px-5 md:px-10">
        <div>
          <h2 className="display text-4xl font-bold text-[#01295C] md:text-6xl">
            Brands We&rsquo;ve Worked With.
          </h2>

          <div className="mt-2 h-0.5 w-12 bg-[#EB2226]" />
        </div>

        <motion.a
          href="#contact"
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="link-arrow inline-flex items-center gap-2 text-[#01295C] transition-colors duration-300 hover:text-[#EB2226]"
        >
          Let&rsquo;s talk

          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </motion.a>
      </div>

      <div className="mt-14 overflow-hidden border-y border-gray-200 py-6">
        <div className="marquee-track flex animate-marquee">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="display shrink-0 px-8 text-4xl font-bold text-[#01295C] md:text-6xl"
            >
              {b} <span className="text-[#EB2226]">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ORBIT
============================================================ */

export function Orbit() {
  const SERVICES = [
    {
      number: "01",
      title: "Brand Strategy",
      description:
        "Building the strategic foundation that gives your brand clarity, relevance and a distinct position in the market.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
    },
    {
      number: "02",
      title: "Go to market strategy",
      description:
        "Turning your product or service into a focused market strategy designed to create traction and accelerate growth.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=85",
    },
    {
      number: "03",
      title: "Content creation",
      description:
        "Creating content that gives your brand a consistent voice, stronger presence and something worth remembering.",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1800&q=85",
    },
    {
      number: "04",
      title: "AI Avatar cloning",
      description:
        "Using AI-powered digital avatars to scale communication, education and content while keeping your brand personality intact.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85",
    },
    {
      number: "05",
      title: "Product shoot",
      description:
        "Product photography and visual storytelling that communicates quality, value and desire at first glance.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85",
    },
    {
      number: "06",
      title: "Podcast",
      description:
        "Long-form conversations transformed into valuable content that builds authority, trust and brand connection.",
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1800&q=85",
    },
    {
      number: "07",
      title: "Performance marketing",
      description:
        "Data-led campaigns designed to turn attention into measurable demand, leads and business growth.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
    },
    {
      number: "08",
      title: "Consulting & Advisory",
      description:
        "Senior strategic thinking that helps businesses make sharper decisions and move forward with confidence.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=85",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  /* ============================================================
     AUTOMATIC ROTATION
  ============================================================ */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SERVICES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const activeService = SERVICES[activeIndex];

  /* ============================================================
     RELATIVE POSITION
  ============================================================ */

  const getRelativePosition = (index) => {
    let position = index - activeIndex;

    if (position > SERVICES.length / 2) {
      position -= SERVICES.length;
    }

    if (position < -SERVICES.length / 2) {
      position += SERVICES.length;
    }

    return position;
  };

  return (
    <section className="relative overflow-hidden bg-[#01295C] text-white">
      {/* ========================================================
          MOBILE FULL-SCREEN IMAGE BACKGROUND
          ONLY VISIBLE BELOW lg
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 lg:hidden">
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
              scale: 1.02,
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute inset-0"
          >
            {/* MOBILE BACKGROUND IMAGE */}
            <img
              src={activeService.image}
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* BLUE COLOR TREATMENT */}
            {/* LIGHT BLUE BRAND TINT */}
<div className="absolute inset-0 bg-[#01295C]/35" />

{/* VERY LIGHT DARK OVERLAY */}
<div className="absolute inset-0 bg-black/10" />

{/* LIGHT CINEMATIC GRADIENT */}
<div
  className="
    absolute
    inset-0
    bg-gradient-to-b
    from-[#01295C]/55
    via-[#01295C]/20
    to-[#01295C]/65
  "
/>

            {/* SUBTLE RED GLOW */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#EB2226]/[0.035]
                blur-[100px]
              "
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================
          SECTION
      ======================================================== */}

      <div className="relative min-h-[760px] md:min-h-[850px]">
        {/* ======================================================
            SUBTLE GRID
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            opacity-[0.055]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.18) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.18) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* ======================================================
            TOP LABEL
        ====================================================== */}

        <div
          className="
            absolute
            left-5
            top-8
            z-30
            flex
            items-center
            gap-3
            sm:left-7
            md:left-10
            lg:left-14
            xl:left-20
          "
        >
          <span className="h-[7px] w-[7px] rounded-full bg-[#EB2226]" />

          <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
            Orbit
          </span>
        </div>

        {/* ======================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            relative
            z-10
            grid
            min-h-[760px]
            md:min-h-[850px]
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* ===================================================
              LEFT — VERTICAL ROTATING SERVICE LIST
          =================================================== */}

          <div
            className="
              relative
              flex
              items-center
              px-5
              sm:px-7
              md:px-10
              lg:px-14
              xl:px-20
            "
          >
            {/* =================================================
                FADE TOP
                Mobile uses transparent blue so image remains
                visible underneath.
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-0
                z-20
                h-[24%]
                bg-gradient-to-b
                from-[#01295C]/75
                to-transparent
                lg:from-[#01295C]
              "
            />

            {/* =================================================
                FADE BOTTOM
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                right-0
                z-20
                h-[24%]
                bg-gradient-to-t
                from-[#01295C]/90
                to-transparent
                lg:from-[#01295C]
              "
            />

            {/* =================================================
                CENTER ACTIVE GUIDE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-5
                right-5
                top-1/2
                z-0
                h-[1px]
                -translate-y-1/2
                bg-white/[0.15]
                sm:left-7
                sm:right-7
                md:left-10
                md:right-10
                lg:left-14
                lg:right-14
                xl:left-20
                xl:right-20
              "
            />

            {/* =================================================
                ROTATING LIST
            ================================================= */}

            <div
              className="
                relative
                h-[470px]
                w-full
                overflow-hidden
              "
            >
              {SERVICES.map((service, index) => {
                const position = getRelativePosition(index);

                const visible =
                  position >= -3 && position <= 3;

                const isActive = position === 0;

                return (
                  <motion.div
                    key={service.number}
                    onClick={() => setActiveIndex(index)}
                    initial={false}
                    animate={{
                      y: position * 74,
                      scale: isActive ? 1 : 0.82,
                      opacity: !visible
                        ? 0
                        : isActive
                        ? 1
                        : Math.max(
                            0.18,
                            1 - Math.abs(position) * 0.25
                          ),
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="
                      absolute
                      left-0
                      top-1/2
                      flex
                      w-full
                      -translate-y-1/2
                      cursor-pointer
                      items-center
                    "
                  >
                    {/* + ONLY ACTIVE */}

                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -12,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      className="
                        absolute
                        -left-1
                        text-[28px]
                        font-light
                        leading-none
                        text-[#EB2226]
                        md:-left-4
                        md:text-[36px]
                      "
                    >
                      +
                    </motion.span>

                    {/* NUMBER */}

                    <span
                      className={`
                        mr-3
                        w-[25px]
                        shrink-0
                        text-[8px]
                        tracking-[0.08em]
                        md:mr-5
                        md:w-[30px]
                        md:text-[9px]
                        ${
                          isActive
                            ? "text-white/90"
                            : "text-[#A7A9AC]/55"
                        }
                      `}
                    >
                      {service.number}
                    </span>

                    {/* TITLE */}

                    <div className="relative py-2">
                      <motion.h2
                        animate={{
                          color: isActive
                            ? "#FFFFFF"
                            : "#A7A9AC",
                          textShadow: isActive
                            ? "0 2px 20px rgba(0,0,0,0.25)"
                            : "none",
                        }}
                        transition={{
                          duration: 0.55,
                        }}
                        className="
                          whitespace-nowrap
                          text-[27px]
                          font-normal
                          leading-none
                          tracking-[-0.055em]
                          sm:text-[31px]
                          md:text-[39px]
                          lg:text-[44px]
                          xl:text-[50px]
                        "
                      >
                        {service.title}
                      </motion.h2>

                      {/* RED UNDERLINE */}

                      <motion.div
                        animate={{
                          scaleX: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.55,
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
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div
              className="
                absolute
                bottom-9
                left-5
                max-w-[400px]
                sm:left-7
                md:left-10
                lg:left-14
                xl:left-20
              "
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeService.number}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    text-[11px]
                    leading-[1.45]
                    text-white/65
                    sm:text-[12px]
                    md:text-[13px]
                  "
                >
                  {activeService.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* ===================================================
              RIGHT — DESKTOP IMAGE
              COMPLETELY UNCHANGED / HIDDEN ON MOBILE
          =================================================== */}

          <div
            className="
              relative
              hidden
              overflow-hidden
              bg-[#FFFFFF]
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
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute inset-0"
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* ROAKFIELD BLUE TINT */}

                <div className="absolute inset-0 bg-[#01295C]/20" />

                {/* BLUE BOTTOM GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#01295C]/80
                    via-transparent
                    to-transparent
                  "
                />
              </motion.div>
            </AnimatePresence>

            {/* WHITE FRAME */}

            <div
              className="
                pointer-events-none
                absolute
                inset-5
                z-10
                border
                border-white/40
              "
            />

            {/* COUNTER */}

            <div
              className="
                absolute
                right-8
                top-8
                z-20
                text-[10px]
                tracking-[0.1em]
                text-white
              "
            >
              {activeService.number} / 08
            </div>

            {/* VERTICAL RED PROGRESS */}

            <div
              className="
                absolute
                right-7
                top-1/2
                z-20
                h-[180px]
                w-[2px]
                -translate-y-1/2
                bg-white/50
              "
            >
              <motion.div
                animate={{
                  height: `${
                    ((activeIndex + 1) /
                      SERVICES.length) *
                    100
                  }%`,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  absolute
                  left-0
                  top-0
                  w-full
                  bg-[#EB2226]
                "
              />
            </div>

            {/* IMAGE INFO */}

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
                    text-white/75
                  "
                >
                  Roakfield / Capability
                </p>

                <AnimatePresence mode="wait">
                  <motion.h3
                    key={activeService.number}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                    }}
                    className="
                      text-[20px]
                      font-medium
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
                  border-white/60
                  text-[12px]
                  text-white
                "
              >
                ↗
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            BOTTOM RED PROGRESS
        ====================================================== */}

        <motion.div
          className="
            absolute
            bottom-0
            left-0
            z-30
            h-[3px]
            bg-[#EB2226]
          "
          animate={{
            width: `${
              ((activeIndex + 1) /
                SERVICES.length) *
              100
            }%`,
          }}
          transition={{
            duration: 0.6,
          }}
        />
      </div>
    </section>
  );
}

/* ============================================================
   SYSTEMS
============================================================ */

export function Systems() {
  return (
    <section
      id="systems"
      className="border-t border-gray-200 bg-white"
    >
      <Reveal>
        <div className="relative overflow-hidden">
          {/* Red top bar */}

          <div className="absolute left-0 top-0 z-10 h-1 w-full bg-[#EB2226]" />

          <img
            src="https://static.wixstatic.com/media/0b6ff1_59c13b2f28b1443e8eea2e38e390bc0ff000.jpg/v1/fill/w_903,h_462,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/0b6ff1_59c13b2f28b1443e8eea2e38e390bc0ff000.jpg"
            alt="RockField System"
            loading="lazy"
            className="h-[45vh] w-full object-cover md:h-[70vh]"
          />
        </div>
      </Reveal>

      <div className="grid gap-8 px-5 py-20 md:grid-cols-[1fr_1.3fr] md:px-10 md:py-28">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#EB2226]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB2226]">
              Systems
            </span>
          </div>

          <h2 className="display text-4xl font-bold text-[#01295C] md:text-6xl">
            We&rsquo;re sentimental about our systems.
          </h2>

          <div className="mt-3 h-0.5 w-12 bg-[#EB2226]" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="display text-xl leading-snug text-[#01295C] md:text-3xl">
            Creative shouldn&rsquo;t be guesswork. Our work is shaped by
            process, driven by clarity, and backed by models that bring
            structure to vision. From how we use AI to how we build brands,
            this is the thinking behind the work, and the systems that make it
            land.
          </p>

          <motion.a
            href="#systems"
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="link-arrow mt-8 inline-flex items-center gap-2 text-[#01295C] transition-colors duration-300 hover:text-[#EB2226]"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            See our systems

            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}