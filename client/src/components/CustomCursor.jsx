import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorType, setCursorType] = useState("default");
  const [isMoving, setIsMoving] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, {
    stiffness: 700,
    damping: 35,
    mass: 0.15,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 700,
    damping: 35,
    mass: 0.15,
  });

  // Detect desktop / mouse
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (pointer: fine)"
    );

    const updateDevice = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    if (!isDesktop) return;

    let hideTimer;

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      // Show cursor while moving
      setIsMoving(true);

      // Hide after mouse stops
      clearTimeout(hideTimer);

      hideTimer = setTimeout(() => {
        setIsMoving(false);
      }, 700);
    };

    const handleMouseOver = (event) => {
      const target = event.target;

      // Explicit cursor type
      const customElement = target.closest("[data-cursor]");

      if (customElement) {
        setCursorType(
          customElement.getAttribute("data-cursor") || "default"
        );
        return;
      }

      // Links / buttons
      if (
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorType("link");
        return;
      }

      // Images / videos
      if (
        target.closest("img") ||
        target.closest("video")
      ) {
        setCursorType("image");
        return;
      }

      // Text
      const tag = target.tagName?.toLowerCase();

      const textElements = [
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "span",
        "em",
        "strong",
        "li",
      ];

      if (textElements.includes(tag)) {
        setCursorType("text");
        return;
      }

      // Blank area
      setCursorType("default");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      clearTimeout(hideTimer);
    };
  }, [isDesktop, mouseX, mouseY]);

  if (!isDesktop) return null;

  // Cursor sizes
  const cursorSizes = {
    default: 12,
    text: 48,
    link: 52,
    image: 60,
    play: 60,
    view: 60,
    red: 52,
  };

  const cursorSize =
    cursorSizes[cursorType] ?? cursorSizes.default;

  // Cursor colors
  const cursorColors = {
    default: "#FFFFFF",
    text: "#FFFFFF",
    link: "#FFFFFF",
    image: "#FFFFFF",
    play: "#EB2226",
    view: "#FFFFFF",
    red: "#EB2226",
  };

  const cursorColor =
    cursorColors[cursorType] ?? "#FFFFFF";

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[99999]
        rounded-full
      "
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: cursorColor,

        // Automatically adapts to background
        mixBlendMode:
          cursorType === "red"
            ? "normal"
            : "difference",
      }}
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: isMoving ? 1 : 0,
        scale: isMoving ? 1 : 0.5,
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{
        opacity: {
          duration: 0.2,
          ease: "easeOut",
        },
        scale: {
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        },
        width: {
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        },
        height: {
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    />
  );
}