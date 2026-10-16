import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================================
   SERVICES
========================================================= */

const SERVICES = [
  {
    lines: ["Advisory", "& Consulting"],
    progress: 20,
  },
  {
    lines: ["Brand", "Identity"],
    progress: 40,
  },
  {
    lines: ["Go To", "Market Strategy"],
    progress: 60,
  },
  {
    lines: ["Demand", "Generation"],
    progress: 80,
  },
  {
    lines: ["Sales Strategy", "& Process"],
    progress: 100,
  },
];

/* =========================================================
   BRAND
========================================================= */

const BLUE = "#01295C";
const RED = "#EB2226";
const WHITE = "#FFFFFF";
const MUTED = "#A7A9AC";

/* =========================================================
   SPLASH
========================================================= */

export default function Splash() {
  const [index, setIndex] = useState(0);
  const [blueReveal, setBlueReveal] = useState(false);
  const [finished, setFinished] = useState(false);

  const current = SERVICES[index];

  /*
   * Text becomes white once the blue area becomes dominant.
   */
  const textOnBlue = current.progress >= 60;

  /* =======================================================
     LOCK PAGE SCROLL
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = finished ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [finished]);

  /* =======================================================
     SERVICE SEQUENCE
  ======================================================= */

  useEffect(() => {
    if (blueReveal) return;

    const timer = setTimeout(() => {
      if (index < SERVICES.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        /*
         * Very short hold at 100%.
         */
        setTimeout(() => {
          setBlueReveal(true);
        }, 100);
      }
    }, 1100);

    return () => clearTimeout(timer);
  }, [index, blueReveal]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            bg-white
          "
          initial={{
            y: "0%",
          }}
          animate={{
            y: blueReveal ? "-100%" : "0%",
          }}
          transition={{
            duration: blueReveal ? 1.5 : 0,
            ease: [0.76, 0, 0.24, 1],
          }}
          onAnimationComplete={() => {
            if (blueReveal) {
              setFinished(true);
            }
          }}
        >
          {/* =================================================
              BLUE BASE
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-[#01295C]
            "
          />

          {/* =================================================
              WHITE SHUTTER
          ================================================= */}

          <motion.div
            className="
              absolute
              left-0
              top-0
              w-full
              bg-white
            "
            animate={{
              height: `${100 - current.progress}%`,
            }}
            transition={{
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          {!blueReveal && (
            <div
              className="
                pointer-events-none
                absolute
                inset-0
              "
            >
              <div
                className="
                  relative
                  h-full
                  w-full
                  font-['Archivo']
                "
              >
                {/* =================================================
                    CENTER DOT
                ================================================= */}

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-[13%]

                    h-[9px]
                    w-[9px]

                    -translate-x-1/2
                    rounded-full
                    bg-[#EB2226]

                    sm:h-[11px]
                    sm:w-[11px]

                    md:top-[16%]
                    md:h-[13px]
                    md:w-[13px]
                  "
                />

                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div
                  className="
                    absolute

                    left-5
                    right-5
                    bottom-[27%]

                    flex
                    items-start
                    gap-4

                    transition-colors
                    duration-700

                    sm:left-6
                    sm:right-6
                    sm:gap-5

                    md:left-[30px]
                    md:right-auto
                    md:bottom-[50%]
                    md:gap-10

                    lg:left-[32px]
                  "
                  style={{
                    color: textOnBlue ? WHITE : BLUE,
                  }}
                >
                  {/* ===============================================
                      PERCENTAGE
                  =============================================== */}

                  <div
                    className="
                      w-[42px]
                      shrink-0

                      font-medium
                      text-[22px]
                      leading-none
                      tracking-[-0.045em]

                      sm:w-[50px]
                      sm:text-[27px]

                      md:w-[65px]
                      md:text-[34px]

                      lg:text-[38px]
                    "
                  >
                    {current.progress}%
                  </div>

                  {/* ===============================================
                      SERVICE TEXT
                  =============================================== */}

                  <div
                    className="
                      relative
                      min-w-0
                      flex-1
                      overflow-hidden

                      md:min-w-[390px]
                      md:flex-none

                      lg:min-w-[430px]
                    "
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={index}
                        initial={{
                          y: "110%",
                          opacity: 0,
                        }}
                        animate={{
                          y: "0%",
                          opacity: 1,
                        }}
                        exit={{
                          y: "-110%",
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.65,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                        className="
                          flex
                          flex-col

                          text-[23px]
                          leading-[0.98]
                          tracking-[-0.045em]

                          sm:text-[27px]

                          md:text-[34px]

                          lg:text-[38px]
                        "
                      >
                        <span>
                          {current.lines[0]}
                        </span>

                        <span className="relative inline-block w-fit">
                          {current.lines[1]}

                          {/* Red accent line */}

                          <motion.span
                            key={`line-${index}`}
                            initial={{
                              width: 0,
                            }}
                            animate={{
                              width: "100%",
                            }}
                            transition={{
                              duration: 0.7,
                              delay: 0.15,
                              ease: [0.76, 0, 0.24, 1],
                            }}
                            className="
                              absolute
                              bottom-[-4px]
                              left-0
                              h-[2px]
                              bg-[#EB2226]

                              sm:bottom-[-5px]
                            "
                          />
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* =================================================
                    MOBILE BRAND
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                  }}
                  className="
                    absolute
                    left-5
                    bottom-[17%]

                    font-medium
                    text-[18px]
                    leading-none
                    tracking-[-0.045em]

                    transition-colors
                    duration-700

                    sm:left-6
                    sm:text-[21px]

                    md:hidden
                  "
                  style={{
                    color: textOnBlue ? WHITE : BLUE,
                  }}
                >
                  ROAKFIELD
                </motion.div>

                {/* =================================================
                    DESKTOP BRAND
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                  }}
                  className="
                    hidden

                    md:absolute
                    md:right-[30px]
                    md:bottom-[50%]
                    md:block

                    md:text-[32px]

                    font-medium
                    leading-none
                    tracking-[-0.045em]

                    transition-colors
                    duration-700

                    lg:right-[32px]
                    lg:text-[36px]
                  "
                  style={{
                    color: textOnBlue ? WHITE : BLUE,
                  }}
                >
                  ROAKFIELD
                </motion.div>

                {/* =================================================
                    MOBILE RED INDEX LINE
                ================================================= */}

                <motion.div
                  initial={{
                    scaleX: 0,
                    transformOrigin: "left",
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="
                    absolute
                    bottom-[13%]
                    left-5

                    h-[2px]
                    w-[30px]
                    bg-[#EB2226]

                    sm:left-6
                    sm:w-[36px]

                    md:hidden
                  "
                />

                {/* =================================================
                    DESKTOP RED INDEX LINE
                ================================================= */}

                <motion.div
                  initial={{
                    scaleX: 0,
                    transformOrigin: "left",
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="
                    hidden

                    md:absolute
                    md:bottom-[48%]
                    md:left-[30px]
                    md:block

                    md:h-[2px]
                    md:w-[42px]

                    bg-[#EB2226]
                  "
                />

                {/* =================================================
                    MOBILE SERVICE LABEL
                ================================================= */}

                <div
                  className="
                    absolute
                    right-5
                    bottom-[13%]

                    text-right
                    font-medium
                    text-[8px]
                    uppercase
                    tracking-[0.18em]

                    transition-colors
                    duration-700

                    sm:right-6
                    sm:text-[9px]

                    md:hidden
                  "
                  style={{
                    color: textOnBlue ? WHITE : MUTED,
                  }}
                >
                  ROAKFIELD / SERVICES
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}