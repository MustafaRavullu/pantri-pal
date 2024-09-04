import Image from "next/image";
import { GoPerson, GoTag } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import ThreeDButton from "./three-d-button";
import { IoIosArrowRoundBack } from "react-icons/io";

export default async function BasicRecipeInformation({
  recipeId,
  callbackUrl,
}: {
  recipeId: string;
  callbackUrl: string;
}) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
  );
  const recipe = await data.json();
  return (
    <section className="flex flex-col gap-4 max-w-[556px]">
      <div className="flex items-start gap-4">
        <ThreeDButton type="link" href={callbackUrl}>
          <IoIosArrowRoundBack className="size-6" />
        </ThreeDButton>
        <h1 className="font-bold text-4xl">{recipe.title}</h1>
      </div>
      <Image src={recipe.image} alt={recipe.title} width={556} height={370} />
      <div className="flex justify-between items-center">
        <div className="font-semibold flex items-center gap-1">
          <IoTimeOutline className="size-5" />
          Ready in: {recipe.readyInMinutes} min
        </div>
        <div className="font-semibold flex items-center gap-1">
          <GoPerson className="size-5" />
          Servings: {recipe.servings}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {recipe.diets
          .concat(recipe.dishTypes)
          .map((item: string, index: number) => (
            <div
              key={index}
              className="border bg-slate-100 px-2 py-1 rounded-full flex items-center gap-1"
            >
              <GoTag /> {item}
            </div>
          ))}
      </div>
      <ThreeDButton
        type="link"
        href={recipe.sourceUrl}
        bgStyles="w-full text-center font-bold"
        target="_blank"
      >
        See From Source
      </ThreeDButton>
    </section>
  );
}
