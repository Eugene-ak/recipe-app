import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { SiNuxtdotjs } from "react-icons/si";

export default function Navbar() {
  return (
    <NavigationMenu className="border-b px-4 md:px-8 lg:px-[10rem] xl:px-[15rem] 2xl:px-[20rem] py-2 justify-between">
      <NavigationMenuLink href="/" className="flex flex-row items-center gap-2">
        <SiNuxtdotjs className="!w-5 !h-5 text-4xl text-green-600" />
        <span className="font-bold">Nuxtcipes</span>
      </NavigationMenuLink>
      <NavigationMenuLink href="/">Home</NavigationMenuLink>
    </NavigationMenu>
  );
}
