import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BRAND_SETS = [
  [
    "WDA",
    "eone",
    "BODYLINES",
    "M",
    "cashewu",
    "ebay",
    "OneNine5",
    "Journee Juice",
    "JAGUAR",
    "Designit",
  ],
  [
    "PIONEER",
    "Fyous™",
    "mazDa",
    "wipro",
    "SIMPSON & PARTNERS",
    "Joy resolve",
    "SPINLAUNCH",
    "AIRBUS",
    "Relka",
    "ROAKFIELD",
  ],
  [
    "AIRBUS",
    "WDA",
    "PIONEER",
    "JAGUAR",
    "eone",
    "wipro",
    "BODYLINES",
    "Designit",
    "cashewu",
  ],
  [
    "ROAKFIELD",
    "mazDa",
    "Journee Juice",
    "SPINLAUNCH",
    "M",
    "Fyous™",
    "ebay",
    "Relka",
    "Joy resolve",
  ],
];

function BrandCell({ brand, index }) {
  return (
    <div className="relative flex h-[120px] items-center justify-center overflow-hidden border-b border-r border-white/15 px-5 md:h-[145px] lg:h-[160px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={brand}
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.985,
          }}
          animate={{
            opacity: 0.65,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -12,
            scale: 0.985,
          }}
          transition={{
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="absolute text-center font-['Archivo'] text-xl font-medium tracking-[-0.035em] text-[#A7A9AC] md:text-2xl lg:text-3xl"
        >
          {brand}
        </motion.div>
      </AnimatePresence>

      <span className="absolute left-3 top-3 font-['Archivo'] text-[9px] tracking-[0.12em] text-[#A7A9AC]/30">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function BrandsMarquee() {
  const [setIndex, setSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSetIndex((prev) => (prev + 1) % BRAND_SETS.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const currentBrands = BRAND_SETS[setIndex];

  return (
    <section className="bg-[#01295C] py-20 text-white md:py-28">
      {/* HEADER */}
      <div className="px-5 md:px-10 lg:px-12">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="display text-4xl font-medium tracking-[-0.045em] text-white md:text-5xl lg:text-6xl">
              Brands We&rsquo;ve Worked With.
            </h2>

            <div className="mt-3 h-[2px] w-12 bg-[#EB2226]" />
          </div>

          <a
            href="#contact"
            className="group hidden items-center gap-2 font-['Archivo'] text-sm font-medium text-white transition-colors duration-300 hover:text-[#EB2226] md:flex"
          >
            Let&rsquo;s talk
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* SYNCHRONIZED BRAND GRID */}
      <div className="mt-14 overflow-hidden border-t border-[#A7A9AC]/20">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {currentBrands.map((brand, index) => (
            <BrandCell
              key={`${setIndex}-${index}`}
              brand={brand}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* MOBILE CTA */}
      <div className="mt-8 px-5 md:hidden">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#EB2226]"
        >
          Let&rsquo;s talk
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}