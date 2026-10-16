import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BLUE = "#01295C";
const RED = "#EB2226";
const GRAY = "#A7A9AC";

const PILLARS = [
  {
    id: "film",
    kicker: "Supported By",
    word: "Film",

    grayText:
      "We make films that look good, and say something too. From cinematic brand stories to product films and campaign content, our work blends strategy with style.",

    blueText:
      "Whether it's live-action or motion-led, every frame is crafted to connect, not just decorate. We write, direct, shoot and edit films that help brands speak with clarity, and actually get remembered.",

    images: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=90",
      "https://cdn.pixabay.com/photo/2012/11/04/08/23/cinema-strip-64074_1280.jpg?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1800&q=90",
    ],
  },

  {
    id: "design",
    kicker: "Led By",
    word: "Design",

    grayText:
      "Design is the backbone of everything we do. We build bold brand identities that don't just stand out, they belong.",

    blueText:
      "Whether it's launching something new or refining what's already out there, we use design to create impact, provoke feeling, and give brands the visual confidence they need to lead.",

    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1800&q=90",
    ],
  },
];

const DESCRIPTION_LINES = [
  {
    gray: "Roakfield is a India-based, multi-disciplinary branding agency",
    blue: "",
  },
  {
    gray:
      "working with scale-ups and established businesses on brand identity,",
    blue: "",
  },
  {
    gray: "design maturity, and strategic creative. ",
    blue: "We orbit organisations to",
  },
  {
    gray: "",
    blue:
      "define who they are, shape how they show up, grow, transform and belong.",
  },
];

/* ============================================================
   TRANSITION LANGUAGES
============================================================ */

const FILM_TRANSITIONS = [
  "cinematicZoom",
  "horizontalWipe",
  "diagonalReveal",
  "verticalReveal",
  "cinematicRotate",
  "radialReveal",
];

const DESIGN_TRANSITIONS = [
  "designZoom",
  "verticalSlide",
  "horizontalSlide",
  "cornerReveal",
  "perspectiveReveal",
  "scaleReveal",
];

/* ============================================================
   IMAGE SEQUENCE
============================================================ */

function PillarImageSequence({ pillar }) {
  const frameRef = useRef(null);
  const imagesRef = useRef([]);
  const currentIndex = useRef(0);
  const timerRef = useRef(null);
  const isAnimating = useRef(false);

  useLayoutEffect(() => {
    const frame = frameRef.current;

    if (!frame) return;

    const ctx = gsap.context(() => {
      const imageElements = imagesRef.current.filter(Boolean);

      if (!imageElements.length) return;

      const transitions =
        pillar.id === "film"
          ? FILM_TRANSITIONS
          : DESIGN_TRANSITIONS;

      /* --------------------------------------------------------
         INITIAL STATE
      -------------------------------------------------------- */

      gsap.set(imageElements, {
        opacity: 0,
        visibility: "hidden",

        x: 0,
        y: 0,

        scale: 1,

        rotation: 0,
        rotationX: 0,
        rotationY: 0,

        skewX: 0,
        skewY: 0,

        clipPath: "inset(0% 0% 0% 0%)",

        filter: "blur(0px)",

        transformOrigin: "center center",
      });

      gsap.set(imageElements[0], {
        opacity: 1,
        visibility: "visible",
      });

      /* --------------------------------------------------------
         PRELOAD
      -------------------------------------------------------- */

      pillar.images.forEach((src) => {
        const preload = new Image();

        preload.onload = () => {};
        preload.onerror = () => {};

        preload.src = src;
      });

      /* --------------------------------------------------------
         TRANSITION
      -------------------------------------------------------- */

      const transitionToNext = () => {
        if (isAnimating.current) return;

        isAnimating.current = true;

        const current =
          imageElements[currentIndex.current];

        const nextIndex =
          (currentIndex.current + 1) %
          imageElements.length;

        const next = imageElements[nextIndex];

        const transition =
          transitions[
            currentIndex.current % transitions.length
          ];

        /* RESET NEXT */

        gsap.set(next, {
          visibility: "visible",
          opacity: 1,

          x: 0,
          y: 0,

          scale: 1,

          rotation: 0,
          rotationX: 0,
          rotationY: 0,

          skewX: 0,
          skewY: 0,

          clipPath: "inset(0% 0% 0% 0%)",

          filter: "blur(0px)",

          transformOrigin: "center center",
        });

        const tl = gsap.timeline({
          defaults: {
            overwrite: "auto",
          },

          onComplete: () => {
            gsap.set(current, {
              opacity: 0,
              visibility: "hidden",

              x: 0,
              y: 0,

              scale: 1,

              rotation: 0,
              rotationX: 0,
              rotationY: 0,

              skewX: 0,
              skewY: 0,

              clipPath: "inset(0% 0% 0% 0%)",

              filter: "blur(0px)",
            });

            currentIndex.current = nextIndex;

            isAnimating.current = false;
          },
        });

        /* ======================================================
           FILM
        ====================================================== */

        if (
          pillar.id === "film" &&
          transition === "cinematicZoom"
        ) {
          gsap.set(next, {
            scale: 1.15,
            opacity: 0,
            filter: "blur(7px)",
          });

          tl.to(
            current,
            {
              scale: 0.97,
              opacity: 0.25,
              duration: 0.42,
              ease: "power3.inOut",
            },
            0
          );

          tl.to(
            next,
            {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.48,
              ease: "power4.out",
            },
            0
          );
        }

        else if (
          pillar.id === "film" &&
          transition === "horizontalWipe"
        ) {
          gsap.set(next, {
            clipPath: "inset(0% 100% 0% 0%)",
            scale: 1.03,
          });

          tl.to(
            next,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.52,
              ease: "power4.inOut",
            },
            0
          );

          tl.to(
            current,
            {
              scale: 1.05,
              x: -18,
              opacity: 0.2,
              duration: 0.52,
              ease: "power3.inOut",
            },
            0
          );
        }

        else if (
          pillar.id === "film" &&
          transition === "diagonalReveal"
        ) {
          gsap.set(next, {
            clipPath:
              "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            scale: 1.04,
          });

          tl.to(
            next,
            {
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 0.55,
              ease: "power4.inOut",
            },
            0
          );

          tl.to(
            current,
            {
              scale: 1.05,
              x: -20,
              opacity: 0.2,
              duration: 0.52,
              ease: "power3.inOut",
            },
            0
          );
        }

        else if (
          pillar.id === "film" &&
          transition === "verticalReveal"
        ) {
          gsap.set(next, {
            clipPath: "inset(100% 0% 0% 0%)",
            scale: 1.03,
          });

          tl.to(
            next,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.55,
              ease: "power4.inOut",
            },
            0
          );

          tl.to(
            current,
            {
              y: -22,
              scale: 1.04,
              opacity: 0.25,
              duration: 0.52,
              ease: "power3.inOut",
            },
            0
          );
        }

        else if (
          pillar.id === "film" &&
          transition === "cinematicRotate"
        ) {
          gsap.set(next, {
            opacity: 0,
            scale: 1.06,
            rotation: 2,
            x: 25,
            filter: "blur(3px)",
          });

          tl.to(
            current,
            {
              rotation: -1.2,
              x: -18,
              scale: 1.03,
              opacity: 0,
              duration: 0.5,
              ease: "power3.inOut",
            },
            0
          );

          tl.to(
            next,
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              x: 0,
              filter: "blur(0px)",
              duration: 0.55,
              ease: "power4.out",
            },
            0
          );
        }

        else if (
          pillar.id === "film" &&
          transition === "radialReveal"
        ) {
          gsap.set(next, {
            clipPath: "circle(0% at 50% 50%)",
            scale: 1.04,
          });

          tl.to(
            next,
            {
              clipPath: "circle(100% at 50% 50%)",
              duration: 0.58,
              ease: "power4.inOut",
            },
            0
          );

          tl.to(
            current,
            {
              scale: 1.06,
              opacity: 0.15,
              duration: 0.52,
              ease: "power3.inOut",
            },
            0
          );
        }

        /* ======================================================
           DESIGN
        ====================================================== */

        else if (
          pillar.id === "design" &&
          transition === "designZoom"
        ) {
          gsap.set(next, {
            opacity: 0,
            scale: 0.9,
            filter: "blur(8px)",
          });

          tl.to(
            current,
            {
              scale: 1.06,
              opacity: 0,
              duration: 0.45,
              ease: "power3.inOut",
            },
            0
          );

          tl.to(
            next,
            {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.52,
              ease: "power4.out",
            },
            0
          );
        }

        else if (
          pillar.id === "design" &&
          transition === "verticalSlide"
        ) {
          gsap.set(next, {
            y: "100%",
            scale: 1.03,
          });

          tl.to(
            next,
            {
              y: "0%",
              duration: 0.55,
              ease: "power4.inOut",
            },
            0
          );

          tl.to(
            current,
            {
              y: "-10%",
              scale: 1.04,
              opacity: 0.25,
              duration: 0.55,
              ease: "power4.inOut",
            },
            0
          );
        }

        else if (
          pillar.id === "design" &&
          transition === "horizontalSlide"
        ) {
          gsap.set(next, {
            x: "100%",
            scale: 1.02,
          });

          tl.to(
            next,
            {
              x: "0%",
              duration: 0.55,
              ease: "power4.inOut",
            },
            0
          );

          tl.to(
            current,
            {
              x: "-10%",
              scale: 1.04,
              opacity: 0.2,
              duration: 0.55,
              ease: "power4.inOut",
            },
            0
          );
        }

        else if (
          pillar.id === "design" &&
          transition === "cornerReveal"
        ) {
          gsap.set(next, {
            clipPath:
              "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
            scale: 1.03,
          });

          tl.to(
            next,
            {
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 0.58,
              ease: "power4.inOut",
            },
            0
          );

          tl.to(
            current,
            {
              scale: 1.06,
              rotation: -0.8,
              opacity: 0.2,
              duration: 0.52,
              ease: "power3.inOut",
            },
            0
          );
        }

        else if (
          pillar.id === "design" &&
          transition === "perspectiveReveal"
        ) {
          gsap.set(next, {
            opacity: 0,
            rotationY: 10,
            rotationX: 2,
            scale: 1.06,
            x: 28,
            transformOrigin: "right center",
            filter: "blur(2px)",
          });

          gsap.set(current, {
            transformOrigin: "left center",
          });

          tl.to(
            current,
            {
              rotationY: -7,
              x: -25,
              opacity: 0,
              scale: 1.03,
              duration: 0.5,
              ease: "power4.inOut",
            },
            0
          );

          tl.to(
            next,
            {
              opacity: 1,
              rotationY: 0,
              rotationX: 0,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.58,
              ease: "power4.out",
            },
            0
          );
        }

        else if (
          pillar.id === "design" &&
          transition === "scaleReveal"
        ) {
          gsap.set(next, {
            clipPath: "inset(8% 8% 8% 8%)",
            scale: 0.84,
            opacity: 0,
          });

          tl.to(
            current,
            {
              scale: 1.08,
              opacity: 0,
              duration: 0.48,
              ease: "power4.inOut",
            },
            0
          );

          tl.to(
            next,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              scale: 1,
              opacity: 1,
              duration: 0.58,
              ease: "power4.out",
            },
            0
          );
        }
      };

      /* --------------------------------------------------------
         FAST IMAGE ROTATION
      -------------------------------------------------------- */

      timerRef.current = setInterval(() => {
        transitionToNext();
      }, 800);
    }, frame);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      ctx.revert();
    };
  }, [pillar]);

  /* ----------------------------------------------------------
     CINEMATIC BACKGROUND MOVEMENT

     Uses CSS animation-style GSAP properties but does not
     constantly fight with the main transition timeline.
  ---------------------------------------------------------- */

  useLayoutEffect(() => {
    const imageElements = imagesRef.current.filter(Boolean);

    if (!imageElements.length) return;

    const ctx = gsap.context(() => {
      imageElements.forEach((image, index) => {
        gsap.to(image, {
          scale: index % 2 === 0 ? 1.025 : 1.02,
          duration: 5 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    });

    return () => ctx.revert();
  }, [pillar]);

  return (
    <div
      ref={frameRef}
      className="
        relative
        mt-16
        w-full
        overflow-hidden
        bg-[#01295C]

        md:mt-24
      "
      style={{
        perspective: "1400px",
      }}
    >
      {/* ======================================================
          IMAGE STACK
      ====================================================== */}

      {pillar.images.map((src, index) => (
        <img
          key={`${pillar.id}-${index}`}
          ref={(element) => {
            imagesRef.current[index] = element;
          }}
          src={src}
          alt=""
          loading={index === 0 ? "eager" : "lazy"}
          className="
            absolute
            inset-0
            block
            h-full
            w-full
            object-cover
            will-change-transform
          "
          style={{
            visibility:
              index === 0 ? "visible" : "hidden",
            opacity: index === 0 ? 1 : 0,
          }}
        />
      ))}

      {/* ======================================================
          FRAME HEIGHT
      ====================================================== */}

      <div
        className="
          relative
          h-[42vh]
          min-h-[280px]
          w-full

          md:h-[55vh]
          md:min-h-[420px]
        "
      />

      {/* ======================================================
          SUBTLE OVERLAY
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />

      {/* ======================================================
          RED FRAME ACCENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-[2px]
          w-20
          bg-[#EB2226]
        "
      />

      {/* ======================================================
          INDEX
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-5
          z-20
          font-mono
          text-[9px]
          tracking-[0.15em]
          text-white/70
        "
      >
        {pillar.id === "film" ? "FILM" : "DESIGN"}
      </div>

      {/* ======================================================
          CORNER MARK
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-5
          left-5
          z-20
          flex
          items-center
          gap-2
          text-[8px]
          uppercase
          tracking-[0.18em]
          text-white/60
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

        Roakfield
      </div>
    </div>
  );
}

/* ============================================================
   MAIN PILLARS
============================================================ */

export default function Pillars() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ======================================================
         PILLAR REVEALS
      ====================================================== */

      gsap.utils
        .toArray(".pillar-section")
        .forEach((section) => {
          const kicker =
            section.querySelector(".pillar-kicker");

          const title =
            section.querySelector(".pillar-title");

          const accent =
            section.querySelector(".pillar-accent");

          const body =
            section.querySelector(".pillar-body");

          const image =
            section.querySelector(".pillar-image");

          const link =
            section.querySelector(".pillar-link");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions:
                "play none none reverse",
            },
          });

          tl.fromTo(
            kicker,
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power3.out",
            }
          )

            .fromTo(
              title,
              {
                opacity: 0,
                y: 30,
                clipPath:
                  "inset(100% 0 0 0)",
              },
              {
                opacity: 1,
                y: 0,
                clipPath:
                  "inset(0% 0 0 0)",
                duration: 0.65,
                ease: "power4.out",
              },
              "-=0.2"
            )

            .fromTo(
              accent,
              {
                scaleX: 0,
                transformOrigin:
                  "left center",
              },
              {
                scaleX: 1,
                duration: 0.4,
                ease: "power3.out",
              },
              "-=0.25"
            )

            .fromTo(
              body,
              {
                opacity: 0,
                y: 25,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power3.out",
              },
              "-=0.15"
            )

            .fromTo(
              image,
              {
                opacity: 0,
                y: 25,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
              },
              "-=0.3"
            )

            .fromTo(
              link,
              {
                opacity: 0,
                y: 10,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "power3.out",
              },
              "-=0.25"
            );
        });

      /* ======================================================
         IMAGE PARALLAX
      ====================================================== */

      gsap.utils
        .toArray(".pillar-image-parallax")
        .forEach((image) => {
          gsap.to(image, {
            yPercent: -6,
            ease: "none",

            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        });

      /* ======================================================
         ABOUT
      ====================================================== */

      const descriptionSection =
        sectionRef.current?.querySelector(
          ".description-section"
        );

      if (descriptionSection) {
        const label =
          descriptionSection.querySelector(
            ".description-label"
          );

        const lines =
          descriptionSection.querySelectorAll(
            ".description-line"
          );

        const accent =
          descriptionSection.querySelector(
            ".description-accent"
          );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: descriptionSection,
            start: "top 78%",
            toggleActions:
              "play none none reverse",
          },
        });

        tl.fromTo(
          label,
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          }
        )

          .fromTo(
            lines,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.07,
              ease: "power3.out",
            },
            "-=0.15"
          )

          .fromTo(
            accent,
            {
              scaleX: 0,
              transformOrigin: "left",
            },
            {
              scaleX: 1,
              duration: 0.5,
            },
            "-=0.25"
          );
      }

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-white
        text-[#01295C]
      "
    >
      {/* ======================================================
          PILLARS
      ====================================================== */}

      <div className="border-t border-[#A7A9AC]/30">
        {PILLARS.map((pillar) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className="
              pillar-section
              grid
              min-h-[110vh]
              grid-cols-1
              border-b
              border-[#A7A9AC]/30

              md:grid-cols-[0.72fr_1.28fr]
            "
          >
            {/* ==================================================
                LEFT — STICKY
            ================================================== */}

            <div
              className="
                md:sticky
                md:top-0
                md:h-screen
                md:self-start
              "
            >
              <div
                className="
                  px-5
                  pt-12

                  md:px-10
                  md:pt-16

                  lg:px-12
                "
              >
                {/* LABEL */}

                <p
                  className="
                    pillar-kicker
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#A7A9AC]

                    md:text-[10px]
                  "
                >
                  {pillar.kicker}
                </p>

                {/* TITLE */}

                <h2
                  className="
                    pillar-title
                    display
                    mt-4

                    text-[18vw]
                    leading-[0.8]
                    tracking-[-0.07em]
                    text-[#01295C]

                    md:text-[8vw]

                    lg:text-[7vw]
                  "
                >
                  {pillar.word}

                  <span
                    className="
                      ml-2
                      inline-block
                      h-3
                      w-3
                      translate-y-[-8%]
                      rounded-full
                      bg-[#EB2226]
                      align-middle

                      md:h-4
                      md:w-4
                    "
                  />
                </h2>

                {/* RED LINE */}

                <div
                  className="
                    pillar-accent
                    mt-5
                    h-[2px]
                    w-14
                    origin-left
                    bg-[#EB2226]

                    md:w-16
                  "
                />
              </div>
            </div>

            {/* ==================================================
                RIGHT
            ================================================== */}

            <div
              className="
                px-5
                pb-24
                pt-10

                md:px-10
                md:pb-32
                md:pt-16

                lg:px-12
                lg:pt-16
              "
            >
              <div className="max-w-5xl">
                {/* TEXT */}

                <p
                  className="
                    pillar-body
                    max-w-4xl

                    text-[clamp(1.2rem,2.1vw,2.15rem)]
                    leading-[1.12]
                    tracking-[-0.04em]
                  "
                >
                  <span className="text-[#A7A9AC]">
                    {pillar.grayText}
                  </span>{" "}

                  <span className="text-[#01295C]">
                    {pillar.blueText}
                  </span>
                </p>

                {/* IMAGE */}

                <div className="pillar-image">
                  <PillarImageSequence
                    pillar={pillar}
                  />
                </div>

                {/* LINK */}

                <a
                  href="#work"
                  className="
                    pillar-link
                    group

                    mt-8
                    inline-flex
                    items-center
                    gap-2

                    border-b
                    border-[#A7A9AC]/50
                    pb-1.5

                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-[#A7A9AC]

                    transition-all
                    duration-300

                    hover:border-[#EB2226]
                    hover:text-[#EB2226]

                    md:text-[11px]
                  "
                >
                  <span>See the work</span>

                  <span
                    className="
                      text-sm
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ======================================================
          ABOUT ROAKFIELD
      ====================================================== */}

      <section
        className="
          description-section
          border-b
          border-[#A7A9AC]/30

          px-5
          py-10

          md:px-10
          md:py-12

          lg:px-12
          lg:py-16
        "
      >
        <div
          className="
            grid
            gap-8

            md:grid-cols-[0.72fr_1.28fr]
            md:gap-10
          "
        >
          {/* LEFT */}

          <div>
            <span
              className="
                description-label
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#01295C]

                md:text-[10px]
              "
            >
              About Roakfield
            </span>

            <div
              className="
                description-accent
                mt-5
                h-[2px]
                w-14
                origin-left
                bg-[#EB2226]

                md:w-16
              "
            />
          </div>

          {/* RIGHT */}

          <div className="max-w-5xl">
            {DESCRIPTION_LINES.map(
              (line, index) => (
                <div
                  key={index}
                  className="
                    description-line
                    display

                    text-[clamp(1.35rem,2.6vw,2rem)]
                    leading-[1.08]
                    tracking-[-0.045em]
                  "
                >
                  <span className="text-[#A7A9AC]">
                    {line.gray}
                  </span>

                  {line.blue && (
                    <span className="text-[#01295C]">
                      {line.blue}
                    </span>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <div className="h-8 md:h-12" />
    </section>
  );
}