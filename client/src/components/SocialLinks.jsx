import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Client se actual URLs lekar yahan bharo. Khali url wala icon dikhega hi nahi.
const SOCIAL_LINKS = [
  { name: "Instagram", url: "", Icon: FaInstagram },
  { name: "Facebook", url: "", Icon: FaFacebookF },
  { name: "LinkedIn", url: "", Icon: FaLinkedinIn },
  { name: "YouTube", url: "", Icon: FaYoutube },
  { name: "X", url: "", Icon: FaXTwitter },
  { name: "WhatsApp", url: "https://wa.me/919718049057", Icon: FaWhatsapp },
];

export default function SocialLinks({ className = "" }) {
  const links = SOCIAL_LINKS.filter((item) => item.url);

  if (!links.length) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ name, url, Icon }) => (
        <li key={name}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-current
              transition-colors
              duration-300
              hover:border-[#EB2226]
              hover:bg-[#EB2226]
              hover:text-white
            "
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}