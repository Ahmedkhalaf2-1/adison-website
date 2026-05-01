import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../components/shared/Container";
import LanguageSwitcher from "../../components/shared/LanguageSwitcher";

const navKeys = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.services", path: "/services" },
  { key: "nav.howWeWork", path: "/how-we-work" },
  { key: "nav.contact", path: "/contact" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        if (!mobileMenuOpen) setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, mobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <Container>
              <div className="flex h-[72px] w-full items-center justify-between">
                
                {/* LEFT: LOGO */}
                <Link to="/" className="flex items-center">
                  <span className="text-lg font-semibold tracking-tight text-white">
                    ADISON
                  </span>
                </Link>

                {/* RIGHT: DESKTOP NAV + ACTIONS */}
                <div className="flex items-center gap-10">
                  <nav className="hidden items-center gap-10 md:flex">
                    {navKeys.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `text-[14px] font-medium transition-colors duration-200 ${
                            isActive
                              ? "text-white"
                              : "text-white/50 hover:text-white"
                          }`
                        }
                      >
                        {t(item.key)}
                      </NavLink>
                    ))}
                  </nav>

                  <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <button
                      className="flex h-10 w-10 items-center justify-end text-white/70 transition-colors hover:text-white md:hidden"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      aria-label="Toggle Menu"
                    >
                      {mobileMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </Container>

            {/* MOBILE MENU FULL SCREEN OVERLAY */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-x-0 top-full flex h-[calc(100vh-72px)] flex-col border-t border-white/5 bg-black/80 backdrop-blur-3xl md:hidden"
                >
                  <Container className="flex h-full flex-col py-10">
                    <nav className="flex flex-col gap-8">
                      {navKeys.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={({ isActive }) =>
                            `text-3xl font-medium tracking-tight transition-colors ${
                              isActive ? "text-white" : "text-white/40 hover:text-white"
                            }`
                          }
                        >
                          {t(item.key)}
                        </NavLink>
                      ))}
                    </nav>
                  </Container>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}
