type Equipment = {
  id: number;
  image: string;
  name: string;
  temperature?: {
    number: number;
    unit: string;
  };
};

type Ingredient = {
  id: number;
  image: string;
  name: string;
};

type Step = {
  equipment: Equipment[];
  ingredients: Ingredient[];
  number: number;
  step: string;
  length?: {
    number: number;
    unit: string;
  };
};

type Instructions = {
  name: string;
  steps: Step[];
};

export default async function RecipeInstructions({
  recipeId,
}: {
  recipeId: string;
}) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${process.env.SPOONACULAR_API_KEY}`
  );
  const instructions: Instructions[] = await data.json();
  if (!instructions[0]) {
    return;
  }
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-3xl">Instructions</h2>
      <ul className="flex flex-col gap-1">
        {instructions[0].steps.map((step: Step, index: number) => (
          <li key={index}>
            {step.number} - {step.step}
          </li>
        ))}
      </ul>
    </section>
  );
}
