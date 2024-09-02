"use client";

import { useIngredientListContext } from "@/contexts/ingredient-list-context";

export default function IngredientSearchItem({ name }: { name: string }) {
  const { addIngredient } = useIngredientListContext();
  return (
    <li>
      <button
        onClick={() => addIngredient(name)}
        className="border border-black px-8 py-4 hover:bg-amber-400 font-semibold transition-all"
      >
        {name}
      </button>
    </li>
  );
}
