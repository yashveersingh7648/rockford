import { motion } from "framer-motion";

const NAVIGATION = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#design" },
  { label: "What We Do", href: "#work" },
  { label: "Brands", href: "#brands" },
  { label: "Systems", href: "#systems" },
];

const SOCIALS = [
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const SERVICES = [
  "Advisory",
  "Personal Branding",
  "Brand Building",
  "GTM Strategy",
  "Content",
  "Performance Marketing",
  "Sales Strategy",
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#01295C]
        px-5
        pb-6
        pt-16
        text-white
        md:px-10
        md:pt-20
        lg:px-12
      "
      style={{
        fontFamily: "'Archivo', sans-serif",
      }}
    >
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-[1px] w-full bg-white/15">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "18%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="h-full bg-[#EB2226]"
        />
      </div>

      <div className="mx-auto max-w-[1600px]">
        {/* =================================================
            CLOSING STATEMENT
        ================================================= */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.2fr_1fr]">
          {/* Label */}
          <div>
            <span className="text-[9px] uppercase tracking-[0.16em] text-white/35">
              Let's talk
            </span>
          </div>

          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[900px]"
          >
            <p
              className="
                text-[clamp(1.5rem,3vw,3rem)]
                leading-[1.08]
                tracking-[-0.045em]
                text-white
              "
            >
              Bold ideas start here. We help ambitious businesses
              <span className="text-white/40">
                {" "}
                build brands, create demand and grow with intent.
              </span>
            </p>

            <a
              href="mailto:hello@roakfield.com"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                border-b
                border-white/25
                pb-1.5
                text-sm
                text-white
                transition-colors
                duration-300
                hover:border-[#EB2226]
                hover:text-[#EB2226]
              "
            >
              hello@roakfield.com

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </motion.div>
        </div>

        {/* =================================================
            INFORMATION GRID
        ================================================= */}
        <div
          className="
            mt-16
            grid
            grid-cols-2
            gap-10
            border-t
            border-white/10
            pt-8
            md:mt-20
            md:grid-cols-4
            md:gap-8
          "
        >
          {/* Studio */}
          <div>
            <span className="mb-4 block text-[9px] uppercase tracking-[0.16em] text-white/35">
              Studio
            </span>

            <p className="max-w-[220px] text-xs leading-[1.7] text-white/55">
              Roakfield
              <br />
              India
              <br />
              Working worldwide
            </p>
          </div>

          {/* Services */}
          <div>
            <span className="mb-4 block text-[9px] uppercase tracking-[0.16em] text-white/35">
              Services
            </span>

            <div className="flex max-w-[260px] flex-wrap gap-x-2 gap-y-1">
              {SERVICES.map((service, index) => (
                <span
                  key={service}
                  className="text-xs text-white/55"
                >
                  {service}
                  {index < SERVICES.length - 1 && (
                    <span className="ml-2 text-[#EB2226]">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <span className="mb-4 block text-[9px] uppercase tracking-[0.16em] text-white/35">
              Sitemap
            </span>

            <div className="flex flex-col gap-1.5">
              {NAVIGATION.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1
                    text-xs
                    text-white/55
                    transition-colors
                    duration-300
                    hover:text-[#EB2226]
                  "
                >
                  {item.label}

                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="mb-4 block text-[9px] uppercase tracking-[0.16em] text-white/35">
              Connect
            </span>

            <div className="flex flex-col gap-1.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1
                    text-xs
                    text-white/55
                    transition-colors
                    duration-300
                    hover:text-[#EB2226]
                  "
                >
                  {social.label}

                  <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}
        <div
          className="
            mt-12
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            pt-5
            text-[8px]
            uppercase
            tracking-[0.14em]
            text-white/30
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>
            © {new Date().getFullYear()} Roakfield
          </span>

          <span>
            Brand · Growth · Demand
          </span>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}