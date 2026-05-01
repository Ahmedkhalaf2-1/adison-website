import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  function toggleLang() {
    const newLang = isAr ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("adison-lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  }

  return (
    <button
      onClick={toggleLang}
      className="flex items-center justify-center p-2 text-white/70 transition-all duration-300 hover:text-white"
      aria-label="Toggle language"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    </button>
  );
}
