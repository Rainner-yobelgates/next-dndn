'use client'
import { cn } from "@/lib/utils"
import {
    AccordionPlus,
    AccordionContentPlus,
    AccordionItemPlus,
    AccordionTriggerPlus,
} from "@/components/ui/accordion-plus"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/cards/ProductCard"
import useCollection from "@/hooks/useCollection"
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton"
import { InputHTMLAttributes, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Plus } from "lucide-react"


const page = ({ params, searchParams }: {
    params: {
        slug: string
    },
    searchParams: URLSearchParams
}) => {

    const path = usePathname()
    const query = new URLSearchParams()

    const { slug } = params

    const { data: dataCollection, isLoading: isLoadingCollection, refetch } = useCollection(slug, {
        query: searchParams,
    })

    // query
    const [queryTxt, setQueryTxt] = useState<string>('')
    // sort_by (asc, desc, price-asc, price-desc, date-asc, date-desc)
    const [sortBy, setSortBy] = useState<string | undefined>()
    // with_stock (in, out)
    const [withStock, setWithStock] = useState<string | undefined>()
    // with_type (man, woman)
    const [withType, setWithType] = useState<string | undefined>()
    // from_price (number) & to_price (number)
    const [fromPrice, setFromPrice] = useState<string | undefined>()
    const [toPrice, setToPrice] = useState<string | undefined>()

    const handleSortBy = (value: string) => {
        setSortBy(value)
    }

    const handleWithStock = (value: string) => {
        if (withStock === value) {
            setWithStock(undefined)
        } else {
            setWithStock(value)
        }
    }

    const handleWithType = (value: string) => {
        if (withType === value) {
            setWithType(undefined)
        } else {
            setWithType(value)
        }
    }

    const handleFromPrice = (value: InputHTMLAttributes<HTMLInputElement>) => {
        setFromPrice(value.value as string)
    }

    const handleToPrice = (value: InputHTMLAttributes<HTMLInputElement>) => {
        setToPrice(value.value as string)
    }

    useEffect(() => {

        // if (sortBy) query.set('sort_by', sortBy)
        // if (withStock) query.set('with_stock', withStock)
        // if (withType) query.set('with_type', withType)
        // if (fromPrice) query.set('from_price', fromPrice)
        // if (toPrice) query.set('to_price', toPrice)

        // if (query.toString().length > 0)
        //     window.location.assign(`/${path}?${query.toString()}`)
    }, [sortBy, withStock, withType, fromPrice, toPrice])


    const renderProduct = () => {
        if (isLoadingCollection) {
            return Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))
        }

        return dataCollection?.data.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))
    }

    return (
        <div className="container py-6 mb-24">
            <main className="flex flex-col ">
                <h1 className="text-3xl font-bold text-black">Daftar Koleksi</h1>
                <p>
                    Koleksi produk yang tersedia di toko kami
                </p>
                {/* Filters Side */}
                <Button className="sm:hidden mt-5 gap-x-3" onClick={() => console.log('clicked')}>
                    <span>Filter</span> <Plus />
                </Button>
                <div className="flex flex-wrap">
                    <div className={cn(
                        "hidden lg:flex flex-col",
                        // "lg:sticky lg:top-20",
                        "lg:w-[25%] mr-8"
                    )}>
                        <div className="sticky top-12">
                            {/* <h3 className="text-lg font-bold text-black">Filter</h3> */}
                            <div className="mt-0">
                                <AccordionPlus type="single" collapsible className="pr-5 mt-12">
                                    <AccordionItemPlus value="item-1">
                                        <AccordionTriggerPlus>
                                            <h4 className="text-base font-bold text-black">Urut Berdasarkan</h4>
                                        </AccordionTriggerPlus>
                                        <AccordionContentPlus>
                                            <ul className="mb-2 space-y-2">
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox />
                                                    <span>Alfabetis, A-Z</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox />
                                                    <span>Alfabetis, Z-A</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox />
                                                    <span>Harga, terendah ke tertinggi</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox />
                                                    <span>Harga, tertinggi ke terendah</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox />
                                                    <span>Tanggal, lama ke terbaru</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox />
                                                    <span>Tanggal, baru ke terlama</span>
                                                </li>
                                            </ul>
                                        </AccordionContentPlus>
                                    </AccordionItemPlus>
                                </AccordionPlus>
                            </div>
                            {/* <div className="mt-4">
                            <h4 className="text-base font-bold text-black">Filter berdasarkan</h4>
                        </div> */}
                            <div className="mt-4">
                                <AccordionPlus type="single" collapsible className="pr-5">
                                    <AccordionItemPlus value="item-1">
                                        <AccordionTriggerPlus>
                                            <h4 className="text-base font-bold text-black">Ketersediaan</h4>
                                        </AccordionTriggerPlus>
                                        <AccordionContentPlus>
                                            <ul className="mb-2 space-y-2">
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox onCheckedChange={() => handleWithStock('in')} checked={withStock === 'in'} />
                                                    <span>Masih Tersedia</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox onCheckedChange={() => handleWithStock('out')} checked={withStock === 'out'} />
                                                    <span>Tidak Tersedia</span>
                                                </li>
                                            </ul>
                                        </AccordionContentPlus>
                                    </AccordionItemPlus>
                                </AccordionPlus>
                            </div>
                            {slug == 'new-arrival-collections' && (
                                <div className="mt-4">
                                    <AccordionPlus type="single" collapsible className="pr-5">
                                        <AccordionItemPlus value="item-1">
                                            <AccordionTriggerPlus>
                                                <h4 className="text-base font-bold text-black">Tipe Produk</h4>
                                            </AccordionTriggerPlus>
                                            <AccordionContentPlus>
                                                <ul className="mb-2 space-y-2">
                                                    <li className="text-base text-black space-x-2">
                                                        <Checkbox onCheckedChange={() => handleWithType("man")} checked={withType === 'man'} />
                                                        <span>Pria</span>
                                                    </li>
                                                    <li className="text-base text-black space-x-2">
                                                        <Checkbox onCheckedChange={() => handleWithType("woman")} checked={withType === 'woman'} />
                                                        <span>Wanita</span>
                                                    </li>
                                                </ul>
                                            </AccordionContentPlus>
                                        </AccordionItemPlus>
                                    </AccordionPlus>
                                </div>
                            )}
                            <div className="mt-4">
                                <AccordionPlus type="single" collapsible className="pr-5">
                                    <AccordionItemPlus value="item-1">
                                        <AccordionTriggerPlus>
                                            <h4 className="text-base font-bold text-black">Harga</h4>
                                        </AccordionTriggerPlus>
                                        <AccordionContentPlus>
                                            <div className="grid grid-cols-6 space-y-4 items-start">
                                                <div className={cn(
                                                    "mt-3 justify-self-start",
                                                    "mt-4",
                                                    "-col-start-7"
                                                )}>
                                                    <span>Rp</span>
                                                </div>
                                                <div className="col-span-5">
                                                    <div className="flex space-x-2 items-center">
                                                        <Input onChange={handleFromPrice} type="number" className="w-1/2" placeholder="dari" min={0} />
                                                        <Input onChange={handleToPrice} type="number" className="w-1/2" placeholder="menjadi" min={0} />
                                                    </div>
                                                    <div className="mt-5 flex justify-between">
                                                        <Button variant={'outline'}>Reset</Button>
                                                        <Button >Terapkan</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContentPlus>
                                    </AccordionItemPlus>
                                </AccordionPlus>
                            </div>
                        </div>
                    </div>
                    {/* List Product Side */}
                    <div className="lg:w-[70%]">
                        <div className={cn(
                            "mt-12 grid grid-cols-2 gap-y-6 gap-x-3 sm:grid-cols-4 lg:gap-x-8",
                        )}>
                            {renderProduct()}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page