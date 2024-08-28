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

const DesktopNav = ({
    logoFont,
}: {
    logoFont: NextFont,
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
                {/* <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Beranda
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                <li className='row-span-3'>
                                    <NavigationMenuLink asChild>
                                        <Link className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md' href='/'>
                                            <ShoppingBag className='h-6 w-6' />
                                            <div className={cn(
                                                'mb-2 mt-4 text-lg font-medium',
                                                logoFont.className,
                                            )}>DNDN</div>
                                            <p className='text-sm leading-tight text-muted-foreground'>
                                                Beli produk DNDN, tempat belanja online terpercaya, terlengkap dan termurah se-Indonesia.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href='/collections/new-arrival-collections' label={
                                    <div className="flex items-center justify-between mb-4">
                                        <span>
                                        Produk Terbaru
                                        </span>
                                        <Badge className='text-xs'>Hot</Badge>
                                    </div>
                                }>
                                    Lihat semua produk terbaru
                                </ListItem>
                                <ListItem href='/#categories' label='Testimoni'>
                                    Lihat testimoni dari pelanggan kami
                                </ListItem>
                                <ListItem href='/dashboard/stores' label='Petunjuk Ketentuan & Faq'>
                                    Lihat petunjuk dan ketentuan kami
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList> */}
                {/* <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <NavigationMenuLink href="/">Belanja</NavigationMenuLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
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
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList> */}
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
                                        <Link className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md' href='/'>
                                            <ShoppingBag className='h-6 w-6' />
                                            <div className={cn(
                                                'mb-2 mt-4 text-lg font-medium',
                                                logoFont.className,
                                            )}>DNDN</div>
                                            <p className='text-sm leading-tight text-muted-foreground'>
                                                Beli produk DNDN, tempat belanja online terpercaya, terlengkap dan termurah se-Indonesia.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href='/collections/new-arrival-collections' label={
                                    <div className="flex items-center justify-between mb-4">
                                        <span>
                                            Produk Terbaru
                                        </span>
                                        <Badge className='text-xs'>Hot</Badge>
                                    </div>
                                }>
                                    Lihat semua produk terbaru
                                </ListItem>
                                <ListItem href='#testimoni' label='Testimoni'>
                                    Lihat testimoni dari pelanggan kami
                                </ListItem>
                                <ListItem href='#faq' label='Petunjuk Ketentuan & Faq'>
                                    Lihat petunjuk dan ketentuan kami
                                </ListItem>
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
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <NavigationMenuLink href="/">Brand</NavigationMenuLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                <li className='row-span-3'>
                                    <NavigationMenuLink asChild>
                                        <Link className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md' href='/'>
                                            <ShoppingBag className='h-6 w-6' />
                                            <div className={cn(
                                                'mb-2 mt-4 text-lg font-medium',
                                                logoFont.className,
                                            )}>DNDN</div>
                                            <p className='text-sm leading-tight text-muted-foreground'>
                                                Beli produk DNDN, tempat belanja online terpercaya, terlengkap dan termurah se-Indonesia.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href='/collections/new-arrival-collections' label={
                                    <div className="flex items-center justify-between mb-4">
                                        <span>
                                            Produk Terbaru
                                        </span>
                                        <Badge className='text-xs'>Hot</Badge>
                                    </div>
                                }>
                                    Lihat semua produk terbaru
                                </ListItem>
                                <ListItem href='#testimoni' label='Testimoni'>
                                    Lihat testimoni dari pelanggan kami
                                </ListItem>
                                <ListItem href='#faq' label='Petunjuk Ketentuan & Faq'>
                                    Lihat petunjuk dan ketentuan kami
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuLink href="/">Syarat & Ketentuan / FAQ</NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default DesktopNav
