import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

/*
|--------------------------------------------------------------------------
| ROAKFIELD — NAMASKARAM PHOTO VIDEO
|--------------------------------------------------------------------------
|
| This is a VIDEO-LIKE PHOTO MONTAGE.
|
| It does NOT use an MP4.
|
| GSAP controls:
| - image changes
| - image zoom
| - image movement
| - text
| - category labels
| - progress
| - transitions
|
|--------------------------------------------------------------------------
*/

const BLUE = "#01295C";
const RED = "#EB2226";
const WHITE = "#FFFFFF";
const GREY = "#A7A9AC";

const OPENING_DELAY = 2;
const GREETING_DURATION = 0.5;
const PHOTO_DURATION = 0.5;

/*
|--------------------------------------------------------------------------
| IMAGE SOURCES
|--------------------------------------------------------------------------
|
| These are online image URLs.
|
| For production, replace them later with your final approved/licensed
| photographs in /public/images/...
|
|--------------------------------------------------------------------------
*/

/* -----------------------------------------------------------------------
   GREETINGS
------------------------------------------------------------------------ */

const GREETINGS = [
  {
    title: "Hello",
    subtitle: "English",
    category: "HELLO",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Bharat_Mandapam_Pragati_Maidan.jpg/960px-Bharat_Mandapam_Pragati_Maidan.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail?auto=format&fit=crop&w=2000&q=90",
    font: "Archivo",
  },

  {
    title: "नमस्ते",
    subtitle: "Namaste",
    category: "HINDI",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=2000&q=90",
    font: "'Noto Sans Devanagari', sans-serif",
  },

  {
    title: "নমস্কার",
    subtitle: "Nomoskaar",
    category: "BENGALI",
    image:
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=2000&q=90",
    font: "'Noto Sans Bengali', sans-serif",
  },

  {
    title: "வணக்கம்",
    subtitle: "Vanakkam",
    category: "TAMIL",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=90",
    font: "'Noto Sans Tamil', sans-serif",
  },
];

/* -----------------------------------------------------------------------
   INDIA
------------------------------------------------------------------------ */

const INDIA = [
  {
    title: "Bharat Mandapam",
    category: "INDIA",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Chenab Bridge",
    category: "INDIA",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Statue of Unity",
    category: "GUJARAT",
    image:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Vande Bharat",
    category: "INDIA",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Kerala Boat Race",
    category: "KERALA",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Kolkata Tram",
    category: "KOLKATA",
    image:
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Chennai Railway Station",
    category: "CHENNAI",
    image:
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Bandra–Worli Sea Link",
    category: "MUMBAI",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Vidhana Soudha",
    category: "BANGALORE",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Kathakali",
    category: "KERALA",
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Konark Temple",
    category: "ODISHA",
    image:
      "https://images.unsplash.com/photo-1600100397608-f0106c5f4c1f?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Narendra Modi Stadium",
    category: "AHMEDABAD",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=2000&q=90",
  },
];

/* -----------------------------------------------------------------------
   PRODUCTION / CREATIVE
------------------------------------------------------------------------ */

const PRODUCTION = [
  {
    title: "Fashion Runway",
    category: "FASHION",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Podcast",
    category: "PODCAST",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Luxury Product Shoot",
    category: "PRODUCT",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Food",
    category: "PRODUCT SHOOT",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Ladies Purse",
    category: "BTS · PRODUCT",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Jewellery",
    category: "BTS · PRODUCT",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Perfumes",
    category: "PRODUCT",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Real Estate",
    category: "REAL ESTATE",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Model",
    category: "BTS · FASHION",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Chroma Shoot",
    category: "PRODUCTION",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Ad Shoot",
    category: "ADVERTISING",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Outdoor Shoot",
    category: "BTS · PRODUCTION",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Makeup",
    category: "BTS · BEAUTY",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Sound Recording",
    category: "AUDIO",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Mixing",
    category: "AUDIO",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Singing",
    category: "MUSIC",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2000&q=90",
  },
];

/* -----------------------------------------------------------------------
   OFFICE
------------------------------------------------------------------------ */

const OFFICE = [
  {
    title: "Branding",
    category: "OFFICE",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Presentation",
    category: "OFFICE",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Graphs",
    category: "SCREEN SHARE",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Client Meeting",
    category: "OFFICE",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Crafts",
    category: "CREATIVE",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Team Meeting",
    category: "OFFICE",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Digital Marketing",
    category: "SCREEN SHARE",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Hoardings",
    category: "ADVERTISING",
    image:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "TV Ads",
    category: "ADVERTISING",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=2000&q=90",
  },
];

/* -----------------------------------------------------------------------
   GRAPHICS
------------------------------------------------------------------------ */

const GRAPHICS = [
  {
    title: "Video Editing",
    category: "SCREEN SHARE",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "Sound Mixing & Editing",
    category: "SCREEN SHARE",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2000&q=90",
  },

  {
    title: "AI Cloning",
    category: "AI TECHNOLOGY",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=90",
    ai: true,
  },
];

/* -----------------------------------------------------------------------
   COMPLETE SEQUENCE
------------------------------------------------------------------------ */

const VIDEO_SEQUENCE = [
  ...GREETINGS,
  ...INDIA,
  ...PRODUCTION,
  ...OFFICE,
  ...GRAPHICS,
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

const NamaskaramIntro = ({
  onComplete,
  contained = false,
  loop = false,
}) => {
  const rootRef = useRef(null);

  const imageRef = useRef(null);
  const imageNextRef = useRef(null);

  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const categoryRef = useRef(null);
  const redLineRef = useRef(null);

  const progressRef = useRef(null);
  const frameRef = useRef(null);
  const totalRef = useRef(null);

  const timelineRef = useRef(null);
  const exitingRef = useRef(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const current = VIDEO_SEQUENCE[currentIndex];

  /*
  |--------------------------------------------------------------------------
  | PRELOAD ALL IMAGES
  |--------------------------------------------------------------------------
  */

  const images = useMemo(
    () => VIDEO_SEQUENCE.map((item) => item.image),
    []
  );

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  /*
  |--------------------------------------------------------------------------
  | BODY SCROLL LOCK
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!contained) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (!contained) {
        document.body.style.overflow = "";
      }
    };
  }, [contained]);

  /*
  |--------------------------------------------------------------------------
  | EXIT
  |--------------------------------------------------------------------------
  */

  const finishIntro = () => {
    if (exitingRef.current) return;

    exitingRef.current = true;

    const root = rootRef.current;

    if (!root) {
      onComplete?.();
      return;
    }

    gsap.killTweensOf(root);

    gsap.to(root, {
      clipPath: "circle(0% at 50% 50%)",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        onComplete?.();
      },
    });
  };

  /*
  |--------------------------------------------------------------------------
  | CHANGE FRAME
  |--------------------------------------------------------------------------
  */

  const showFrame = (index) => {
    const item = VIDEO_SEQUENCE[index];

    if (!item) return;

    setCurrentIndex(index);

    const image = imageRef.current;
    const nextImage = imageNextRef.current;

    if (!image || !nextImage) return;

    /*
    ---------------------------------------------------------------
    Move current image away slightly
    ---------------------------------------------------------------
    */

    gsap.set(nextImage, {
      opacity: 0,
      scale: 1.08,
      x: index % 2 === 0 ? "2%" : "-2%",
    });

    nextImage.src = item.image;

    /*
    ---------------------------------------------------------------
    Crossfade
    ---------------------------------------------------------------
    */

    gsap.to(image, {
      opacity: 0,
      scale: 1.04,
      duration: 0.16,
      ease: "power2.in",
    });

    gsap.to(nextImage, {
      opacity: 1,
      scale: 1,
      x: "0%",
      duration: 0.32,
      ease: "power3.out",
      onComplete: () => {
        image.src = item.image;

        gsap.set(image, {
          opacity: 1,
          scale: 1,
          x: "0%",
        });

        gsap.set(nextImage, {
          opacity: 0,
        });
      },
    });

    /*
    ---------------------------------------------------------------
    CONTENT
    ---------------------------------------------------------------
    */

    const content = contentRef.current;

    gsap.killTweensOf([
      content,
      titleRef.current,
      subtitleRef.current,
      categoryRef.current,
      redLineRef.current,
    ]);

    gsap.set(content, {
      opacity: 0,
      y: 22,
    });

    gsap.set(titleRef.current, {
      opacity: 0,
      y: 25,
      filter: "blur(8px)",
    });

    gsap.set(subtitleRef.current, {
      opacity: 0,
      y: 12,
    });

    gsap.set(categoryRef.current, {
      opacity: 0,
      y: 8,
    });

    gsap.set(redLineRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.to(content, {
      opacity: 1,
      y: 0,
      duration: 0.18,
      ease: "power2.out",
    });

    gsap.to(categoryRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.18,
      delay: 0.03,
      ease: "power2.out",
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.28,
      delay: 0.04,
      ease: "power3.out",
    });

    gsap.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      delay: 0.1,
      ease: "power2.out",
    });

    gsap.to(redLineRef.current, {
      scaleX: 1,
      duration: 0.25,
      delay: 0.05,
      ease: "power3.out",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | MASTER TIMELINE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      showFrame(0);

      const timer = setTimeout(() => {
        finishIntro();
      }, 1000);

      return () => clearTimeout(timer);
    }

    const tl = gsap.timeline({
      delay: OPENING_DELAY,
    });

    timelineRef.current = tl;

    /*
    ------------------------------------------------------------------------
    INITIAL FRAME
    ------------------------------------------------------------------------
    */

    tl.call(() => {
      showFrame(0);
    });

    /*
    ------------------------------------------------------------------------
    EVERY FRAME
    ------------------------------------------------------------------------
    */

    for (let i = 1; i < VIDEO_SEQUENCE.length; i++) {
      tl.to(
        {},
        {
          duration:
            i <= GREETINGS.length
              ? GREETING_DURATION
              : PHOTO_DURATION,
        }
      );

      tl.call(() => {
        showFrame(i);
      });
    }

    /*
    ------------------------------------------------------------------------
    HOLD FINAL FRAME
    ------------------------------------------------------------------------
    */

    tl.to(
      {},
      {
        duration: 0.7,
      }
    );

    /*
    ------------------------------------------------------------------------
    LOOP OR EXIT
    ------------------------------------------------------------------------
    */

    if (loop) {
      tl.repeat(-1);
    } else {
      tl.call(() => {
        finishIntro();
      });
    }

    return () => {
      tl.kill();
      timelineRef.current = null;
    };
  }, [loop]);

  /*
  |--------------------------------------------------------------------------
  | PROGRESS BAR
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!progressRef.current) return;

    const percentage =
      ((currentIndex + 1) / VIDEO_SEQUENCE.length) * 100;

    gsap.to(progressRef.current, {
      width: `${percentage}%`,
      duration: 0.25,
      ease: "power2.out",
    });

    if (frameRef.current) {
      frameRef.current.textContent = String(
        currentIndex + 1
      ).padStart(2, "0");
    }

    if (totalRef.current) {
      totalRef.current.textContent = String(
        VIDEO_SEQUENCE.length
      ).padStart(2, "0");
    }
  }, [currentIndex]);

  /*
  |--------------------------------------------------------------------------
  | SKIP
  |--------------------------------------------------------------------------
  */

  const handleSkip = () => {
    timelineRef.current?.kill();
    finishIntro();
  };

  /*
  |--------------------------------------------------------------------------
  | REDUCED / CONTAINED
  |--------------------------------------------------------------------------
  */

  const rootClasses = contained
    ? "absolute inset-0 overflow-hidden"
    : "fixed inset-0 z-[9999] overflow-hidden";

  /*
  |--------------------------------------------------------------------------
  | RENDER
  |--------------------------------------------------------------------------
  */

  return (
    <div
      ref={rootRef}
      className={rootClasses}
      style={{
        backgroundColor: BLUE,
        clipPath: "circle(150% at 50% 50%)",
      }}
    >
      {/* ================================================================ */}
      {/* IMAGE LAYER */}
      {/* ================================================================ */}

      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={GREETINGS[0].image}
          alt=""
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: "scale(1)",
            opacity: 1,
          }}
        />

        <img
          ref={imageNextRef}
          src=""
          alt=""
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: "scale(1.08)",
            opacity: 0,
          }}
        />
      </div>

      {/* ================================================================ */}
      {/* BLUE BRAND OVERLAY */}
      {/* ================================================================ */}

      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(1,41,92,0.78) 0%,
              rgba(1,41,92,0.40) 48%,
              rgba(1,41,92,0.18) 100%
            )
          `,
        }}
      />

      {/* ================================================================ */}
      {/* BOTTOM CINEMATIC GRADIENT */}
      {/* ================================================================ */}

      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "linear-gradient(to top, rgba(1,41,92,0.92) 0%, rgba(1,41,92,0.3) 45%, rgba(1,41,92,0.1) 100%)",
        }}
      />

      {/* ================================================================ */}
      {/* SUBTLE GRAIN */}
      {/* ================================================================ */}

      <div
        className="pointer-events-none absolute inset-0 z-[4] opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 0.6px, transparent 0.6px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* ================================================================ */}
      {/* TOP BRAND */}
      {/* ================================================================ */}

      <div className="absolute left-6 right-6 top-6 z-30 flex items-center justify-between md:left-8 md:right-8 md:top-8">
        <div
          className="text-[11px] font-medium uppercase tracking-[0.28em]"
          style={{
            color: WHITE,
          }}
        >
          ROAKFIELD
        </div>

        {!contained && (
          <button
            type="button"
            onClick={handleSkip}
            className="border border-white/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-white hover:text-white"
          >
            Skip
          </button>
        )}
      </div>

      {/* ================================================================ */}
      {/* CENTER CONTENT */}
      {/* ================================================================ */}

      <div
        ref={contentRef}
        className="absolute inset-0 z-20 flex items-center justify-center px-6"
      >
        <div className="w-full max-w-[1250px] text-center">
          {/* CATEGORY */}

          <div
            ref={categoryRef}
            className="mb-5 flex items-center justify-center gap-4"
          >
            <span
              className="h-[2px] w-9"
              style={{
                backgroundColor: RED,
              }}
            />

            <span
              className="text-[10px] font-medium uppercase tracking-[0.32em]"
              style={{
                color: "rgba(255,255,255,0.72)",
              }}
            >
              {current.category}
            </span>

            <span
              className="h-[2px] w-9"
              style={{
                backgroundColor: RED,
              }}
            />
          </div>

          {/* TITLE */}

          <h1
            ref={titleRef}
            className="font-medium leading-[0.92] tracking-[-0.055em]"
            style={{
              color: WHITE,
              fontFamily:
                current.font ||
                "'Archivo', ui-sans-serif, system-ui, sans-serif",
              fontSize:
                current.font && current.font !== "Archivo"
                  ? "clamp(64px, 13vw, 175px)"
                  : "clamp(48px, 8vw, 115px)",
              textShadow:
                "0 12px 50px rgba(0,0,0,0.28)",
            }}
          >
            {current.title}
          </h1>

          {/* SUBTITLE */}

          <div
            ref={subtitleRef}
            className="mt-5 text-[11px] uppercase tracking-[0.28em]"
            style={{
              color: "rgba(255,255,255,0.58)",
            }}
          >
            {current.subtitle || current.category}
          </div>

          {/* AI CLONING */}

          {current.ai && (
            <div className="mt-7 flex justify-center">
              <div
                className="border px-6 py-3"
                style={{
                  borderColor: RED,
                }}
              >
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.28em]"
                  style={{
                    color: RED,
                  }}
                >
                  AI CLONING
                </span>
              </div>
            </div>
          )}

          {/* RED LINE */}

          <div className="mx-auto mt-7 h-[2px] w-[55px] overflow-hidden">
            <div
              ref={redLineRef}
              className="h-full w-full"
              style={{
                backgroundColor: RED,
                transform: "scaleX(0)",
                transformOrigin: "left center",
              }}
            />
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* RIGHT FRAME COUNTER */}
      {/* ================================================================ */}

      <div className="absolute right-6 top-1/2 z-30 -translate-y-1/2 md:right-8">
        <div className="flex flex-col items-end">
          <span
            ref={frameRef}
            className="text-[10px] tracking-[0.18em]"
            style={{
              color: WHITE,
            }}
          >
            01
          </span>

          <span
            className="my-2 h-[1px] w-7"
            style={{
              backgroundColor: RED,
            }}
          />

          <span
            ref={totalRef}
            className="text-[10px] tracking-[0.18em]"
            style={{
              color: "rgba(255,255,255,0.35)",
            }}
          >
            44
          </span>
        </div>
      </div>

      {/* ================================================================ */}
      {/* BOTTOM LEFT */}
      {/* ================================================================ */}

      <div className="absolute bottom-7 left-6 z-30 md:left-8">
        <div
          className="mb-2 h-[2px] w-10"
          style={{
            backgroundColor: RED,
          }}
        />

        <div
          className="text-[8px] uppercase tracking-[0.28em]"
          style={{
            color: "rgba(255,255,255,0.42)",
          }}
        >
          INDIA · PEOPLE · CULTURE · BUSINESS
        </div>
      </div>

      {/* ================================================================ */}
      {/* BOTTOM RIGHT */}
      {/* ================================================================ */}

      <div className="absolute bottom-7 right-6 z-30 text-right md:right-8">
        <div
          className="text-[8px] uppercase tracking-[0.28em]"
          style={{
            color: "rgba(255,255,255,0.42)",
          }}
        >
          Creative Intelligence
        </div>

        <div
          className="mt-1 text-[8px] uppercase tracking-[0.28em]"
          style={{
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Roakfield
        </div>
      </div>

      {/* ================================================================ */}
      {/* PROGRESS */}
      {/* ================================================================ */}

      <div
        className="absolute bottom-0 left-0 right-0 z-40 h-[2px]"
        style={{
          backgroundColor: "rgba(255,255,255,0.15)",
        }}
      >
        <div
          ref={progressRef}
          className="h-full"
          style={{
            width: "0%",
            backgroundColor: RED,
          }}
        />
      </div>
    </div>
  );
};

export default NamaskaramIntro;