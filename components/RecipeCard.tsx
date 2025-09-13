import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Stats from "./Stats";

type Recipe = {
  image: string | StaticImageData;
  name: string;
  id: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  calories: number;
  rating: number;
  reviewCount: number;
};

export default function RecipeCard({
  image,
  name,
  id,
  prepTimeMinutes,
  cookTimeMinutes,
  calories,
  rating,
  reviewCount,
}: Recipe) {
  return (
    <Card className="p-0 h-[27rem] gap-0 overflow-hidden">
      <CardContent className="p-0 h-[70%] overflow-hidden">
        <Image
          src={image}
          width={400}
          height={300}
          alt="Recipe Image"
          className="object-cover w-full h-full"
        />
      </CardContent>
      <CardFooter className="z-10 h-[30%] bg-white px-2 py-3 justify-between">
        <p className="text-xl">{name}</p>
        <div>
          <Stats
            prepTimeMinutes={prepTimeMinutes}
            cookTimeMinutes={cookTimeMinutes}
            calories={calories}
            rating={rating}
            reviewCount={reviewCount}
          />
        </div>
        <Button className="w-max" asChild>
          <Link href={`/recipe/${id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
