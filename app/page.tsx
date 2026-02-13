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
      <footer className="py-12  mt-20">
        <div className="container mx-auto px-4 text-center text-neutral-500 text-sm">
          &copy; 2026 Pixel Grid. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
