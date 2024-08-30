import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Icons } from "../Icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Brand } from "@/types/brand"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { AccordionMobile, AccordionMobileItem, AccordionMobileSub, AccordionMobileSubItem } from "../AccordionMobile"

const MobileNav = ({
    dataBrandMen,
    dataBrandWomen,
    dataBrand,
    dataCategoryMen,
    dataCategoryWomen
}: {
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
    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <div className="flex lg:hidden xl:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant='ghost' size='icon' className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        <span className='sr-only'>Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side='left'>
                    <div className='px-2 flex flex-col gap-4'>
                        <Link
                            href='/'
                            className='flex items-center'
                            onClick={() => setIsOpen(false)}
                        >
                            <Icons.logo className='mr-2 h-4 w-4' aria-hidden='true' />
                            <span className='sr-only'>Home</span>
                        </Link>
                        <Link
                            onClick={() => setIsOpen(false)}
                            href='/'
                        >
                            Beranda
                        </Link>
                        <Link
                            onClick={() => setIsOpen(false)}
                            href='/collections/new-arrival-collections'
                        >
                            Koleksi Terbaru
                        </Link>
                        <Link
                            onClick={() => setIsOpen(false)}
                            href='/#testimoni'
                        >
                            Testimoni
                        </Link>
                        <AccordionMobile title="Pria">
                            <AccordionMobileSub title="Semua Kategori Pria">
                                {dataCategoryMen.map((category, index) => (
                                    <AccordionMobileSubItem key={index}>
                                        <Link href={`/collections/man-collections?category=${category.category.slug}`}>
                                            {category.category.name}
                                        </Link>
                                    </AccordionMobileSubItem>
                                ))}
                            </AccordionMobileSub>
                            <AccordionMobileSub title="Semua Brand Pria">
                                {dataBrandMen.map((data, index) => (
                                    <AccordionMobileSubItem key={index}>
                                        <Link href={`/collections/man-collections?brand=${data.brand.name}`}>
                                            {data.brand.name}
                                        </Link>
                                    </AccordionMobileSubItem>
                                ))}
                            </AccordionMobileSub>
                        </AccordionMobile>
                        <AccordionMobile title="Wanita">
                            <AccordionMobileSub title="Semua Kategori Wanita">
                                {dataCategoryWomen.map((category, index) => (
                                    <AccordionMobileSubItem key={index}>
                                        <Link href={`/collections/man-collections?category=${category.category.slug}`}>
                                            {category.category.name}
                                        </Link>
                                    </AccordionMobileSubItem>
                                ))}
                            </AccordionMobileSub>
                            <AccordionMobileSub title="Semua Brand Wanita">
                                {dataBrandWomen.map((data, index) => (
                                    <AccordionMobileSubItem key={index}>
                                        <Link href={`/collections/man-collections?brand=${data.brand.name}`}>
                                            {data.brand.name}
                                        </Link>
                                    </AccordionMobileSubItem>
                                ))}
                            </AccordionMobileSub>
                        </AccordionMobile>
                        <Link
                            onClick={() => setIsOpen(false)}
                            href='/#faq'
                        >
                            Petunjuk & Ketentuan / FAQ
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav