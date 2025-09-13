import PaginationComponent from "./PaginationComponent";
import RecipeCard from "./RecipeCard";

type Recipe = {
  id: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  rating: number;
  reviewCount: number;
};

export default async function Gallery() {
  const getRecipes = async () => {
    const res = await fetch(
      "https://dummyjson.com/recipes?limit=9&select=id,name,image,cookTimeMinutes,prepTimeMinutes,caloriesPerServing,rating,reviewCount",
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const recipes = await res.json();
    return recipes;
  };

  const recipes = await getRecipes();
  const totalRecipes = recipes.total;
  const totalPages = Math.ceil(totalRecipes / 9);
  console.log("Total Pages:", totalPages);
  console.log("total Recipes:", totalRecipes);

  return (
    <section className="w-full h-max px-4 md:px-8 lg:px-[10rem] xl:px-[15rem] py-20">
      <div className="my-4 flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Discover, Create, Share
        </h1>
        <p>Check out our most popular recipes!</p>
      </div>
      <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.recipes.map((recipe: Recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            prepTimeMinutes={recipe.prepTimeMinutes}
            cookTimeMinutes={recipe.cookTimeMinutes}
            calories={recipe.caloriesPerServing}
            rating={recipe.rating}
            reviewCount={recipe.reviewCount}
          />
        ))}
      </div>
      <PaginationComponent />
    </section>
  );
}
