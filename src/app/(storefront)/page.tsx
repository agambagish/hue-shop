import { HeroSection, PromotionalBanner } from "@/modules/home/components";
import { ProductGrid } from "@/modules/product/components";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ProductGrid />
      <PromotionalBanner />
    </main>
  );
}
