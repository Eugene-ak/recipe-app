import Image from "next/image";
import Stats from "./Stats";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type Recipe = {
  id: number;
  name: string;
  image: string;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  instructions: string[];
};

export default function RecipeDetails({ recipe }: { recipe: Recipe }) {
  return (
    <section className="w-full min-h-screen px-4 md:px-8 lg:px-[10rem] xl:px-[20rem] 2xl:px-[30rem] py-10 flex flex-col gap-4">
      <h1 className="text-4xl">{recipe.name}</h1>
      <Stats
        cookTimeMinutes={recipe.cookTimeMinutes}
        calories={recipe.caloriesPerServing}
        reviewCount={recipe.reviewCount}
        rating={recipe.rating}
      />
      <hr />
      <div className="w-full h-max xl:h-[700px] overflow-hidden rounded-lg">
        <Image
          src={recipe.image}
          width={500}
          height={500}
          alt="Food"
          className="w-full h-full object-cover aspect-square"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-3xl mb-3">Ingredients</h2>
        <ul className="w-max grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox id={ingredient} />
              <Label htmlFor={ingredient} className="text-base font-normal">
                {ingredient}
              </Label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl mb-3">Instructions</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2 grid grid-cols-[auto_1fr] gap-2">
              <span className="bg-amber-500 text-white rounded-[50%] flex items-center justify-center w-6 h-6">
                {index + 1}
              </span>
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
