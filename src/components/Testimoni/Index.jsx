"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3 > 4 ? 4 : 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
    {
        breakpoint: 1140,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
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
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <img 
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    alt="Shoes" />
                </div>
            </div>
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <img 
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    alt="Shoes" />
                </div>
            </div>
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <img 
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    alt="Shoes" />
                </div>
            </div>
            {/* <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <img 
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    alt="Shoes" />
                </div>
            </div>
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <img 
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    alt="Shoes" />
                </div>
            </div>
            <div className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <img 
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    alt="Shoes" />
                </div>
            </div> */}
     </Slider>
    </div>
  )
}

export default Testimoni