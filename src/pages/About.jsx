import AboutHeroSection from "../sections/about/AboutHeroSection";
import MissionVisionSection from "../sections/about/MissionVisionSection";
import ValuesSection from "../sections/about/ValuesSection";
import CEOMessageSection from "../sections/about/CEOMessageSection";
import OurApproachSection from "../sections/about/OurApproachSection";
import WhyChooseSection from "../sections/about/WhyChooseSection";
import AboutClosingSection from "../sections/about/AboutClosingSection";

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <CEOMessageSection />
      <OurApproachSection />
      <WhyChooseSection />
      <AboutClosingSection />
    </>
  );
}