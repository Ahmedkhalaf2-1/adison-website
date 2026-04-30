import { motion, AnimatePresence } from "framer-motion";
import leaf from "../assets/maple-leaf.png";

export default function Preloader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* soft background glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.25, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-40 w-40 rounded-full bg-white/20 blur-3xl"
            />

            {/* logo */}
            <motion.img
              src={leaf}
              alt="Maple Leaf Logo"
              initial={{ opacity: 0, scale: 0.82, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-20 w-20 object-contain sm:h-24 sm:w-24"
            />

            {/* brand */}
            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mt-6 text-sm font-medium uppercase tracking-[0.35em] text-white/72"
            >
              ADISON
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}