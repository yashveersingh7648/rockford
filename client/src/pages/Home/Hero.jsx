// import {
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// import { useRef } from "react";
// import NamaskaramIntro from "./NamaskaramIntro";

// export default function Hero() {
//   const ref = useRef(null);

//   // =====================================================
//   // VIDEO PARALLAX
//   // =====================================================
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["-8%", "8%"]
//   );

//   return (
//     <section
//       id="top"
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-white
//         text-[#01295C]
//       "
//     >

//       {/* =====================================================
//           HERO INTRO
//       ===================================================== */}
//       <div
//         className="
//           relative
//           px-5
//           pt-28
//           pb-14

//           sm:px-6
//           sm:pt-32

//           md:min-h-[680px]
//           md:px-8
//           md:pt-0
//           md:pb-0

//           lg:px-10
//         "
//       >

//         {/* =====================================================
//             MAIN HERO COPY
//         ===================================================== */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//             ease: [0.76, 0, 0.24, 1],
//           }}
//           className="
//             relative
//             w-full
//             max-w-[850px]

//             md:absolute
//             md:left-8
//             md:top-[245px]

//             lg:left-10
//           "
//         >

//           {/* =================================================
//               PARAGRAPH 1
//           ================================================= */}
//           <p
//             className="
//               text-[21px]
//               leading-[1.12]
//               tracking-[-0.045em]

//               sm:text-[23px]

//               md:text-[28px]

//               lg:text-[31px]
//             "
//           >
//             <span className="text-[#A7A9AC]">
//               Every fisherman knows the sea, the changing tides and how to
//               bring home the finest catch.
//             </span>{" "}
//             But the journey doesn’t end at the shore. The catch still needs
//             the right market and the value it deserves.
//           </p>

//           {/* =================================================
//               PARAGRAPH 2
//           ================================================= */}
//           <p
//             className="
//               mt-4
//               text-[21px]
//               leading-[1.12]
//               tracking-[-0.045em]

//               sm:text-[23px]

//               md:mt-5
//               md:text-[28px]

//               lg:text-[31px]
//             "
//           >
//             You bring the expertise. We tell your story and create the
//             demand to grow your business around it.
//           </p>

//           {/* =================================================
//               PARAGRAPH 3
//           ================================================= */}
//           <p
//             className="
//               mt-4
//               max-w-[700px]
//               text-[21px]
//               leading-[1.12]
//               tracking-[-0.045em]
//               text-[#01295C]

//               sm:text-[23px]

//               md:mt-5
//               md:text-[28px]

//               lg:text-[31px]
//             "
//           >
//             <span
//               className="
//                 underline
//                 decoration-[#EB2226]
//                 decoration-[2px]
//                 underline-offset-[4px]
//               "
//             >
//               Focus on your craft.
//             </span>{" "}
//             Let Roakfield navigate the rest.
//           </p>

//         </motion.div>

//         {/* =====================================================
//             SCROLL INDICATOR
//         ===================================================== */}
//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.5,
//           }}
//           className="
//             mt-10
//             flex
//             items-center
//             gap-2
//             text-[10px]
//             tracking-[-0.02em]
//             text-[#A7A9AC]

//             md:absolute
//             md:right-8
//             md:top-[350px]
//             md:mt-0
//             md:gap-3
//             md:text-[12px]

//             lg:right-10
//           "
//         >
//           <span>[SCROLL]</span>

//           <motion.span
//             animate={{
//               y: [0, 5, 0],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="text-[#EB2226]"
//           >
//             ↓
//           </motion.span>
//         </motion.div>

//       </div>

//       {/* =====================================================
//           VIDEO SECTION – FULL WIDTH NOW
//       ===================================================== */}
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 40,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 1,
//           delay: 0.2,
//           ease: [0.76, 0, 0.24, 1],
//         }}
//         className="w-full"
//       >

//         {/* =====================================================
//             BLUE VIDEO HEADER – now with full width padding
//         ===================================================== */}
//         <div
//           className="
//             flex
//             h-[46px]
//             items-center
//             justify-between
//             bg-[#01295C]
//             px-4

//             sm:h-[48px]
//             sm:px-5

//             md:h-[50px]
//             md:px-7

//             lg:px-10
//           "
//         >

//           {/* LEFT */}
//           <span
//             className="
//               text-[11px]
//               tracking-[-0.035em]
//               text-white

//               sm:text-[12px]

//               md:text-[14px]
//             "
//           >
//             strategy ↔ demand /growth
//           </span>

//           {/* RIGHT */}
//           <button
//             className="
//               group
//               flex
//               items-center
//               gap-2
//               text-[10px]
//               text-white

//               sm:gap-2.5
//               sm:text-[11px]

//               md:text-[12px]
//             "
//           >

//             <span
//               className="
//                 flex
//                 h-[20px]
//                 w-[20px]
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/60
//                 text-[6px]
//                 transition-colors
//                 duration-300
//                 group-hover:border-[#EB2226]
//                 group-hover:text-[#EB2226]

//                 sm:h-[21px]
//                 sm:w-[21px]

//                 md:h-[22px]
//                 md:w-[22px]
//                 md:text-[7px]
//               "
//             >
//               ▶
//             </span>

//             <span
//               className="
//                 underline
//                 underline-offset-[3px]
//               "
//             >
//               Our Approach
//             </span>

//           </button>

//         </div>

//         {/* =====================================================
//             VIDEO – FULL WIDTH (no margins)
//         ===================================================== */}
//         <div
//           ref={ref}
//           data-cursor="play"
//           className="
//             relative
//             aspect-[4/5]
//             w-full
//             overflow-hidden
//             bg-[#E9EEF5]

//             sm:aspect-[4/3]

//             md:aspect-auto
//             md:h-[calc(100vh-110px)]
//             md:min-h-[600px]
//           "
//         >

//           <motion.div
//             className="
//               absolute
//               inset-[-8%]
//               h-[116%]
//               w-[116%]
//             "
//             style={{
//               y,
//             }}
//           >
//             <NamaskaramIntro
//               contained
//               loop
//               onComplete={() => {}}
//             />
//           </motion.div>

//         </div>

//       </motion.div>

//       {/* =====================================================
//           BUSINESS ACCELERATOR – REDUCED SPACING
//       ===================================================== */}
//       <section
//         className="
//           w-full
//           px-5
//           pt-12

//           sm:px-6
//           sm:pt-16

//           md:px-8
//           md:pt-20

//           lg:px-10
//         "
//       >

//         <div className="w-full">

//           {/* =================================================
//               PARAGRAPH 1
//           ================================================= */}
//           <motion.p
//             initial={{
//               opacity: 0,
//               x: 60,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.15,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               max-w-[1100px]
//               text-[19px]
//               leading-[1.12]
//               tracking-[-0.04em]
//               text-[#A7A9AC]

//               sm:text-[21px]

//               md:text-[25px]

//               lg:text-[28px]
//             "
//           >
//             Your business deserves more than just marketing. It deserves to
//             be seen, trusted, and remembered.
//           </motion.p>

//           {/* =================================================
//               PARAGRAPH 2
//           ================================================= */}
//           <motion.p
//             initial={{
//               opacity: 0,
//               x: 60,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.15,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.12,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               mt-3
//               max-w-[1100px]
//               text-[19px]
//               leading-[1.12]
//               tracking-[-0.04em]
//               text-[#A7A9AC]

//               sm:text-[21px]

//               md:mt-4
//               md:text-[25px]

//               lg:text-[28px]
//             "
//           >
//             <span className="text-[#01295C]">
//               Roakfield’s Business Accelerator Program
//             </span>{" "}
//             is curated to be your brand-building partner — working alongside
//             you, not just for you.
//           </motion.p>

//           {/* =================================================
//               PARAGRAPH 3
//           ================================================= */}
//           <motion.p
//             initial={{
//               opacity: 0,
//               x: 60,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.15,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.24,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               mt-3
//               max-w-[1100px]
//               text-[19px]
//               leading-[1.12]
//               tracking-[-0.04em]
//               text-[#A7A9AC]

//               sm:text-[21px]

//               md:mt-4
//               md:text-[25px]

//               lg:text-[28px]
//             "
//           >
//             We bring together{" "}
//             <span className="text-[#01295C]">
//               strategy, branding, content, digital marketing & AI
//             </span>{" "}
//             to turn your vision into a brand people notice, connect with, and
//             choose.
//           </motion.p>

//           {/* =================================================
//               PARAGRAPH 4
//           ================================================= */}
//           <motion.p
//             initial={{
//               opacity: 0,
//               x: 60,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.15,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.36,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               mt-3
//               max-w-[1000px]
//               text-[19px]
//               leading-[1.12]
//               tracking-[-0.04em]
//               text-[#01295C]

//               sm:text-[21px]

//               md:mt-4
//               md:text-[25px]

//               lg:text-[28px]
//             "
//           >
//             Because we don’t just want to grow your business.{" "}
//             <span
//               className="
//                 underline
//                 decoration-[#EB2226]
//                 decoration-[2px]
//                 underline-offset-[4px]
//               "
//             >
//               We want to build a brand you’ll be proud of.
//             </span>
//           </motion.p>

//         </div>

//         {/* =====================================================
//             BOTTOM LINKS
//         ===================================================== */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 60,
//           }}
//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.55,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             relative
//             mt-8
//             flex
//             w-full
//             items-center
//             justify-end
//             gap-5
//             border-b
//             border-gray-200
//             pb-6

//             sm:gap-7
//             sm:pb-7

//             md:mt-10
//             md:gap-9
//             md:pb-9
//           "
//         >

//           {/* RED LINE */}
//           <motion.span
//             initial={{
//               scaleX: 0,
//             }}
//             whileInView={{
//               scaleX: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.9,
//               delay: 0.65,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               absolute
//               bottom-[-1px]
//               left-0
//               h-[2px]
//               w-16
//               origin-left
//               bg-[#EB2226]

//               sm:w-20

//               md:w-28
//             "
//           />

//           {/* FILM */}
//           <a
//             href="#film"
//             data-cursor="link"
//             className="
//               group
//               flex
//               items-center
//               gap-1.5
//               text-[12px]
//               text-[#01295C]
//               transition-colors
//               duration-300
//               hover:text-[#EB2226]

//               sm:text-[13px]
//               sm:gap-2

//               md:text-[15px]
//             "
//           >
//             <span>Film</span>

//             <span
//               className="
//                 transition-all
//                 duration-300
//                 group-hover:translate-x-1
//                 group-hover:-translate-y-1
//                 group-hover:text-[#EB2226]
//               "
//             >
//               ↗
//             </span>
//           </a>

//           {/* DESIGN */}
//           <a
//             href="#design"
//             data-cursor="link"
//             className="
//               group
//               flex
//               items-center
//               gap-1.5
//               text-[12px]
//               text-[#01295C]
//               transition-colors
//               duration-300
//               hover:text-[#EB2226]

//               sm:text-[13px]
//               sm:gap-2

//               md:text-[15px]
//             "
//           >
//             <span>Design</span>

//             <span
//               className="
//                 transition-all
//                 duration-300
//                 group-hover:translate-x-1
//                 group-hover:-translate-y-1
//                 group-hover:text-[#EB2226]
//               "
//             >
//               ↗
//             </span>
//           </a>

//           {/* RED DOT */}
//           <motion.span
//             initial={{
//               scale: 0,
//             }}
//             whileInView={{
//               scale: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.85,
//             }}
//             className="
//               h-3
//               w-3
//               rounded-full
//               bg-[#EB2226]

//               sm:h-3.5
//               sm:w-3.5

//               md:h-4
//               md:w-4
//             "
//           />

//         </motion.div>

//       </section>

//       {/* =====================================================
//           BOTTOM SPACING
//       ===================================================== */}
//       <div
//         className="
//           h-8

//           sm:h-10

//           md:h-12
//         "
//       />

//     </section>
//   );
// }



































import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { useRef, useState, useEffect } from "react";
import NamaskaramIntro from "./NamaskaramIntro";

/* =========================================================
   HERO CARDS DATA
========================================================= */

const HERO_CARDS = [
  {
    label: "Branding",
    // title: "Identity that stands out",
    animation: "fadeZoom",
    interval: 2400,
    startDelay: 0,
    images: [
      "Images/Bharat - Adiyogi.png",
      "Images/Bharat - Airforce.png",
      "Images/Bharat - Airport.png",
      "Images/Bharat - Akshardham.png",

      "Images/Bharat - AndamanNicobar.png",
      "Images/Bharat - Concert.png",
      "Images/Bharat - Dance2.png",
      "Images/Bharat - Dance.png",

      "Images/Bharat - DharamshalaStadium.png",
      "Images/Bharat - Dhunuchidance.png",
      "Images/Bharat - Forest.png",
      "Images/Bharat - GhatBanaras.png",
    ],
  },
  {
    label: "Content",
    // title: "Stories that create demand",
    animation: "slideHorizontal",
    interval: 2700,
    startDelay: 500,
    images: [
      "Images/Bharat - Goa.png",
      "Images/Bharat - Greetings.png",
      "Images/Bharat - Hampi.png",
      "Images/Bharat - Houseboat.png",

      "Images/Bharat - IndiaGate.png",
      "Images/Bharat - Jodhpur.png",
      "Images/Bharat - Kashmir.png",
      "Images/Bharat - Kolkata.png",

      "Images/Bharat - Kutch.png",
      "Images/bharat - Manufacturing.png",
      "Images/Bharat - Meghalaya.png",
      "Images/Bharat - Office.png",
    ],
  },
  {
    label: "Growth",
    // title: "Systems that scale",
    animation: "clipReveal",
    interval: 3000,
    startDelay: 1000,
    images: [
       "Images/Bharat - Payment.png",
      "Images/Bharat - Polomatch.png",
      "Images/Bharat - Rajasthan.png",
      "Images/Bharat - Rocket.png",

      "Images/Bharat - RoyalBengalTiger.png",
      "Images/Bharat - Schoollaptop.png",
      "Images/Bharat - Schoolbus.png",
      "Images/Bharat - Snowkids.png",

      "Images/Bharat - Sports.png",
      "Images/Bharat - StatueofUnity.png",
      "Images/Bharat - Streetfood.png",
      "Images/Bharat - TamilNadu.png",

      "Images/Bharat - TeaGarden.png",
      "Images/Bharat - VandeBharat.png",
      "Images/Bharat - WorliSeLink.png",
    ],
  },
];

const CARD_VARIANTS = {
  fadeZoom: {
    initial: { opacity: 0, scale: 1.15 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  slideHorizontal: {
    initial: { x: "100%" },
    animate: { x: "0%" },
    exit: { x: "-100%" },
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  clipReveal: {
    initial: { clipPath: "inset(0% 0% 100% 0%)", scale: 1.1 },
    animate: { clipPath: "inset(0% 0% 0% 0%)", scale: 1 },
    exit: { opacity: 1 },
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

/* =========================================================
   HERO CARD
========================================================= */

function HeroCard({ card, number }) {
  const [index, setIndex] = useState(0);
  const variant = CARD_VARIANTS[card.animation] || CARD_VARIANTS.fadeZoom;

  useEffect(() => {
    // preload images
    card.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let timer;

    const starter = setTimeout(() => {
      timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % card.images.length);
      }, card.interval);
    }, card.startDelay);

    return () => {
      clearTimeout(starter);
      if (timer) clearInterval(timer);
    };
  }, [card]);

  return (
    <div
      className="
        group
        relative
        aspect-[4/5]
        w-full
        overflow-hidden
        bg-[#01295C]
      "
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={card.images[index]}
          alt={card.label}
          draggable="false"
          initial={variant.initial}
          animate={variant.animate}
          exit={variant.exit}
          transition={variant.transition}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#01295C]/70 via-transparent to-transparent" />

      {/* label */}
      <div className="absolute left-5 top-5 z-20 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-[#EB2226]" />
        {card.label}
      </div>

      {/* number */}
      <div className="absolute right-5 top-5 z-20 text-[11px] font-medium tracking-[0.12em] text-white">
        0{number}
      </div>

      {/* title */}
      <div className="absolute bottom-6 left-5 right-5 z-20 text-[20px] leading-[1.1] tracking-[-0.03em] text-white md:text-[22px]">
        {card.title}
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);

  // =====================================================
  // VIDEO PARALLAX
  // =====================================================
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "8%"]
  );

  return (
    <section
      id="top"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        text-[#01295C]
      "
    >

      {/* =====================================================
          HERO INTRO
      ===================================================== */}
      <div
        className="
          relative
          px-5
          pt-28
          pb-14

          sm:px-6
          sm:pt-32

          md:min-h-[680px]
          md:px-8
          md:pt-0
          md:pb-0

          lg:px-10
        "
      >

        {/* =====================================================
            MAIN HERO COPY
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            relative
            w-full
            max-w-[850px]

            md:absolute
            md:left-8
            md:top-[245px]

            lg:left-10
          "
        >

          {/* =================================================
              PARAGRAPH 1
          ================================================= */}
          <p
            className="
              text-[21px]
              leading-[1.12]
              tracking-[-0.045em]

              sm:text-[23px]

              md:text-[28px]

              lg:text-[31px]
            "
          >
            <span className="text-[#A7A9AC]">
              Every fisherman knows the sea, the changing tides and how to
              bring home the finest catch.
            </span>{" "}
            But the journey doesn’t end at the shore. The catch still needs
            the right market and the value it deserves.
          </p>

          {/* =================================================
              PARAGRAPH 2
          ================================================= */}
          <p
            className="
              mt-4
              text-[21px]
              leading-[1.12]
              tracking-[-0.045em]

              sm:text-[23px]

              md:mt-5
              md:text-[28px]

              lg:text-[31px]
            "
          >
            You bring the expertise. We tell your story and create the
            demand to grow your business around it.
          </p>

          {/* =================================================
              PARAGRAPH 3
          ================================================= */}
          <p
            className="
              mt-4
              max-w-[700px]
              text-[21px]
              leading-[1.12]
              tracking-[-0.045em]
              text-[#01295C]

              sm:text-[23px]

              md:mt-5
              md:text-[28px]

              lg:text-[31px]
            "
          >
            <span
              className="
                underline
                decoration-[#EB2226]
                decoration-[2px]
                underline-offset-[4px]
              "
            >
              Focus on your craft.
            </span>{" "}
            Let Roakfield navigate the rest.
          </p>

        </motion.div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mt-10
            flex
            items-center
            gap-2
            text-[10px]
            tracking-[-0.02em]
            text-[#A7A9AC]

            md:absolute
            md:right-8
            md:top-[350px]
            md:mt-0
            md:gap-3
            md:text-[12px]

            lg:right-10
          "
        >
          <span>[SCROLL]</span>

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#EB2226]"
          >
            ↓
          </motion.span>
        </motion.div>

      </div>

      {/* =====================================================
          VIDEO SECTION – FULL WIDTH NOW
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="w-full"
      >

        {/* =====================================================
            BLUE VIDEO HEADER – now with full width padding
        ===================================================== */}
        {/* <div
          className="
            flex
            h-[46px]
            items-center
            justify-between
            bg-[#01295C]
            px-4

            sm:h-[48px]
            sm:px-5

            md:h-[50px]
            md:px-7

            lg:px-10
          "
        >

          
          <span
            className="
              text-[11px]
              tracking-[-0.035em]
              text-white

              sm:text-[12px]

              md:text-[14px]
            "
          >
            strategy ↔ demand /growth
          </span>

         
          <button
            className="
              group
              flex
              items-center
              gap-2
              text-[10px]
              text-white

              sm:gap-2.5
              sm:text-[11px]

              md:text-[12px]
            "
          >

            <span
              className="
                flex
                h-[20px]
                w-[20px]
                items-center
                justify-center
                rounded-full
                border
                border-white/60
                text-[6px]
                transition-colors
                duration-300
                group-hover:border-[#EB2226]
                group-hover:text-[#EB2226]

                sm:h-[21px]
                sm:w-[21px]

                md:h-[22px]
                md:w-[22px]
                md:text-[7px]
              "
            >
              ▶
            </span>

            <span
              className="
                underline
                underline-offset-[3px]
              "
            >
              Our Approach
            </span>

          </button>

        </div> */}

        {/* =====================================================
            3 HERO CARDS
        ===================================================== */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-4
            px-5
            pt-6

            sm:px-6

            md:grid-cols-3
            md:gap-5
            md:px-8

            lg:px-10
          "
        >
          {HERO_CARDS.map((card, i) => (
            <HeroCard key={card.label} card={card} number={i + 1} />
          ))}
        </div>

      </motion.div>

      {/* =====================================================
          BUSINESS ACCELERATOR – REDUCED SPACING
      ===================================================== */}
      <section
        className="
          w-full
          px-5
          pt-12

          sm:px-6
          sm:pt-16

          md:px-8
          md:pt-20

          lg:px-10
        "
      >

        <div className="w-full">

          {/* =================================================
              PARAGRAPH 1
          ================================================= */}
          <motion.p
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[1100px]
              text-[19px]
              leading-[1.12]
              tracking-[-0.04em]
              text-[#A7A9AC]

              sm:text-[21px]

              md:text-[25px]

              lg:text-[28px]
            "
          >
            Your business deserves more than just marketing. It deserves to
            be seen, trusted, and remembered.
          </motion.p>

          {/* =================================================
              PARAGRAPH 2
          ================================================= */}
          <motion.p
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-3
              max-w-[1100px]
              text-[19px]
              leading-[1.12]
              tracking-[-0.04em]
              text-[#A7A9AC]

              sm:text-[21px]

              md:mt-4
              md:text-[25px]

              lg:text-[28px]
            "
          >
            <span className="text-[#01295C]">
              Roakfield’s Business Accelerator Program
            </span>{" "}
            is curated to be your brand-building partner — working alongside
            you, not just for you.
          </motion.p>

          {/* =================================================
              PARAGRAPH 3
          ================================================= */}
          <motion.p
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-3
              max-w-[1100px]
              text-[19px]
              leading-[1.12]
              tracking-[-0.04em]
              text-[#A7A9AC]

              sm:text-[21px]

              md:mt-4
              md:text-[25px]

              lg:text-[28px]
            "
          >
            We bring together{" "}
            <span className="text-[#01295C]">
              strategy, branding, content, digital marketing & AI
            </span>{" "}
            to turn your vision into a brand people notice, connect with, and
            choose.
          </motion.p>

          {/* =================================================
              PARAGRAPH 4
          ================================================= */}
          <motion.p
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.36,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-3
              max-w-[1000px]
              text-[19px]
              leading-[1.12]
              tracking-[-0.04em]
              text-[#01295C]

              sm:text-[21px]

              md:mt-4
              md:text-[25px]

              lg:text-[28px]
            "
          >
            Because we don’t just want to grow your business.{" "}
            <span
              className="
                underline
                decoration-[#EB2226]
                decoration-[2px]
                underline-offset-[4px]
              "
            >
              We want to build a brand you’ll be proud of.
            </span>
          </motion.p>

        </div>

        {/* =====================================================
            BOTTOM LINKS
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-8
            flex
            w-full
            items-center
            justify-end
            gap-5
            border-b
            border-gray-200
            pb-6

            sm:gap-7
            sm:pb-7

            md:mt-10
            md:gap-9
            md:pb-9
          "
        >

          {/* RED LINE */}
          <motion.span
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-[-1px]
              left-0
              h-[2px]
              w-16
              origin-left
              bg-[#EB2226]

              sm:w-20

              md:w-28
            "
          />

          {/* FILM */}
          <a
            href="#film"
            data-cursor="link"
            className="
              group
              flex
              items-center
              gap-1.5
              text-[12px]
              text-[#01295C]
              transition-colors
              duration-300
              hover:text-[#EB2226]

              sm:text-[13px]
              sm:gap-2

              md:text-[15px]
            "
          >
            <span>Film</span>

            <span
              className="
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:text-[#EB2226]
              "
            >
              ↗
            </span>
          </a>

          {/* DESIGN */}
          <a
            href="#design"
            data-cursor="link"
            className="
              group
              flex
              items-center
              gap-1.5
              text-[12px]
              text-[#01295C]
              transition-colors
              duration-300
              hover:text-[#EB2226]

              sm:text-[13px]
              sm:gap-2

              md:text-[15px]
            "
          >
            <span>Design</span>

            <span
              className="
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:text-[#EB2226]
              "
            >
              ↗
            </span>
          </a>

          {/* RED DOT */}
          <motion.span
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.85,
            }}
            className="
              h-3
              w-3
              rounded-full
              bg-[#EB2226]

              sm:h-3.5
              sm:w-3.5

              md:h-4
              md:w-4
            "
          />

        </motion.div>

      </section>

      {/* =====================================================
          BOTTOM SPACING
      ===================================================== */}
      <div
        className="
          h-8

          sm:h-10

          md:h-12
        "
      />

    </section>
  );
}
