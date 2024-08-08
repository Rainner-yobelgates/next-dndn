"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import formatCurrency from '@/utils/FormatCurrency';
import Image from "next/image";

const Product = ({api}) => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        swipeToSlide: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
  return (
     <div className="slider-container">
      <Slider {...settings}>
        {api?.payload.map((product, index) => {
            return (
                <Link href="" className="w-full p-4" key={index}>
                    <div className="card bg-base-100 shadow-lg">
                        <figure className="flex h-64"> {/* Set a fixed height for the figure */}
                            <Image
                            src={`https://api.al-miffa.or.id/storage/${product.images[0].path}`} // Dynamic path to your image
                            alt="Shoes"
                            layout="responsive"
                            width={500} // Set a default width
                            height={500} // Set a default height
                            className="object-cover w-full h-full" // Ensure the image covers the container
                            />
                        </figure>
                        <div className="card-body text-center gap-0">
                            <h2 className="text-md">{product.name}</h2>
                            <p className="font-bold text-sm mb-3">IDR {formatCurrency(product.price)}</p>
                            <p className="font-bold text-sm">{product.brand.name}</p>
                        </div>
                    </div>
                </Link>
            )
        })}
     </Slider>
     </div>
  )
}

export default Product