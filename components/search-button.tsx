"use client";

import { useIngredientListContext } from "@/contexts/ingredient-list-context";
import { createSearchIngredientString } from "@/lib/utils";
import Link from "next/link";

export default function SearchButton() {
  const { ingredientList } = useIngredientListContext();
  if (ingredientList?.length === 0) {
    return;
  }
  return (
    <Link
      href={`/results?ingredients=${createSearchIngredientString(
        ingredientList!
      )}`}
      className="group w-full font-bold text-center text-xl bg-black"
    >
      <div className="bg-amber-400 p-4 border border-black group-hover:bg-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all">
        Search
      </div>
    </Link>
  );
}
