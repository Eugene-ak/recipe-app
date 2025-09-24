export const getRecipes = async (skip: number) => {
  const res = await fetch(
    `https://dummyjson.com/recipes?limit=9&skip=${skip}&select=id,name,image,cookTimeMinutes,caloriesPerServing,rating,reviewCount`,
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
