"use client"

import { forwardRef } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetTrigger, SheetHeader, SheetClose } from "./sheet";
import { RiMenu3Fill } from "react-icons/ri";
import { DialogTitle } from "@radix-ui/react-dialog";

const niveles: { title: string; href: string; description: string }[] = [
  {
    title: "Inicial",
    href: "/niveles/inicial",
    description:
      "Educación de niños y niñas desde el nacimiento hasta los 6 años.",
  },
  {
    title: "Primaria",
    href: "/niveles/primaria",
    description:
      "Segundo tramo educativo de los sistemas nacionales de educación.",
  },
  {
    title: "Secundaria",
    href: "/niveles/secundaria",
    description:
      "Tercer tramo educativo de los sistemas nacionales de educación.",
  }
];

export function Navbar() {
  return (
    <div className="fixed bg-primary-blue p-2 flex items-center justify-between w-full z-50">
      {/* Logo */}
      <Link href="/">
        <img src="/assets/logos/logoSP.svg" alt="" />
      </Link>
   
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
        <NavigationMenuItem>
            <Link href="/nosotros" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Nosotros
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Niveles</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {niveles.map(({description, href, title}) => (
                  <ListItem
                    key={title}
                    title={title}
                    href={href}
                  >
                    {description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/escuela-deportiva" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Escuela deportiva
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/administracion" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Administración
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pastoral" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pastoral
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger>
            <RiMenu3Fill size={30} color="white" />
          </SheetTrigger>
          
          <SheetContent>
            <DialogTitle>Instituto San Pablo</DialogTitle>
            <SheetHeader>
              <SheetDescription className="flex flex-col space-y-6 items-start w-full text-lg text-slate-200 mt-10">
                <SheetClose asChild> 
                  <Link href="/">Inicio</Link>
                </SheetClose>
                <SheetClose asChild> 
                  <Link href="/nosotros">Nosotros</Link>
                </SheetClose>
                <SheetClose asChild> 
                  <Link href="/niveles/inicial">Nivel inicial</Link>
                </SheetClose>
                <SheetClose asChild> 
                  <Link href="/niveles/primaria">Nivel primario</Link>
                </SheetClose>
                <SheetClose asChild> 
                  <Link href="/niveles/secundaria">Nivel secundario</Link>
                </SheetClose>
                <SheetClose asChild> 
                  <Link href="/escuela-deportiva">Escuela deportiva</Link>
                </SheetClose>
                <SheetClose asChild> 
                  <Link href="/administracion">Administración</Link>
                </SheetClose>
                <SheetClose asChild> 
                  <Link  href="/pastoral">Pastoral</Link>
                </SheetClose>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || ""}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
