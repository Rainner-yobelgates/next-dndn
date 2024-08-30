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
                            <ProductCardSkeleton key={i} />
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
                    <button onClick={() => api?.scrollPrev()}>
                        {/* {api?.canScrollPrev() ?
                            <ArrowLeft /> : <ArrowLeft className="text-gray-400" />} */}
                        <ArrowLeft />
                    </button>
                    <button onClick={() => api?.scrollNext()}>
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
                    {products?.map((product, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}                    
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
        </div>
    );
}

export default CollectionList