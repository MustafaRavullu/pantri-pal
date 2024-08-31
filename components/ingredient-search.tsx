"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

type Suggestion = {
  name: string;
  image: string;
};

export default function IngredientSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  useEffect(() => {
    if (debouncedQuery) {
      fetchSuggestions(debouncedQuery).then(setSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery]);
  const fetchSuggestions = async (query: string) => {
    const results = await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&query=${query}&number=5`
    ).then((response) => response.json());
    return results;
  };
  return (
    <div className="flex flex-col gap-8">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="border border-black font-medium bg-transparent p-8 w-full text-xl outline-none placeholder:text-black transition-all hover:bg-amber-400 focus:bg-amber-400 hover:shadow-[inset_8px_0_0_0_rgb(0,0,0)] focus:shadow-[inset_8px_0_0_0_rgb(0,0,0)]"
        placeholder="Type here an ingredient name"
      />
      {suggestions.length === 0 && query === "" && (
        <div className="mt-3">
          You will see autocomplete results here when you start typing.
        </div>
      )}
      {suggestions.length === 0 && query !== "" && (
        <div className="mt-3">
          Could not find any ingredient based on you input "{query}"
        </div>
      )}
      <ul className="flex flex-wrap gap-4 w-full">
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <button className="border border-black px-8 py-4 font-semibold text-lg hover:bg-amber-400 transition-all hover:shadow-[inset_8px_0_0_0_rgb(0,0,0)]">
              {suggestion.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
