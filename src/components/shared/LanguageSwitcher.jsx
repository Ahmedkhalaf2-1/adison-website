import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", label: "English", flag: "🇨🇦" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    // { code: "ar", label: "العربية", flag: "🇪🇬" },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  function changeLanguage(code) {
    i18n.changeLanguage(code);
    localStorage.setItem("adison-lang", code);
    document.documentElement.lang = code;
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
    setIsOpen(false);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-white/10"
      >
        <span className="text-base">{currentLang.flag}</span>
        <span className="hidden sm:inline-block">{currentLang.label}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 min-w-[160px] overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl z-50"
          >
            <div className="p-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all hover:bg-white/10 ${i18n.language === lang.code ? "bg-white/10 text-white" : "text-white/70"
                    }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="flex-1 text-start">{lang.label}</span>
                  {i18n.language === lang.code && (
                    <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
