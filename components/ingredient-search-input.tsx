"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function IngredientSearchInput() {
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
  return (
    <div className="flex flex-col gap-8 mb-8">
      <input
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        type="text"
        className="border border-black font-medium bg-transparent p-8 w-full text-xl outline-none placeholder:text-black transition-all hover:bg-amber-400 focus:bg-amber-400"
        placeholder="Type here an ingredient name"
      />
    </div>
  );
}
