import IngredientList from "./ingredient-list";
import IngredientSearch from "./ingredient-search";

export default function IngredientSearchSection() {
  return (
    <section id="ingredient-search" className="h-screen bg-amber-300 p-8">
      <h2 className="text-5xl font-black mb-8">
        Search ingredients that you have and add them to the list
      </h2>
      <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-6">
        <IngredientSearch />
        <IngredientList />
      </div>
    </section>
  );
}
