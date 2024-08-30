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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Plus } from "lucide-react"
import toast from "react-hot-toast"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


const page = ({
    params,
    searchParams
}: {
    params: {
        slug: string
    },
    searchParams: URLSearchParams
}) => {
    const { slug } = params;

    const router = useRouter();
    const path = usePathname();
    const usearchParams = useSearchParams();

    // State variables for filters
    const [sortBy, setSortBy] = useState<string | null>(usearchParams.get("sort_by"));
    const [withStock, setWithStock] = useState<string | null>(usearchParams.get("with_stock"));
    const [withType, setWithType] = useState<string | null>(usearchParams.get("with_type"));
    const [fromPrice, setFromPrice] = useState<string | null>(usearchParams.get("from_price"));
    const [toPrice, setToPrice] = useState<string | null>(usearchParams.get("to_price"));

    // Fetch data based on current filters
    const { data: dataCollection, isLoading: isLoadingCollection, refetch } = useCollection(slug, {
        query: usearchParams && searchParams,
    });

    useEffect(() => {
        const query = new URLSearchParams();

        if (sortBy) query.set('sort_by', sortBy);
        if (!sortBy) query.delete('sort_by');
        if (withStock) query.set('with_stock', withStock);
        if (!withStock) query.delete('with_stock');
        if (withType) query.set('with_type', withType);
        if (!withType) query.delete('with_type');
        if (fromPrice) query.set('from_price', fromPrice);
        if (!fromPrice) query.delete('from_price');
        if (toPrice) query.set('to_price', toPrice);
        if (!toPrice) query.delete('to_price');

        router.push(`${path}?${query.toString()}`);

    }, [sortBy, withStock, withType, fromPrice, toPrice]);

    useEffect(() => {
        refetch();
    }, [usearchParams]);

    // Handle filter changes
    const handleSortByChange = (value: string) => {
        setSortBy(sortBy === value ? null : value);
    };

    const handleWithStockChange = (value: string) => {
        setWithStock(withStock === value ? null : value);
    };

    const handleWithTypeChange = (value: string) => {
        setWithType(withType === value ? null : value);
    };

    const handleFromPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFromPrice(e.target.value);
    };

    const handleToPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToPrice(e.target.value);
    };

    const applyPriceFilter = () => {
        if (!fromPrice || !toPrice) {
            toast.error("Please enter both 'from' and 'to' price values");
        }
    };


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
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="lg:hidden mt-5 gap-x-3 bg-primary" onClick={() => console.log('clicked')}>
                            <span>Filter</span> <Plus />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
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
                                                <Checkbox onCheckedChange={() => handleSortByChange("alpha-asc")} checked={sortBy === "alpha-asc"} />
                                                <span>Alfabetis, A-Z</span>
                                            </li>
                                            <li className="text-base text-black space-x-2">
                                                <Checkbox onCheckedChange={() => handleSortByChange("alpha-desc")} checked={sortBy === "alpha-desc"} />
                                                <span>Alfabetis, Z-A</span>
                                            </li>
                                            <li className="text-base text-black space-x-2">
                                                <Checkbox onCheckedChange={() => handleSortByChange("price-asc")} checked={sortBy === "price-asc"} />
                                                <span>Harga, terendah ke tertinggi</span>
                                            </li>
                                            <li className="text-base text-black space-x-2">
                                                <Checkbox onCheckedChange={() => handleSortByChange("price-desc")} checked={sortBy === "price-desc"} />
                                                <span>Harga, tertinggi ke terendah</span>
                                            </li>
                                            <li className="text-base text-black space-x-2">
                                                <Checkbox onCheckedChange={() => handleSortByChange("date-asc")} checked={sortBy === "date-asc"} />
                                                <span>Tanggal, lama ke terbaru</span>
                                            </li>
                                            <li className="text-base text-black space-x-2">
                                                <Checkbox onCheckedChange={() => handleSortByChange("date-desc")} checked={sortBy === "date-desc"} />
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
                                                <Checkbox onCheckedChange={() => handleWithStockChange('in')} checked={withStock === 'in'} />
                                                <span>Masih Tersedia</span>
                                            </li>
                                            <li className="text-base text-black space-x-2">
                                                <Checkbox onCheckedChange={() => handleWithStockChange("out")} checked={withStock === 'out'} />
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
                                                    <Checkbox onCheckedChange={() => handleWithTypeChange("man")} checked={withType === 'man'} />
                                                    <span>Pria</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox onCheckedChange={() => handleWithTypeChange("woman")} checked={withType === 'woman'} />
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
                                                    <Input onChange={handleFromPriceChange} type="number" className="w-1/2" placeholder="dari" min={0} />
                                                    <Input onChange={handleToPriceChange} type="number" className="w-1/2" placeholder="menjadi" min={0} />
                                                </div>
                                                <div className="mt-5 flex justify-between">
                                                    <Button variant={'outline'}
                                                        onClick={() => {
                                                            setFromPrice(null);
                                                            setToPrice(null);
                                                        }}
                                                    >Reset</Button>
                                                    <Button onClick={applyPriceFilter} >Terapkan</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContentPlus>
                                </AccordionItemPlus>
                            </AccordionPlus>
                        </div>
                    </SheetContent>
                </Sheet>
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
                                                    <Checkbox onCheckedChange={() => handleSortByChange("alpha-asc")} checked={sortBy === "alpha-asc"} />
                                                    <span>Alfabetis, A-Z</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox onCheckedChange={() => handleSortByChange("alpha-desc")} checked={sortBy === "alpha-desc"} />
                                                    <span>Alfabetis, Z-A</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox onCheckedChange={() => handleSortByChange("price-asc")} checked={sortBy === "price-asc"} />
                                                    <span>Harga, terendah ke tertinggi</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox onCheckedChange={() => handleSortByChange("price-desc")} checked={sortBy === "price-desc"} />
                                                    <span>Harga, tertinggi ke terendah</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox onCheckedChange={() => handleSortByChange("date-asc")} checked={sortBy === "date-asc"} />
                                                    <span>Tanggal, lama ke terbaru</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox onCheckedChange={() => handleSortByChange("date-desc")} checked={sortBy === "date-desc"} />
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
                                                    <Checkbox onCheckedChange={() => handleWithStockChange('in')} checked={withStock === 'in'} />
                                                    <span>Masih Tersedia</span>
                                                </li>
                                                <li className="text-base text-black space-x-2">
                                                    <Checkbox onCheckedChange={() => handleWithStockChange("out")} checked={withStock === 'out'} />
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
                                                        <Checkbox onCheckedChange={() => handleWithTypeChange("man")} checked={withType === 'man'} />
                                                        <span>Pria</span>
                                                    </li>
                                                    <li className="text-base text-black space-x-2">
                                                        <Checkbox onCheckedChange={() => handleWithTypeChange("woman")} checked={withType === 'woman'} />
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
                                                        <Input onChange={handleFromPriceChange} type="number" className="w-1/2" placeholder="dari" min={0} />
                                                        <Input onChange={handleToPriceChange} type="number" className="w-1/2" placeholder="menjadi" min={0} />
                                                    </div>
                                                    <div className="mt-5 flex justify-between">
                                                        <Button variant={'outline'}
                                                            onClick={() => {
                                                                setFromPrice(null);
                                                                setToPrice(null);
                                                            }}
                                                        >Reset</Button>
                                                        <Button onClick={applyPriceFilter} >Terapkan</Button>
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
                    <div className="w-full lg:w-[70%]">
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