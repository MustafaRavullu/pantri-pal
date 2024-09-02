import IngredientSearchList from "./ingredient-search-list";

export type Ingredient = {
  name: string;
  image: string;
};

export default async function IngredientSearchResults({
  query,
}: {
  query: string;
}) {
  const response = await fetch(
    `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${query}&number=5`,
    { next: { revalidate: 86400 } }
  );

  if (!response.ok) {
    return <div>Something went wrong. Please try again later.</div>;
  }
  const ingredients: Ingredient[] = await response.json();

  if (ingredients.length === 0 && query !== "") {
    return <div>No ingredients found.</div>;
  }

  return <IngredientSearchList ingredients={ingredients} />;
}
