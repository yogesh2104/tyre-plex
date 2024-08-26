import Link from "next/link"
import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { BikeTyresItem, CarTyreItem, MoreItem } from "@/@fakeDB/db"


export function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <div className="flex gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold"><span className="sr-only">TyrePlex</span></Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Car Tyres</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Bike Tyres</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Tyre Pressure</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Commercial Tyres</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Accessories</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">More</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-3">
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">TyrePlex</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Car Tyres</NavigationMenuTrigger>
                <NavigationMenuContent >
                  <p className="p-2 text-xs">Popular Car Tyre Brands</p>
                  <ul className="grid w-[10px] gap-3 p-2 md:w-[200px]">
                    {CarTyreItem.map((ctyre) => (
                      <NavigationMenuLink asChild key={ctyre.title}>
                        <Link href={ctyre.href} className="text-sm"> {ctyre.title}</Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Bike Tyres</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <p className="p-2 text-xs">Popular Bike Tyre Brandss</p>
                  <ul className="grid w-[10px] gap-3 p-2 md:w-[200px]">
                    {BikeTyresItem.map((btyre) => (
                      <NavigationMenuLink asChild key={btyre.title}>
                        <Link href={btyre.href} className="text-sm"> {btyre.title}</Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <Link href="#" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group ">Tyre Pressure</Link>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Commercial Tyres</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <Link href={"#"} className="p-2 text-xs grid w-[10px] gap-3 md:w-[200px]">All Commercial Tyres</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <Link href={"#"} className="p-2 mt-2 text-xs grid w-[10px] gap-3 md:w-[200px]">Accessories</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link href={"#"} className="p-2 text-xs grid w-[10px] gap-3 md:w-[200px]">Batteries</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Link href={"#"} className="p-2 text-xs grid w-[10px] gap-3 md:w-[200px]">Alloys Wheels</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[10px] gap-3 mt-2 p-2 md:w-[200px]">
                    {MoreItem.map((mitem) => (
                      <NavigationMenuLink asChild key={mitem.title}>
                        <Link href={mitem.href} className="text-sm"> {mitem.title}</Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex md:order-2 space-x-3">
          <Button variant="ghost" className="text-black  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center ">
            <User className="h-5 w-5 mr-1"/> Login
          </Button>
          
        </div>
      </div>
    </nav>
  )
}