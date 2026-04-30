import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../components/shared/Container";
import GlassSurface from "../../components/glass/GlassSurface";
import { navigation } from "../../content/navigation";

function LogoMark() {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/12 bg-white/[0.04] backdrop-blur-xl">
      {/* clean glow */}
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.18),_transparent_65%)]" />

      {/* core */}
      <span className="relative h-4 w-4 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.95)_0%,_rgba(255,255,255,0.6)_50%,_transparent_75%)]" />
    </span>
  );
}

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-50"
        >
          <Container className="pt-4 sm:pt-5">
            <GlassSurface className="flex items-center justify-between rounded-[22px] px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] sm:px-5">
              
              {/* LOGO */}
              <Link to="/" className="flex items-center gap-3">
                <LogoMark />
                <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
                  ADISON
                </span>
              </Link>

              {/* NAV */}
              <nav className="hidden items-center gap-8 md:flex">
                {navigation.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative text-sm transition ${
                        isActive
                          ? "text-white"
                          : "text-white/90 hover:text-white"
                      }`
                    }
                  >
                    {item.label}

                    {/* subtle underline */}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
                  </NavLink>
                ))}
              </nav>

              {/* CTA BUTTON (APPLE STYLE) */}
              <Link
                to="/contact"
              >
                
              </Link>
            </GlassSurface>
          </Container>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
