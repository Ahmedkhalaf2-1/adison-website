import { motion } from "framer-motion";

export default function PageShell({ children }) {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 26,
        scale: 0.985,
        filter: "blur(14px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 min-h-screen pt-28 sm:pt-32"
    >
      {children}
    </motion.main>
  );
}
