import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919718049057"; // +91-9718049057 (bina + aur space)
const WHATSAPP_TEXT = "Hi Roakfield, I would like to know more about your services.";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WHATSAPP – bottom left */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          fixed
          bottom-5
          left-5
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-lg
          transition-transform
          duration-300
          hover:scale-110
          md:bottom-6
          md:left-6
          md:h-14
          md:w-14
        "
      >
        <FaWhatsapp className="h-6 w-6 md:h-7 md:w-7" />
      </a>

      {/* BACK TO TOP – bottom right */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`
          fixed
          bottom-5
          right-5
          z-50
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#f53336]
          text-lg
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-[#EB2226]
          md:bottom-6
          md:right-6
          ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}
        `}
      >
        ↑
      </button>
    </>
  );
}