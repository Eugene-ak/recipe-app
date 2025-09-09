import RecipeCard from "./RecipeCard";
import Food1 from "@/public/assets/meal1.jpg";
import Food2 from "@/public/assets/meal2.jpg";
import Food3 from "@/public/assets/meal3.jpg";
import Food4 from "@/public/assets/meal4.jpg";
import Food5 from "@/public/assets/meal5.jpeg";

export default function Gallery() {
  return (
    <section className="w-full h-max px-4 md:px-8 lg:px-[15rem] xl:px-[20rem] py-20">
      <div className="my-4 flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Discover, Create, Share
        </h1>
        <p>Check out our most popular recipes!</p>
      </div>
      <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <RecipeCard image={Food1} />
        <RecipeCard image={Food2} />
        <RecipeCard image={Food3} />
        <RecipeCard image={Food4} />
        <RecipeCard image={Food5} />
        <RecipeCard image={Food1} />
        <RecipeCard image={Food2} />
        <RecipeCard image={Food3} />
        <RecipeCard image={Food4} />
      </div>
    </section>
  );
}
