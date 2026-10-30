import { motion } from "framer-motion";

import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const NAVIGATION = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#design" },
  { label: "What We Do", href: "#work" },
  { label: "Brands", href: "#brands" },
  { label: "Systems", href: "#systems" },
];

// const SOCIALS = [
//   { label: "YouTube", href: "https://youtube.com/@roakfieldbusinessconsultants?si=nDFXioZsiRzO4jJh" },
//   { label: "Instagram", href: "https://www.instagram.com/roakfield?utm_source=qr&dlrf=MXI1enAydDh5bGdwZA==" },
//   { label: "LinkedIn", href: "#" },
//   { label: "facebook", href: "https://www.facebook.com/share/1C4y45iSHV/" },
// ];

const SOCIALS = [
  { label: "YouTube", Icon: FaYoutube, href: "https://youtube.com/@roakfieldbusinessconsultants?si=nDFXioZsiRzO4jJh" },
  { label: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/roakfield?utm_source=qr&dlrf=MXI1enAydDh5bGdwZA==" },
  { label: "LinkedIn", Icon: FaLinkedinIn, href: "" }, // client se URL lekar yahan bharo
  { label: "Facebook", Icon: FaFacebookF, href: "https://www.facebook.com/share/1C4y45iSHV/" },
  { label: "WhatsApp", Icon: FaWhatsapp, href: "https://wa.me/919718049057" },
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
      // id="contact"
            id="lets-connect"
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
            <span className="text-[12px] uppercase text-white">
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
              // href="mailto:hello@roakfield.com"

              href="mailto:consult@roakfield.com"

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
              consult@roakfield.com

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
            <a
              href="https://wa.me/919718049057"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                flex
                w-fit
                items-center
                gap-2
                text-sm
                text-white
                transition-colors
                duration-300
                hover:text-[#EB2226]
              "
            >
              <FaWhatsapp className="h-4 w-4" />
              +91-9718049057
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
            <span className="mb-4 block text-[12px] uppercase tracking-[0.16em] text-white">
              Studio
            </span>

            <p className="max-w-[220px] text-xs leading-[1.7] text-white">
              Roakfield
              <br />
              India
              <br />
              Working worldwide
            </p>
          </div>

          {/* Services */}
          <div>
            <span className="mb-4 block text-[12px] uppercase tracking-[0.16em] text-white">
              Services
            </span>

            <div className="flex max-w-[260px] flex-wrap gap-x-2 gap-y-1">
              {SERVICES.map((service, index) => (
                <span
                  key={service}
                  className="text-xs text-white"
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
            <span className="mb-4 block text-[12px] uppercase tracking-[0.16em] text-white">
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
                    text-white
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
            <span className="mb-4 block text-[12px] uppercase tracking-[0.16em] text-white">
              Connect
            </span>

            <div className="flex flex-col gap-1.5">
              {/* {SOCIALS.map((social) => (
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
                    text-white
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
              ))} */}
              {SOCIALS.filter((s) => s.href && s.href !== "#").map(
                ({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-xs
                      text-white
                      transition-colors
                      duration-300
                      hover:text-[#EB2226]
                    "
                  >
                    <Icon className="h-3.5 w-3.5" />

                    {label}

                    <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                )
              )}

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
            text-[9px]
            uppercase
            tracking-[0.14em]
            text-white
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