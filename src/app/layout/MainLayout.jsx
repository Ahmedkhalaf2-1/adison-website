import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageShell from "./PageShell";
import SiteBackground from "../background/SiteBackground";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
      <SiteBackground />

      <div className="relative z-10">
        <Navbar />
        <PageShell>
          <Outlet />
        </PageShell>
        <Footer />
      </div>
    </div>
  );
}
