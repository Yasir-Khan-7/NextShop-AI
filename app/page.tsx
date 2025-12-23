import HeroSection from "@/components/sections/HeroSection";
import BrandsSection from "@/components/sections/BrandsSection";
import NewArrivalsSection from "@/components/sections/NewArrivalsSection";
import TopSellingSection from "@/components/sections/TopSellingSection";
import DressStyleSection from "@/components/sections/DressStyleSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <BrandsSection />
      <NewArrivalsSection />
      <TopSellingSection />
      <DressStyleSection />
      <TestimonialsSection />
    </div>
  );
}

