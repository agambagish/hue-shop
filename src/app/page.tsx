import { HeroSection } from "@/modules/home/components/hero-section";
import { PromotionalBanner } from "@/modules/home/components/promotional-banner";
import { ProductGrid } from "@/modules/product/components/product-grid";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ProductGrid />
      <PromotionalBanner />
    </main>
  );
}
