import ProductCard from "@/components/cards/ProductCard";
import CategoryCard from "@/components/cards/CategoryCard";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Product } from "@/types/product";
import { Skeleton } from "./ui/skeleton";
import ProductCardSkeleton from "./skeleton/ProductCardSkeleton";


interface CollectionListProps {
    title: string
    description: string
    products: Product[] | undefined
    isLoading: boolean
}

const CollectionList: React.FC<CollectionListProps> = ({ title, description, products, isLoading }) => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


    if (isLoading) {
        return (
            <div className="mt-8 space-y-8">
                <div>
                    <Skeleton className='h-4 w-1/2' />
                    <Skeleton className='h-4 w-1/2' />
                </div>
                <div className="">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <ProductCardSkeleton />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-8 space-y-8">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold leading-[1.1]">
                        {title}
                    </h1>
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {description}
                    </p>
                </div>
                <div className="space-x-4">
                    <button onClick={() => api?.scrollTo(current - 1)}>
                        {/* {api?.canScrollPrev() ?
                            <ArrowLeft /> : <ArrowLeft className="text-gray-400" />} */}
                        <ArrowLeft />
                    </button>
                    <button onClick={() => api?.scrollTo(current + 1)}>
                        {/* {api?.canScrollNext() ?
                            <ArrowRight /> : <ArrowRight className="text-gray-400" />} */}
                        <ArrowRight />
                    </button>
                </div>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                setApi={setApi}
                className="w-full max-w-full"
            >
                <CarouselContent>
                    {products?.map((product) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}
                    {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <ProductCard product={{
                            id: '1',
                            description: 'Baju Arsenal',
                            Store: {
                                name: 'Store',
                            },
                            name: 'Baju Arsenal',
                            price: "100000",
                            Category: {
                                name: 'Baju'
                            },
                            images: [{
                                url: 'https://api.al-miffa.or.id/storage/products/W9XNcWZJ7J0ikmSy-3TZjTFRLWWeseKZK-G4MuwuvyRygjEcrl.webp'
                            }],
                            slug: 'slug',
                            storeId: '1',
                        }} />
                    </CarouselItem> */}
                    {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <ProductCard product={{
                            id: '2',
                            description: 'Bitcoin',
                            Store: {
                                name: 'Store',
                            },
                            name: 'Bitcoin',
                            price: "100000",
                            Category: {
                                name: 'Aksesoris'
                            },
                            images: [{
                                url: 'https://api.al-miffa.or.id/storage/products/9EveQBIbm3xDUJag-GIDDNkGm7vU3WWsL-8LUYmQQPttOmfXAv.webp'
                            }],
                            slug: 'slug',
                            storeId: '1',
                        }} />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <ProductCard product={{
                            id: '1',
                            description: 'Baju Arsenal',
                            Store: {
                                name: 'Store',
                            },
                            name: 'Baju Arsenal',
                            price: "100000",
                            Category: {
                                name: 'Baju'
                            },
                            images: [{
                                url: 'https://api.al-miffa.or.id/storage/products/W9XNcWZJ7J0ikmSy-3TZjTFRLWWeseKZK-G4MuwuvyRygjEcrl.webp'
                            }],
                            slug: 'slug',
                            storeId: '1',
                        }} />
                    </CarouselItem> */}
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
        </div>
    );
}

export default CollectionList