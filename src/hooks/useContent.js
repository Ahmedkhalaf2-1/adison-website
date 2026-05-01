import { useTranslation } from "react-i18next";

/**
 * Custom hook that returns a content object from i18n translations
 * matching the shape of the old static content files.
 * Usage: const content = useContent("home") → returns all keys under "home.*"
 */
export function useContent(namespace) {
  const { i18n } = useTranslation();

  const bundle = i18n.getResourceBundle(i18n.language, "translation");
  const data = bundle?.[namespace] || {};

  const tNumber = (num, pad = 0) => {
    let str = String(num);
    if (pad > 0) str = str.padStart(pad, "0");
    if (i18n.language === "ar") {
      const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
      return str.replace(/[0-9]/g, (w) => arabicDigits[w]);
    }
    return str;
  };

  return { ...data, tNumber };
}
