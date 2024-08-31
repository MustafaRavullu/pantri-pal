import HeroSection from "@/components/hero-section";
import IngredientSearchSection from "@/components/ingredient-search-section";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <IngredientSearchSection />
    </main>
  );
}
