'use client'
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { Brand } from "@/types/brand";
import Image from "next/image";

interface IBrandProps {
    isLoading: boolean;
    data: Brand[] | undefined;
}

const BrandList: React.FC<IBrandProps> = ({ data, isLoading }) => {

    if (!isLoading && data)
        return (
            <Marquee
                fade={true}
                direction="left"
                reverse={false}
                pauseOnHover={false}
                className="bg-gray-100 py-3 space-x-32" // pass class to change gap or speed
                innerClassName="bg-gray-100 py-3 space-x-32" // pass class to change gap or speed
            >
                {data?.map((value, index) => (
                    <div key={index} className="h-60 w-56 p-10">
                        <div className="aspect-square h-full relative">
                            <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${value.logo}`} alt="reviews"
                                fill
                                sizes='200'
                                className='aspect-square object-contain rounded-md'
                            />
                        </div>
                    </div>
                ))}
            </Marquee>
        );
    // return (
    //     <>
    //         {!isLoading && data && (
    //             <div className="space-y-8 bg-gray-100 flex justify-center">
    //                 {/* Marquee */}
    //                 <div className="relative flex overflow-x-hidden w-10/12">
    //                     <div className="py-12 animate-marquee whitespace-nowrap flex w-full space-x-32">
    //                         {data?.map((value, index) => (
    //                             <div key={index} className="h-56 w-56 border rounded shadow-md">
    //                                 <div className="aspect-square h-full relative">
    //                                     <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${value.logo}`} alt="reviews"
    //                                         fill
    //                                         sizes='200'
    //                                         className='aspect-square object-cover rounded-md'
    //                                     />
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                     <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex w-full space-x-32">
    //                         {data.map((value, index) => (
    //                             <div key={index} className="h-56 w-56 border rounded shadow-md">
    //                                 <div className="aspect-square h-full relative">
    //                                     <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/storage/${value.logo}`} alt="reviews"
    //                                         fill
    //                                         sizes='200'
    //                                         className='aspect-square object-cover rounded-md'
    //                                     />
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    //         )}
    //     </>
    // );
}

export default BrandList