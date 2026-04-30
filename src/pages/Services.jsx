import ServicesHeroSection from "../sections/services/ServicesHeroSection";
import ServiceCategoriesSection from "../sections/services/ServiceCategoriesSection";
import PackagesSection from "../sections/services/PackagesSection";
import ServicesCTASection from "../sections/services/ServicesCTASection";

export default function Services() {
  return (
    <>
      <ServicesHeroSection />
      <ServiceCategoriesSection />
      <PackagesSection />
      <ServicesCTASection />
    </>
  );
}