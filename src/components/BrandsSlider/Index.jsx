"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';



const BrandsSlider = ({api}) => {
  console.log();
    let settings = {
      dots: true,
      infinite: true,
      slidesToShow: api.payload.length > 6 ? 6 : api.payload.length,
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
                  slidesToShow: api.payload.length > 3 ? 3 : api.payload.length,
                  slidesToScroll: 1,
                  dots: true
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: api.payload.length > 2 ? 2 : api.payload.length,
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
      {api.payload?.map((brand, index) => {
          return (
            <div key={index} className="w-full p-4">
              <div className="card bg-base-100 shadow-lg">
              <Image
                src={`https://api.al-miffa.or.id/storage/${brand.logo}`} // Dynamic path to your image
                alt={brand.name}
                width={500} // Set a default width
                height={500} // Set a default height
                className="object-cover w-full h-full" // Ensure the image covers the container
                />
            </div>
      </div>
          )
      })}
     </Slider>
    </div>
  )
}

export default BrandsSlider