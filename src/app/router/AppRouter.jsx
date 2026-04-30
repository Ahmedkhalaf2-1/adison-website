import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import HowWeWork from "../../pages/HowWeWork";
import Contact from "../../pages/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}