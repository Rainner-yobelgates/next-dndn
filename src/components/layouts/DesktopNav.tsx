import { cn } from "@/lib/utils"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '../ui/navigation-menu';
import { Icons } from "../Icons";
import { ListItem } from "./ListItem";
import { NextFont } from "next/dist/compiled/@next/font";
import { ChevronDown, ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";
import { Product } from "@/types/product";
import { Brand } from "@/types/brand";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger

} from "../ui/dropdown-menu";

const DesktopNav = ({
    logoFont,
    dataBrandMen,
    dataBrandWomen,
    dataBrand,
    dataCategoryMen,
    dataCategoryWomen
}: {
    logoFont: NextFont,
    dataBrandMen: {
        brand: {
            id: number
            name: string
        }
    }[],
    dataBrandWomen: {
        brand: {
            id: number
            name: string
        }
    }[],
    dataBrand: Brand[],
    dataCategoryMen: {
        category: {
            id: number
            name: string
            slug: string
        }
    }[],
    dataCategoryWomen: {
        category: {
            id: number
            name: string
            slug: string
        }
    }[]
}) => {
    return (
        <nav className={cn(
            // "hidden sm:flex items-center justify-between w-full",
            // "container px-2 sm:px-4 lg:px-6",
            // "py-3",
            "w-full",
            "flex justify-center"
        )}>
            <NavigationMenu className={cn(
                "w-full hidden lg:flex items-center justify-between",
                "space-x-10",
                // "py-3",
            )}>
                <NavigationMenuList>
                    <NavigationMenuLink href="/">Beranda</NavigationMenuLink>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuLink href="/collections/new-arrival-collections">Produk Terbaru</NavigationMenuLink>
                </NavigationMenuList>
                <NavigationMenuList>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center outline-none">
                            Pria
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <span>Kategori Pria</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            {dataCategoryMen.map((category, index) => (
                                                <DropdownMenuItem key={index} asChild>
                                                    <Link href={`/collections/man-collections?category=${category.category.slug}`}>
                                                        <span>{category.category.name}</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <span>Brand Pria</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            {dataBrandMen.map((brand, index) => (
                                                <DropdownMenuItem key={index} asChild>
                                                    <Link href={`/collections/man-collections?brand=${brand.brand.name}`}>
                                                        <span>{brand.brand.name}</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuList>
                <NavigationMenuList>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center outline-none">
                            Wanita
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <span>Kategori Wanita</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            {dataCategoryWomen.map((category, index) => (
                                                <DropdownMenuItem key={index} asChild>
                                                    <Link href={`/collections/woman-collections?category=${category.category.slug}`}>
                                                        <span>{category.category.name}</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <span>Brand Wanita</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            {dataBrandWomen.map((brand, index) => (
                                                <DropdownMenuItem key={index} asChild>
                                                    <Link href={`/collections/woman-collections?brand=${brand.brand.name}`}>
                                                        <span>{brand.brand.name}</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuList>
                <NavigationMenuList>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center outline-none" >
                            Brand <ChevronDown className="ml-2 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                {dataBrand.map((brand, index) => (
                                    <DropdownMenuItem key={index} asChild>
                                        <Link href={`/collections/brand-collections?brand=${brand.name}`}>
                                            <span>{brand.name}</span>
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuLink href="/#faq">Syarat & Ketentuan / FAQ</NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default DesktopNav
