import { Recipe } from "@/app/results/page";
import Image from "next/image";
import Link from "next/link";

export default function SearchResultCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/results/${recipe.id}`}
      className="border border-black group hover:bg-black hover:text-white transition-all flex flex-col w-[312px]"
    >
      <div className="bg-black">
        <div className="overflow-hidden w-fit bg-black zero-clipped group-hover:clipped">
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={312}
            height={231}
            className="transition-all group-hover:scale-110"
          />
        </div>
      </div>
      <div className="flex flex-col p-4">
        <h2 className="font-bold text-xl">{recipe.title}</h2>
      </div>
    </Link>
  );
}
