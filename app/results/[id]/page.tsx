import BasicRecipeInformation from "@/components/basic-recipe-information";
import RecipeIngredients from "@/components/recipe-ingredients";
import RecipeInstructions from "@/components/recipe-instructions";

export default async function RecipePage({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: { callbackUrl: string };
}) {
  return (
    <main className="flex flex-col gap-8 mx-auto max-w-screen-sm p-8">
      <BasicRecipeInformation
        recipeId={id}
        callbackUrl={searchParams.callbackUrl}
      />
      <RecipeIngredients recipeId={id} />
      <RecipeInstructions recipeId={id} />
    </main>
  );
}
