import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import adison2Logo from "../../assets/adison2.png";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  // The letters of the logo name
  const letters = ["A", "D", "I", "S", "O", "N"];

  useEffect(() => {
    // Enable for all page refreshes
    document.body.style.overflow = "hidden";

    // Fade out after animation is done
    const timer = setTimeout(() => {
      setLoading(false);
      // Re-enable scroll
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // Stagger variants for the container
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15, // Delay between each letter
        delayChildren: 0.3,   // Initial delay before starting
      },
    },
  };

  // Variant for each letter (revealing left to right)
  const letterVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.75,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier transition
      },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050811]"
        >
          {/* Ambient Glowing Background Lights */}
          <div className="absolute h-[350px] w-[350px] rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-red-500/10 blur-[120px] pointer-events-none" />

          {/* Letter Reveal Container */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center gap-1.5 sm:gap-3 selection:bg-transparent"
          >
            {letters.map((char, index) => {
              const isO = char === "O";
              if (isO) {
                return (
                  <motion.div
                    key={index}
                    variants={letterVariants}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={adison2Logo}
                      alt="O"
                      className="h-[28px] sm:h-[45px] md:h-[55px] w-auto object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.75)]"
                    />
                  </motion.div>
                );
              }
              return (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="font-ethnocentric text-3xl sm:text-5xl md:text-6xl tracking-[0.1em] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>

          {/* Elegant Progress Loading Line */}
          <div className="relative mt-8 h-[1px] w-32 overflow-hidden bg-white/10 rounded-full">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              className="absolute inset-0 origin-left bg-gradient-to-r from-blue-500 via-white to-red-500"
            />
          </div>

          {/* Loading status text */}
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-[9px] uppercase tracking-[0.3em] text-white/80"
          >
            Initializing Intelligence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
