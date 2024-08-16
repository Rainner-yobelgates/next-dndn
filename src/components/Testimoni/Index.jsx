"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    swipeToSlide: false,
    draggable: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
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

const Testimoni = () => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="w-full p-4">
          <div className="card bg-base-100 shadow-lg">
          <Image
            src={`/${index + 1}.png`} // Dynamic path to your image
            alt="Testimoni"
            width={500} // Set a default width
            height={500} // Set a default height
            className="object-cover w-full h-full" // Ensure the image covers the container
            />
          </div>
        </div>
      ))}
     </Slider>
    </div>
  )
}

export default Testimoni