import HeroSection from "@/layout/HeroSection";
import PartnersSection from "@/layout/PartnersSection";
import ComparisonSection from "@/layout/ComparisonSection";
import ServicesSection from "@/layout/ServicesSection";
import AboutSection from "@/layout/AboutSection";
import PricingSection from "@/layout/PricingSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PartnersSection />
      <ComparisonSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <div className="text-center text-neutral-500 ">
        all rights reserved pixel grid 2026
      </div>
    </div>
  );
}
