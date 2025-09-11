import Image from "next/image";
import Stats from "./Stats";
import food from "@/public/assets/meal1.jpg";

export default function RecipeDetails({ recipeId }: { recipeId: string }) {
  return (
    <section className="w-full min-h-screen px-4 md:px-8 lg:px-[15rem] xl:px-[20rem] py-20 flex flex-col gap-4">
      <h1 className="text-4xl">Classic Margherita Pizza {recipeId}</h1>
      <Stats />
      <hr />
      <Image src={food} alt="Food" className="w-full h-[20rem] object-cover" />
      <div>
        <h2>Ingredients</h2>
      </div>
      <div>
        <h2>Instructions</h2>
      </div>
    </section>
  );
}
