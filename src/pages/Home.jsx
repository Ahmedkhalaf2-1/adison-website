import HeroSection from "../sections/home/HeroSection";
import IntroSection from "../sections/home/IntroSection";
import ServicesPreviewSection from "../sections/home/ServicesPreviewSection";
import WhoWeServeSection from "../sections/home/WhoWeServeSection";
import WhyAdisonSection from "../sections/home/WhyAdisonSection";
import FounderQuoteSection from "../sections/home/FounderQuoteSection";
import HomeCTASection from "../sections/home/HomeCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesPreviewSection />
      <WhoWeServeSection />
      <WhyAdisonSection />
      <FounderQuoteSection />
      <HomeCTASection />
    </>
  );
}