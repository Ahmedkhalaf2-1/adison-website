import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import adison2Logo from "../../assets/adison2.png";
import bg from "../../assets/kh2.jpg";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const previousOverflow = useRef("");
  const shouldReduceMotion = useReducedMotion();

  const letters = ["A", "D", "I", "S", "O", "N"];

  useEffect(() => {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let isMounted = true;

    const preloadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });

    const minDuration = new Promise((resolve) => {
      setTimeout(resolve, 3200);
    });

    Promise.all([
      minDuration,
      preloadImage(bg),
      preloadImage(adison2Logo),
    ]).then(() => {
      if (isMounted) {
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: shouldReduceMotion ? 0 : 0.5,
      },
    },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
      scale: shouldReduceMotion ? 1 : 0.8,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(12px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        document.body.style.overflow = previousOverflow.current;
      }}
    >
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: shouldReduceMotion ? 0.25 : 1.1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <img
              src={bg}
              alt=""
              aria-hidden="true"
              className="h-full w-full scale-110 object-cover"
              style={{ filter: "blur(22px) brightness(0.35)" }}
            />

            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* Ambient Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/12 via-purple-600/8 to-red-600/12 blur-[140px]" />

          {/* Top Border */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/8" />

          {/* Letters */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center gap-1.5 selection:bg-transparent sm:gap-3"
          >
            {letters.map((char, index) => {
              const isLogoLetter = char === "O";

              if (isLogoLetter) {
                return (
                  <motion.div
                    key={`${char}-${index}`}
                    variants={letterVariants}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={adison2Logo}
                      alt=""
                      aria-hidden="true"
                      className="h-[39px] w-[39px] -translate-y-[2px] object-contain sm:h-[48px] sm:w-[48px] sm:-translate-y-[3px] md:h-[64px] md:w-[64px] md:-translate-y-[4px]"
                    />
                  </motion.div>
                );
              }

              return (
                <motion.span
                  key={`${char}-${index}`}
                  variants={letterVariants}
                  className="font-ethnocentric text-3xl tracking-[0.1em] text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] sm:text-5xl md:text-6xl"
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 1.1,
              duration: shouldReduceMotion ? 0.2 : 0.9,
            }}
            className="mt-6 max-w-[90%] text-center text-base font-light italic tracking-wide text-white/80 sm:text-xl md:text-2xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            <span className="opacity-60">"</span>A Canadian-based{" "}
            <em className="not-italic font-semibold text-white">
              Business Intelligence
            </em>{" "}
            company with global reach.<span className="opacity-60">"</span>
          </motion.p>

          {/* Bottom Border */}
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/8" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}