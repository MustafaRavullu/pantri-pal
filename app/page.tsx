import Link from "next/link";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuMilk } from "react-icons/lu";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFood, PiCookingPotThin } from "react-icons/pi";

export default async function Home() {
  return (
    <main className="min-h-screen bg-amber-300">
      <section className="flex flex-col justify-center items-center pt-20 md:pt-40">
        <h1 className="text-7xl font-thin">PantriPal</h1>
        <p className="text-sm font-black mb-8">Goal oriented recipe finder</p>
        <Link
          href={"/ingredient-search"}
          className="border relative border-black py-4 px-12 rounded-md bg-amber-50 font-semibold transition-colors group"
        >
          Let&apos;s Find Recipes
          <PiBowlFood className="absolute top-3 left-5 transition-all duration-500 group-hover:-top-6 group-hover:-left-6 opacity-0 group-hover:opacity-100 size-5" />
          <LuMilk className="absolute top-6 right-3 transition-all duration-500 group-hover:-top-6 group-hover:-right-6 opacity-0 group-hover:opacity-100 size-5" />
          <IoFastFoodOutline className="absolute bottom-1 left-12 transition-all duration-500 group-hover:-bottom-6 group-hover:-left-6 opacity-0 group-hover:opacity-100 size-5" />
          <MdOutlineEmojiFoodBeverage className="absolute bottom-5 right-12 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6 opacity-0 group-hover:opacity-100 size-5" />
        </Link>
      </section>
      <section className="flex flex-col justify-center items-center pt-8 gap-10 pb-20 md:pb-40">
        <h2 className="font-light text-xl text-center px-4">
          Find recipes based on{" "}
          <span className="font-bold">available ingredients</span>
        </h2>
        <div className="flex justify-center flex-col items-center">
          <PiCookingPotThin className="size-20" />
          <h3 className="font-semibold text-lg">Recipes</h3>
          <p className="text-gray-700">5000+</p>
        </div>
      </section>
    </main>
  );
}
