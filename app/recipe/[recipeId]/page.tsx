import RecipeDetails from "@/components/RecipeDetails";

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ recipeId: string }>;
}) {
  const recipeId = (await params).recipeId;
  const getRecipeById = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch recipe");
    }
    const recipe = await res.json();
    return recipe;
  }

  const recipe = await getRecipeById(recipeId);

  return (
    <>
      <RecipeDetails recipe={recipe} />
    </>
  );
}
