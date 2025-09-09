export default async function RecipeDetails({ params }: { params: Promise<{ recipeId: string }> }) {
  const { recipeId } = await params;

  return (
    <section className="w-full min-h-screen px-4 md:px-8 lg:px-[15rem] xl:px-[20rem] py-20">
      <h1>Recipe Details for {recipeId}</h1>
    </section>
  )
}
