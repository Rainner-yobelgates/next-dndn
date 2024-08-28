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
import { ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";
import { Product } from "@/types/product";
import { Brand } from "@/types/brand";
import Image from "next/image";

const DesktopNav = ({
    logoFont,
    dataCollectionByMen,
    dataCollectionByWomen,
    dataBrand,
}: {
    logoFont: NextFont,
    dataCollectionByMen: Product[],
    dataCollectionByWomen: Product[],
    dataBrand: Brand[],
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
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <NavigationMenuLink href="/">Pria</NavigationMenuLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                <li className='row-span-3'>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            style={{
                                                backgroundImage: `url(https://api.al-miffa.or.id/storage/${dataCollectionByMen![0].images![0].path})`,
                                            }}
                                            className={cn(
                                                "flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md",
                                                // "bg-gradient-to-b from-muted/50 to-muted",
                                                "bg-cover bg-center",
                                            )} href='/'>
                                            {/* <p className='text-sm leading-tight text-muted-foreground'> */}
                                            <div className="backdrop-blur-sm p-2 rounded-lg">
                                                <p className='text-sm leading-tight text-white'>
                                                    Barang pria keren, murah dan berkualitas
                                                </p>
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href='/collections/man-collections' label={
                                    <div className="flex items-center justify-between mb-4">
                                        <span>
                                            Semua Kategori Pria
                                        </span>
                                        <Badge className='text-xs'>Hot</Badge>
                                    </div>
                                }>
                                    Lihat semua kategori pria
                                </ListItem>
                                <ListItem href='/collections/man-collections' label='Brand Kategori Pria'>
                                    Lihat brand kategori pria
                                </ListItem>
                                {/* <ListItem href='#faq' label='Petunjuk Ketentuan & Faq'>
                                    Lihat petunjuk dan ketentuan kami
                                </ListItem> */}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <NavigationMenuLink href="/">Wanita</NavigationMenuLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                <li className='row-span-3'>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            style={{
                                                backgroundImage: `url(https://api.al-miffa.or.id/storage/products\/ozVgDwjKtWFRt968-MUdbgCyO6WBv9OgJ-kJFbL8s5vE6FiFpZ.webp)`,
                                            }}
                                            className={cn(
                                                "flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md",
                                                // "bg-gradient-to-b from-muted/50 to-muted",
                                                "bg-cover bg-center",
                                            )} href='/'>
                                            {/* <p className='text-sm leading-tight text-muted-foreground'> */}
                                            <div className="backdrop-blur-sm p-2 rounded-lg">
                                                <p className='text-sm leading-tight text-white'>
                                                    Barang wanita keren, murah dan berkualitas
                                                </p>
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href='/collections/woman-collections' label={
                                    <div className="flex items-center justify-between mb-4">
                                        <span>
                                            Semua Kategori Wanita
                                        </span>
                                        <Badge className='text-xs'>Hot</Badge>
                                    </div>
                                }>
                                    Lihat semua kategori wanita
                                </ListItem>
                                <ListItem href='/collections/woman-collections' label='Brand Kategori Wanita'>
                                    Lihat brand kategori wanita
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                        {/* <NavigationMenuContent>
                            <ul className='grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2'>
                                <ListItem href='/collections/woman-collections' label='Koleksi Wanita'>
                                    Koleksi barang untuk wanita
                                </ListItem>
                                <ListItem href='/collections/man-collections' label='Koleksi Pria'>
                                    Koleksi barang untuk pria
                                </ListItem>
                                <ListItem href='/collections/brand-collections' label='Daftar Brand'>
                                    Daftar brand yang tersedia
                                </ListItem>
                                <ListItem href='/collections/new-arrival-collections' label='Lihat Produk Terbaru'>
                                    Lihat produk terbaru Lainnya
                                </ListItem>
                            </ul>
                        </NavigationMenuContent> */}
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <NavigationMenuLink href="/">Brand</NavigationMenuLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2'>
                                {dataBrand.map((brand, index) => (
                                    <ListItem
                                        className="bg-cover bg-right"
                                        key={index}
                                        href={`/collections/brand-collections?brand=${brand.slug}`} label={
                                        <div className="flex items-center justify-between mb-4">
                                            <span>
                                                {brand.name}
                                            </span>
                                            <Image
                                                src={`https://api.al-miffa.or.id/storage/${brand.logo}`}
                                                width={50}
                                                height={50}
                                                alt={brand.name ?? ''}                                                
                                            />
                                        </div>
                                        }>                                        
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuLink href="/#faq">Syarat & Ketentuan / FAQ</NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default DesktopNav
