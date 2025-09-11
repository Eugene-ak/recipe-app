import RecipeDetails from "@/components/RecipeDetails";

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ recipeId: string }>;
}) {
  const recipeId = (await params).recipeId;

  return (
    <>
      <RecipeDetails recipeId={recipeId} />
    </>
  );
}
