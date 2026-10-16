import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className,
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function MaskText({
  text,
  className,
  delay = 0,
  immediate = false,
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={{
          y: "110%",
        }}
        {...(immediate
          ? {
              animate: {
                y: 0,
              },
            }
          : {
              whileInView: {
                y: 0,
              },
              viewport: {
                once: true,
                margin: "-60px",
              },
            })}
        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}