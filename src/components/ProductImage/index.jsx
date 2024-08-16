"use client"
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({images}) => {
  const [thumbnail, setThumbnail] = useState(`https://api.al-miffa.or.id/storage/${images[0].path}`);
  return (
    <>
        <Image 
        src={thumbnail} 
        style={{ aspectRatio: '1 / 1' }} 
        alt="Shoes" 
        className="w-full h-auto object-cover" 
        width={500}
        height={500}
        />
        <div className="flex flex-wrap mt-5">
            {images.map((imgSrc, index) => {
                return(
                    <div key={index} className="w-1/4 lg:w-1/5 xl:w-1/6 p-1">
                        <Image
                            className="w-full h-full object-cover cursor-pointer border-slate-300 border-4 rounded"
                            style={{ aspectRatio: '1 / 1' }}
                            onClick={() => setThumbnail(`https://api.al-miffa.or.id/storage/${imgSrc.path}`)}
                            src={`https://api.al-miffa.or.id/storage/${imgSrc.path}`}
                            width={200}
                            height={200}
                            alt="images of product"
                        />
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default ProductImage