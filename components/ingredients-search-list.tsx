import IngredientSearchItem from "./ingredient-search-item";

type Ingredient = {
  name: string;
  image: string;
};

export default async function IngredientSearchList({
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

  return (
    <ul className="flex flex-wrap gap-6">
      {ingredients.map((ingredient: Ingredient, index: number) => (
        <IngredientSearchItem key={index} name={ingredient.name} />
      ))}
    </ul>
  );
}
