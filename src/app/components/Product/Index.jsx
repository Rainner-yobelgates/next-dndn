"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7 > 4 ? 4 : 7,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    swipeToSlide: false,
    draggable: false,
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

const Product = () => {
  return (
     <div className="slider-container">
      <Slider {...settings}>
            <Link href="" className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p className="font-bold text-sm">IDR 200.000</p>
                    </div>
                </div>
            </Link>
            <Link href="" className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p className="font-bold text-sm">IDR 200.000</p>
                    </div>
                </div>
            </Link>
            <Link href="" className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p className="font-bold text-sm">IDR 200.000</p>
                    </div>
                </div>
            </Link>
            <Link href="" className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p className="font-bold text-sm">IDR 200.000</p>
                    </div>
                </div>
            </Link>
            <Link href="" className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p className="font-bold text-sm">IDR 200.000</p>
                    </div>
                </div>
            </Link>
            <Link href="" className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p className="font-bold text-sm">IDR 200.000</p>
                    </div>
                </div>
            </Link>
            <Link href="" className="w-full p-4">
                <div className="card bg-base-100 shadow-lg">
                    <figure>
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p className="font-bold text-sm">IDR 200.000</p>
                    </div>
                </div>
            </Link>
     </Slider>
     </div>
  )
}

export default Product