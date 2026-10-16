import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  // Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds} GMT`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownItems = [
    {
      id: "01",
      title: "We work globally, think boldly, and design with intent.",
      description:
        "From brand films to identity systems, we collaborate with teams of all sizes to create work that feels sharp, looks right, and actually says something.",
      categories: ["NEGATIVE/space 7"],
    },
    {
      id: "02",
      categories: ["Film", "Design", "Space"],
    },
    {
      id: "03",
      categories: ["Services", "Systems", "Studio"],
    },
    {
      id: "04",
      categories: ["Voice", "Archive", "Contact"],
    },
  ];

  return (
    <>
      {/* =====================================================
          NAVBAR – white bg, blue text, red hover
      ===================================================== */}
      <header
        className={`
          fixed inset-x-0 top-0 z-50 transition-all duration-500
          ${
            scrolled
              ? "border-b border-gray-200 bg-white/90 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <nav
          className="
            flex h-[52px] items-center justify-between px-5
            md:h-[62px] md:px-10
          "
        >
          {/* Logo – brand blue */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center"
          >
            <a
              href="#top"
              className="
                group flex items-center text-lg tracking-[-0.025em]
                transition-colors duration-300 md:text-base
              "
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              <span
                className="
                  font-large text-[#01295C] transition-colors
                  duration-300 group-hover:text-[#EB2226]
                "
              >
                Roak
              </span>
              <span
                className="
                  tracking-[0.08em] text-[#01295C] transition-colors
                  duration-300 group-hover:text-[#EB2226]
                "
              >
                field
              </span>
            </a>
          </motion.div>

          {/* Clock – blue */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.35 }}
            className="
              hidden text-[10px] tracking-[0.02em] text-[#01295C]
              md:block md:text-xs
            "
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            {time}
          </motion.div>

          {/* Menu button – blue, hover red */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <button
                ref={menuRef}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="
                  group flex items-center gap-2 text-xs tracking-[-0.025em]
                  text-[#01295C] transition-colors duration-300
                  hover:text-[#EB2226] md:text-sm
                "
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                <span>Menu</span>
                <svg
                  className={`
                    h-3 w-3 transition-all duration-300
                    ${isDropdownOpen ? "rotate-45 text-[#EB2226]" : ""}
                    group-hover:translate-x-0.5 group-hover:text-[#EB2226]
                  `}
                  viewBox="0 0 20 17"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="0.564" y1="8.548" x2="18.647" y2="8.548" />
                  <polyline points="11.231 16.4 9.674 14.817 16.096 8.292 9.674 1.767 11.231 0.185 19.211 8.292" />
                </svg>
              </button>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* =====================================================
          FULL SCREEN MENU – white bg, blue/red accents
      ===================================================== */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="
              fixed inset-0 z-40 flex items-center justify-center
              bg-white p-6 md:p-12
            "
          >
            {/* Close button – red on hover */}
            <button
              onClick={() => setIsDropdownOpen(false)}
              className="
                group absolute right-6 top-6 text-gray-400
                transition-colors duration-300 hover:text-[#EB2226]
                md:right-10 md:top-10
              "
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Menu content */}
            <div className="mx-auto h-full w-full max-w-7xl overflow-y-auto">
              <div
                className="
                  grid min-h-full grid-cols-1 content-center
                  gap-10 md:grid-cols-4 md:gap-8
                "
              >
                {dropdownItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.08 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="space-y-4"
                  >
                    {/* Number – blue */}
                    <span
                      className="block text-xs tracking-[0.2em] text-[#01295C]/50"
                    >
                      [{item.id}]
                    </span>

                    {item.title && (
                      <p
                        className="max-w-sm text-sm leading-relaxed text-[#01295C] md:text-base"
                        style={{ fontFamily: "'Archivo', sans-serif" }}
                      >
                        {item.title}
                      </p>
                    )}

                    {item.description && (
                      <p
                        className="max-w-sm text-xs leading-relaxed text-gray-600 md:text-sm"
                        style={{ fontFamily: "'Archivo', sans-serif" }}
                      >
                        {item.description}
                      </p>
                    )}

                    {item.categories && (
                      <div className="flex flex-col space-y-2">
                        {item.categories.map((cat, i) => (
                          <a
                            key={i}
                            href={`#${cat.toLowerCase().replace(/\s/g, "-")}`}
                            onClick={() => setIsDropdownOpen(false)}
                            className="
                              group flex w-fit items-center gap-2
                              text-sm tracking-[-0.025em] text-[#01295C]
                              transition-colors duration-300 hover:text-[#EB2226]
                              md:text-base
                            "
                            style={{ fontFamily: "'Archivo', sans-serif" }}
                          >
                            <span>{cat}</span>
                            <span
                              className="
                                opacity-0 transition-all duration-300
                                group-hover:translate-x-1 group-hover:opacity-100
                              "
                            >
                              ↗
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Red accent line at bottom */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#EB2226]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}