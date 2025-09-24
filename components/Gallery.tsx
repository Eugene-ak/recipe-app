"use client";

import { getRecipes } from "@/lib/api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import { Spinner } from "./ui/shadcn-io/spinner";

type Recipe = {
  id: number;
  name: string;
  image: string;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  rating: number;
  reviewCount: number;
};

export default function Gallery() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchRecipes = async (skip: number) => {
    setIsLoading(true);
    setSkip(skip);
    const data = await getRecipes(skip);
    setRecipes(data.recipes);
    setTotal(data.total);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipes(skip);
  }, [skip]);

  return (
    <section
      id="recipes"
      className="w-full h-max px-4 md:px-8 lg:px-[10rem] xl:px-[15rem] 2xl:px-[20rem] py-20"
    >
      <div className="my-4 flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Discover, Create, Share
        </h1>
        <p>Check out our most popular recipes!</p>
      </div>
      <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="w-full py-36 col-span-3 flex justify-center">
            <Spinner variant="bars" className="text-amber-500" />
          </div>
        ) : (
          recipes.map((recipe: Recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              image={recipe.image}
              cookTimeMinutes={recipe.cookTimeMinutes}
              calories={recipe.caloriesPerServing}
              rating={recipe.rating}
              reviewCount={recipe.reviewCount}
            />
          ))
        )}
      </div>
      <div className="w-full flex justify-center mt-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSkip(skip - 9);
                }}
                aria-disabled={skip === 0}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className={skip === 0 ? "bg-amber-500 text-white" : ""}
                aria-current={skip === 0}
                aria-disabled={skip === 0}
                onClick={(e) => {
                  e.preventDefault();
                  setSkip(0);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className={skip === 9 ? "bg-amber-500 text-white" : ""}
                aria-current={skip === 9}
                aria-disabled={skip === 9}
                onClick={(e) => {
                  e.preventDefault();
                  setSkip(9);
                }}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className={skip === 18 ? "bg-amber-500 text-white" : ""}
                aria-current={skip === 18}
                aria-disabled={skip === 18}
                onClick={(e) => {
                  e.preventDefault();
                  setSkip(18);
                }}
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className={skip === 27 ? "bg-amber-500 text-white" : ""}
                aria-current={skip === 27}
                aria-disabled={skip === 27}
                onClick={(e) => {
                  e.preventDefault();
                  setSkip(27);
                }}
              >
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className={skip === 36 ? "bg-amber-500 text-white" : ""}
                aria-current={skip === 36}
                aria-disabled={skip === 36}
                onClick={(e) => {
                  e.preventDefault();
                  setSkip(36);
                }}
              >
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className={skip === 45 ? "bg-amber-500 text-white" : ""}
                aria-current={skip === 45}
                aria-disabled={skip === 45}
                onClick={(e) => {
                  e.preventDefault();
                  setSkip(45);
                }}
              >
                6
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSkip(skip + 9);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
