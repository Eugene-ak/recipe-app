import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { WiTime9 } from "react-icons/wi";
import { BsFire } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { Button } from "./ui/button";
import Link from "next/link";

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
          <ul className="flex gap-6">
            <li className="flex items-center gap-1">
              <WiTime9 className="text-amber-500 text-sm" />
              <span>20</span>
            </li>
            <li className="flex items-center gap-1">
              <BsFire className="text-amber-500 text-sm" />
              <span>300</span>
            </li>
            <li className="flex items-center gap-1">
              <IoIosStar className="text-amber-500 text-sm" />
              <span>4.6 (98)</span>
            </li>
          </ul>
        </div>
        <Button className="w-max" asChild>
          <Link href={`/recipe/${recipeId}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
