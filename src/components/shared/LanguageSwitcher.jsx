import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
  ];

  function changeLanguage(code) {
    i18n.changeLanguage(code);
    localStorage.setItem("adison-lang", code);
    document.documentElement.lang = code;
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
  }

  return (
    <div className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] p-1 backdrop-blur-md">
      {languages.map((lang, idx) => (
        <div key={lang.code} className="flex items-center">
          {idx > 0 && <span className="h-3 w-px bg-white/10" />}
          <button
            onClick={() => changeLanguage(lang.code)}
            className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              i18n.language === lang.code
                ? "text-white"
                : "text-white/40 hover:text-white/80"
            }`}
          >
            {i18n.language === lang.code && (
              <motion.span
                layoutId="activeLang"
                className="absolute inset-0 rounded-full bg-white/[0.07]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{lang.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
