import { Link } from "react-router-dom";
import { useContent } from "../hooks/useContent";
import GlassSurface from "../components/glass/GlassSurface";
import { motion } from "framer-motion";

export default function NotFound() {
  const { title, subtitle, description, button } = useContent("notFound");

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-lg"
      >
        <GlassSurface className="relative overflow-hidden rounded-[32px] px-8 py-14 text-center">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <h1 className="text-8xl sm:text-9xl font-bold tracking-tight bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">
            {title || "404"}
          </h1>
          
          <h2 className="mt-6 text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
            {subtitle || "Page Not Found"}
          </h2>
          
          <p className="mt-4 text-sm sm:text-[0.9375rem] leading-[1.8] text-white/70 max-w-sm mx-auto">
            {description || "The page you are looking for might have been removed or is temporarily unavailable."}
          </p>
          
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[0.98]"
            >
              {button || "Return Home"}
            </Link>
          </div>
        </GlassSurface>
      </motion.div>
    </div>
  );
}
