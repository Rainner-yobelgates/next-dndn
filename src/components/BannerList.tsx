import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Banner } from "@/types/banner"
import { Skeleton } from "./ui/skeleton"
import { motion } from "framer-motion"

interface IBannerListProps {
    banners: Banner[] | undefined
    isLoading: boolean
}

const BannerList: React.FC<IBannerListProps> = ({ banners, isLoading }) => {

    if (isLoading && !banners) {
        return (
            <div className="w-full h-[400px]">
                <Skeleton className="w-full h-[400px]" />
            </div>
        )
    }

    return (
        <Carousel className="w-full">
            <CarouselContent>
                {banners?.map((banner, index) => (
                    <CarouselItem key={index}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Card className="border-none h-[400px]">
                                <CardContent className="p-0">
                                    <div className="relative aspect-[1080/424]">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${banner.path}`}
                                            alt={`banner-${index}`}
                                            fetchPriority="high"
                                            decoding="async"
                                            fill
                                            priority
                                            sizes="100vw"
                                            className="w-full object-cover h-full"
                                        // width={800}
                                        // height={400}
                                        // priority={false}
                                        // placeholder="blur"
                                        // blurDataURL="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3Crect%20width='16'%20height='16'%20fill='%23e5e7eb'/%3E%3C/svg%3E"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
        </Carousel>
    )
}

export default BannerList;
