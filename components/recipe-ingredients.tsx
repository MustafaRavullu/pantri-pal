type IngredientAmount = {
  unit: string;
  value: number;
};

type RecipeIngredient = {
  amount: {
    metric: IngredientAmount;
    us: IngredientAmount;
  };
  image: string;
  name: string;
};

export default async function RecipeIngredients({
  recipeId,
}: {
  recipeId: string;
}) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=${process.env.SPOONACULAR_API_KEY}`
  );
  const response = await data.json();
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-3xl">Ingredients</h2>
      <ul className="flex flex-col gap-1">
        {response.ingredients.map(
          (ingredient: RecipeIngredient, index: number) => (
            <li key={index}>
              {ingredient.amount.metric.value} {ingredient.amount.metric.unit}{" "}
              {ingredient.name}
            </li>
          )
        )}
      </ul>
    </section>
  );
}
