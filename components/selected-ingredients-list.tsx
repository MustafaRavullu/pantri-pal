"use client";

import { useIngredientListContext } from "@/contexts/ingredient-list-context";
import { IoMdClose } from "react-icons/io";

export default function SelectedIngredientsList() {
  const { ingredientList } = useIngredientListContext();
  return (
    <ul className="flex flex-col gap-4">
      {ingredientList?.map((ingredient: string) => (
        <IngredientItem key={ingredient} name={ingredient} />
      ))}
    </ul>
  );
}

function IngredientItem({ name }: { name: string }) {
  const { deleteIngredient } = useIngredientListContext();
  return (
    <li className="hover:bg-amber-400 w-full transition-all flex items-stretch">
      <span className="flex-grow p-4 border border-black font-bold">
        {name}
      </span>
      <button
        onClick={() => deleteIngredient(name)}
        className="bg-black z-0 group"
      >
        <div
          className="p-4 border bg-white/95 
         border-black group-hover:bg-white transition-all z-10 group-hover:translate-x-2 group-hover:-translate-y-2"
        >
          <IoMdClose className="size-6" />
        </div>
      </button>
    </li>
  );
}
