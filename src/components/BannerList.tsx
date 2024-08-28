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
                            <Card className="border-none">
                                <CardContent className="p-0">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${banner.path}`}
                                        alt={`banner-${index}`}
                                        width={800}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />
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
