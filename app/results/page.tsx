import SearchResultCard from "@/components/search-result-card";
import ThreeDButton from "@/components/three-d-button";
import { IoIosArrowRoundBack } from "react-icons/io";

export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: Ingredient[];
  usedIngredients: Ingredient[];
  unusedIngredients: Ingredient[];
  likes: number;
};

export type Ingredient = {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta: string[];
  image: string;
  extendedName?: string;
};

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: { ingredients: string };
}) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_API_KEY}&ingredients=${searchParams.ingredients}&number=10`
  );
  const recipes: Recipe[] = await data.json();
  console.log(recipes);
  return (
    <main className="min-h-screen p-8">
      <section className="mx-auto max-w-screen-lg flex gap-4 mb-8 items-center">
        <ThreeDButton type="link" href="/ingredient-search">
          <IoIosArrowRoundBack className="size-6" />
        </ThreeDButton>
        <h1 className="font-bold text-5xl">Recipes</h1>
      </section>
      <section className="mx-auto max-w-screen-lg flex justify-center flex-wrap gap-8">
        {recipes.map((recipe: Recipe) => (
          <SearchResultCard
            recipe={recipe}
            key={recipe.id}
            callbackUrl={`/results?ingredients=${searchParams.ingredients}`}
          />
        ))}
      </section>
    </main>
  );
}
