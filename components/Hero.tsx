import Image from "next/image";
import HeroImage from "@/public/assets/hero-image.png";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-[40rem] h-max bg-neutral-200 px-4 md:px-8 lg:px-[15rem] xl:px-[20rem] py-10 flex flex-col-reverse lg:grid lg:grid-cols-2 justify-center items-center text-center gap-6">
      <div className="lg:text-left flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Master the Kitchen with Ease: Unleash Your Inner Chef Today!
        </h1>
        <p className="text-lg">
          Discover recipes helping you to find the easiest way to cook
        </p>
        <Button className="w-max self-center lg:self-start" asChild>
          <Link href="/">Browse Recipes</Link>
        </Button>
      </div>
      <div className="flex justify-center lg:justify-end">
        <Image src={HeroImage} alt="Hero Image" className="w-[20rem] lg:w-[40rem] h-auto" />
      </div>
    </section>
  );
}
