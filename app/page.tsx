import Hero from "@/components/hero";
import IngredientSearch from "@/components/ingredient-search";

export default async function Home() {
  return (
    <main className="">
      <Hero />
      <IngredientSearch />
    </main>
  );
}
