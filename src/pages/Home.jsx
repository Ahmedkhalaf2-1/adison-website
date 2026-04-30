import HeroSection from "../sections/home/HeroSection";
import IntroSection from "../sections/home/IntroSection";
import ServicesPreviewSection from "../sections/home/ServicesPreviewSection";
import WhyAdisonSection from "../sections/home/WhyAdisonSection";
import ProcessPreviewSection from "../sections/home/ProcessPreviewSection";
import HomeCTASection from "../sections/home/HomeCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesPreviewSection />
      <WhyAdisonSection />
      <ProcessPreviewSection />
      <HomeCTASection />
    </>
  );
}