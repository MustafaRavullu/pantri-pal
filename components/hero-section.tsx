import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-[5rem] md:text-[10rem] font-thin">PantriPal</h1>
      <div className="font-black mb-12 px-6 text-center">
        Recipe finder based on{" "}
        <span className="font-bold">available ingredients</span>
      </div>
      <Link href="/ingredient-search" className="bg-black z-0">
        <div className="z-10 bg-white hover:translate-x-3 transition-all hover:-translate-y-3 duration-[300ms] group border font-semibold border-black relative w-[300px] h-[75px] overflow-hidden">
          <MdOutlineKeyboardDoubleArrowRight className="absolute -left-24 size-5 top-1/2 -translate-y-1/2 group-hover:left-2 transition-all duration-500" />
          <span className="absolute top-1/2 -translate-y-1/2 left-3 group-hover:left-8 transition-all duration-300">
            Let&apos;s First Find Ingredients
          </span>
          <IoIosSearch className="absolute top-[1.7rem] right-3 size-5 transition-all group-hover:animate-searchCircular" />
        </div>
      </Link>
    </section>
  );
}
