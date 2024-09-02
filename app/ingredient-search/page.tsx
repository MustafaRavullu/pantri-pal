import IngredientSearchInput from "@/components/ingredient-search-input";
import IngredientSearchResults from "@/components/ingredient-search-results";
import SearchButton from "@/components/search-button";
import SelectedIngredientsList from "@/components/selected-ingredients-list";
import { IngredientListContextProvider } from "@/contexts/ingredient-list-context";
import { Suspense } from "react";

export default function IngredientSearchPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  return (
    <main className="min-h-screen bg-amber-300 p-8">
      <IngredientListContextProvider>
        <section>
          <h2 className="text-5xl font-black mb-8">
            Search ingredients that you have and add them to the list
          </h2>
          <IngredientSearchInput />
          <Suspense
            key={query}
            fallback={<div className="mb-8">Searching...</div>}
          >
            <IngredientSearchResults query={query} />
          </Suspense>
        </section>
        <section className="flex flex-col gap-12">
          <SelectedIngredientsList />
          <SearchButton />
        </section>
      </IngredientListContextProvider>
    </main>
  );
}
