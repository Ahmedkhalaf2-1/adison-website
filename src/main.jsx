import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import ScrollToTop from "./components/shared/ScrollToTop";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react";
import "./styles/globals.css";
import "./lib/i18n";

const savedLang = ["en", "fr"].includes(localStorage.getItem("adison-lang"))
  ? localStorage.getItem("adison-lang")
  : "en";
document.documentElement.lang = savedLang;
document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root options={{ lerp: 0.15, duration: 1.0, smoothWheel: true }}>
      <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
        <Analytics />
      </BrowserRouter>
    </ReactLenis>
  </React.StrictMode>
);