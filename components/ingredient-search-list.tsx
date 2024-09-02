"use client";
import { useIngredientListContext } from "@/contexts/ingredient-list-context";
import { Ingredient } from "./ingredient-search-results";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function IngredientSearchList({
  ingredients,
}: {
  ingredients: Ingredient[];
}) {
  if (ingredients.length === 0) {
    return;
  }
  return (
    <ul className="flex flex-col gap-4 w-full border border-black py-2 mb-8">
      {ingredients.map((ingredient: Ingredient, index: number) => (
        <IngredientSearchItem key={index} name={ingredient.name} />
      ))}
    </ul>
  );
}

function IngredientSearchItem({ name }: { name: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { addIngredient, setAutocompleteQuery, ingredientList } =
    useIngredientListContext();
  const handleAddIngredient = (name: string) => {
    if (ingredientList?.includes(name)) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    addIngredient(name);
    setAutocompleteQuery("");
    params.delete("query");
    router.replace(`${pathname}?${params?.toString()}`, {
      scroll: false,
    });
  };
  return (
    <li>
      <button
        onClick={() => handleAddIngredient(name)}
        className="px-8 py-4 w-full text-left hover:bg-amber-400 font-semibold transition-all"
      >
        {name}
      </button>
    </li>
  );
}
