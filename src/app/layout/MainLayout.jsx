import { useLocation, useOutlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageShell from "./PageShell";
import SiteBackground from "../background/SiteBackground";
import { AnimatePresence } from "framer-motion";

export default function MainLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
      <SiteBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Animated page wrapper container */}
        <div className="flex-grow">
          <AnimatePresence mode="wait" initial={false}>
            {outlet && (
              <PageShell key={location.pathname}>
                {outlet}
              </PageShell>
            )}
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </div>
  );
}
