import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Stats from "./Stats";

const recipeId = 1;

export default function RecipeCard({
  image,
}: {
  image: string | StaticImageData;
}) {
  return (
    <Card className="p-0 h-[27rem] gap-0 overflow-hidden">
      <CardContent className="p-0 h-[70%] overflow-hidden">
        <Image
          src={image}
          alt="Recipe Image"
          className="object-cover w-full h-full"
        />
      </CardContent>
      <CardFooter className="z-10 h-[30%] bg-white px-2 py-3 justify-between">
        <p className="text-xl">Classic Margharita Pizza</p>
        <div>
          <Stats />
        </div>
        <Button className="w-max" asChild>
          <Link href={`/recipe/${recipeId}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
