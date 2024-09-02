import IngredientSearchInput from "@/components/ingredient-search-input";
import IngredientSearchList from "@/components/ingredients-search-list";
import { Suspense } from "react";

export default function IngredientSearchPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  return (
    <main>
      <section id="ingredient-search" className="h-screen bg-amber-300 p-8">
        <h2 className="text-5xl font-black mb-8">
          Search ingredients that you have and add them to the list
        </h2>
        <IngredientSearchInput />
        <Suspense key={query} fallback={<div>Searching...</div>}>
          <IngredientSearchList query={query} />
        </Suspense>
      </section>
    </main>
  );
}
