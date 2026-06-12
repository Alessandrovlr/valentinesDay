import { motion } from "framer-motion";

export const Opcoes = ({
  text,
  delay = 0,
  className = "",
  style,
}) => {
  return (
    <motion.div
      className={`
        absolute
        max-w-45
        bg-white/60
        backdrop-blur-md
        px-4 py-3
        rounded-2xl
        shadow-lg
        border border-pink-200
        text-pink-700 text-sm italic
        ${className}
      `}
      style={style}
      initial={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.2,   // 👈 fade mais lento
        delay: delay,    // 👈 um por um
        ease: "easeOut",
      }}
    >
      {text}
    </motion.div>
  );
};