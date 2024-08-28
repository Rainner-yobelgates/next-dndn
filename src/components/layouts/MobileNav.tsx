import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Icons } from "../Icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const MobileNav = () => {
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
                        <div className='text-sm'>
                            <Accordion
                                type='multiple'
                                defaultValue={['item-1', 'item-2']}
                                className='w-full'
                            >
                                <AccordionItem value='item-1'>
                                    <AccordionTrigger>Pria</AccordionTrigger>
                                    <AccordionContent>
                                        <div className='flex flex-col gap-y-2 text-muted-foreground'>
                                            <Link
                                                onClick={() => setIsOpen(false)}
                                                href='/collections/man-collections'
                                            >
                                                Semua Koleksi Pria
                                            </Link>
                                            <Link
                                                onClick={() => setIsOpen(false)}
                                                href='/collections/man-collections'
                                            >
                                                Semua Brand Khusus Pria
                                            </Link>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value='item-2'>
                                    <AccordionTrigger>Wanita</AccordionTrigger>
                                    <AccordionContent>
                                        <div className='flex flex-col gap-y-2 text-muted-foreground'>
                                            <Link
                                                onClick={() => setIsOpen(false)}
                                                href='/collections/woman-collections'
                                            >
                                                Semua Koleksi Wanita
                                            </Link>
                                            <Link
                                                onClick={() => setIsOpen(false)}
                                                href='/collections/woman-collections'
                                            >
                                                Semua Brand Khusus Wanita
                                            </Link>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
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