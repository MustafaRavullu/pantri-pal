"use client";

import { useIngredientListContext } from "@/contexts/ingredient-list-context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function IngredientSearchInput() {
  const { autocompleteQuery, setAutocompleteQuery } =
    useIngredientListContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params?.toString()}`, {
      scroll: false,
    });
  }, 300);
  useEffect(() => {
    handleSearch(autocompleteQuery);
  }, [autocompleteQuery]);
  useEffect(() => {
    if (searchParams.get("query")?.toString()) {
      setAutocompleteQuery(searchParams.get("query")?.toString()!);
    }
  }, []);
  return (
    <input
      onChange={(event) => setAutocompleteQuery(event.target.value)}
      value={autocompleteQuery}
      type="text"
      className="border border-black font-medium bg-transparent px-4 py-6 w-full text-xl outline-none placeholder:text-black transition-all hover:bg-amber-400 focus:bg-amber-400 mb-8"
      placeholder="Type here an ingredient name"
    />
  );
}
