import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title dynamically based on active route and selected language
    let pageKey = "";
    if (pathname === "/") {
      pageKey = "";
    } else if (pathname === "/about") {
      pageKey = "nav.about";
    } else if (pathname === "/services") {
      pageKey = "nav.services";
    } else if (pathname === "/how-we-work") {
      pageKey = "nav.howWeWork";
    } else if (pathname === "/contact") {
      pageKey = "nav.contact";
    } else {
      pageKey = "notFound.subtitle";
    }

    if (pageKey) {
      document.title = `${t(pageKey)} | ADISON Corp`;
    } else {
      document.title = "ADISON Corp";
    }
  }, [pathname, t]);

  return null;
}
